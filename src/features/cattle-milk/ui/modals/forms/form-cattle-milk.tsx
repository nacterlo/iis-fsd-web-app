import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { CreateCattleMilk } from '../../../model/types'
import { Autocomplete, AutocompleteOption, FormControl, FormHelperText, FormLabel, Input, Option, Select, Stack, Textarea } from '@mui/joy'
import { FemaleRounded, ListRounded, MaleRounded } from '@mui/icons-material'
import { useLazySearchOrganizationsQuery } from '@/app/store/api/organization-api'
import { IOrgSearch } from '@/features/organization/model/types'

interface IFormValues {
    addresseeId: IOrgSearch | null;
    businessEntityId: IOrgSearch | null;
    ownerAtBirthId: IOrgSearch | null;
}

interface FormCattleMilkProps {
    onSubmitCrateCattleMilk: (data: CreateCattleMilk) => Promise<void>
}
export const FormCattleMilk = ({ onSubmitCrateCattleMilk }: FormCattleMilkProps) => {


    const { watch, handleSubmit, formState: { errors }, control } = useForm<CreateCattleMilk>({
        defaultValues: {

        }
    })

    const [triggerSearchOrganizations, { isLoading: loadingSearch }] = useLazySearchOrganizationsQuery();
    // Общая функция для поиска организаций
    // Общие обработчики для каждого поля
    const handleSearch = (searchTerm: string, setOptions: React.Dispatch<React.SetStateAction<IOrgSearch[]>>) => {
        if (searchTerm.trim().length > 2) {
            triggerSearchOrganizations({ name: searchTerm })
                .unwrap()
                .then((response) => {
                    setOptions(response.data || []);
                });
        }
    };

    //Поиск получатель
    const [searchAddresseId, setSearchAddresseId] = useState<string>('')
    const [addresseIdResults, setAddresseIdResults] = useState<IOrgSearch[]>([])

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch(searchAddresseId, setAddresseIdResults)
        }, 300)
        return () => clearTimeout(timer)
    }, [searchAddresseId])

    //Поиск получатель собственник
    const [searchBusinessEntityId, setSearchBusinessEntityId] = useState<string>('')
    const [businessEntityIdResults, setBusinessEntityIdResults] = useState<IOrgSearch[]>([])

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch(searchBusinessEntityId, setBusinessEntityIdResults)
        }, 300)
        return () => clearTimeout(timer)
    }, [searchBusinessEntityId])

    //Поиск место рождения
    const [searchOwnerAtBirthId, setSearchOwnerAtBirthId] = useState<string>('')
    const [ownerAtBirthIdResults, setOwnerAtBirthIdResults] = useState<IOrgSearch[]>([])

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch(searchOwnerAtBirthId, setOwnerAtBirthIdResults)
        }, 300)
        return () => clearTimeout(timer)
    }, [searchOwnerAtBirthId])

    const onSubmit: SubmitHandler<CreateCattleMilk> = async (data) => {
        data.birthDate = data.birthDate + 'T03:00:00Z'
        await onSubmitCrateCattleMilk(data)
    }

    // Общая render функция для Autocomplete
    const renderAutocomplete = (
        name: keyof IFormValues,
        label: string,
        _searchTerm: string,
        setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
        options: IOrgSearch[],
        requiredMessage: string
    ) => (
        <FormControl required sx={{ width: '33%' }} error={!!errors[name]}>
            <FormLabel>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={{ required: requiredMessage }}
                render={({ field: { onChange, ref } }) => (
                    <Autocomplete
                        loading={loadingSearch}
                        placeholder={`Введите название ${label.toLowerCase()}`}
                        onInputChange={(_, newValue, reason) => {
                            if (reason === 'input') setSearchTerm(newValue)
                        }}
                        onChange={(_, newValue: IOrgSearch | null) => onChange(newValue?.id || null)}
                        options={options}
                        getOptionLabel={(option) => option.name}
                        isOptionEqualToValue={(option, value) => option.id === value?.id}
                        noOptionsText={options.length === 0 ? 'Введите минимум 3 символа' : 'Не найдено'}
                        slotProps={{
                            input: {
                                ref,
                            },
                        }}
                        renderOption={(props, option) => (
                            <AutocompleteOption {...props} key={option.id}>
                                {option.countryCode && ` (${option.countryCode}) `}
                                {option.name}
                            </AutocompleteOption>
                        )}
                    />
                )}
            />
            {errors[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
        </FormControl>
    );
    return (
        <form onSubmit={handleSubmit(onSubmit)} id='createCattleMilk'>
            <Stack direction='column' spacing={1.5}>
                <Stack direction='row' spacing={3}>
                    {renderAutocomplete(
                        'addresseeId',
                        'Получатель',
                        searchAddresseId,
                        setSearchAddresseId,
                        addresseIdResults,
                        'qwe'
                    )}
                    {renderAutocomplete(
                        'businessEntityId',
                        'Собственник',
                        searchBusinessEntityId,
                        setSearchBusinessEntityId,
                        businessEntityIdResults,
                        'qweq'
                    )}
                    {renderAutocomplete(
                        'ownerAtBirthId',
                        'Место рождения',
                        searchOwnerAtBirthId,
                        setSearchOwnerAtBirthId,
                        ownerAtBirthIdResults,
                        'asfzzz'
                    )}
                </Stack>
                <Stack direction='row' spacing={3}>
                    <FormControl required sx={{ flexGrow: 1 }} error={!!errors.identificationNumber}>
                        <FormLabel required>Идентификационный номер</FormLabel>
                        <Controller
                            name="identificationNumber"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Идентификационный номер'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '25%' }} error={!!errors.breed}>
                        <FormLabel required>Порода</FormLabel>
                        <Controller
                            name="breed"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size="sm"
                                    placeholder='Порода'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: 'auto' }} error={!!errors.birthDate}>
                        <FormLabel required>Дата рождения</FormLabel>
                        <Controller
                            name="birthDate"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    type='date'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '20%' }} error={!!errors.sexCode}>
                        <FormLabel required>Пол животного</FormLabel>
                        <Controller
                            name="sexCode"
                            control={control}
                            rules={{ required: 'Обязательное поле', minLength: 1 }}
                            render={({ field }) => (
                                <Select
                                    size="sm"
                                    startDecorator={watch('sexCode') ? watch('sexCode') === 'M' ? <MaleRounded /> : <FemaleRounded /> : null}
                                    placeholder='Выберите пол'
                                    name='sexCode'
                                    onChange={(_e, newValue) => {
                                        field.onChange(newValue)
                                    }}
                                >
                                    <Option value={'M'}>(M) &mdash; Самец</Option>
                                    <Option value={'F'}>(F) &mdash; Самка</Option>
                                </Select>
                            )}
                        />
                    </FormControl>
                </Stack>
                {/* qiwjrpqwre */}
                <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Кличка</FormLabel>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    size="sm"
                                    placeholder="Кличка"
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '25%' }}>
                        <FormLabel required>Масть</FormLabel>
                        <Controller
                            name="suit"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Select
                                    size='sm'
                                    startDecorator={<ListRounded />}
                                    placeholder='Масть'
                                    {...field}
                                    onChange={(_e, newValue) => {
                                        field.onChange(newValue)
                                    }}
                                >
                                    <Option value={'B&W'}>(B&W)&mdash;Черно-пестрая</Option>
                                    <Option value={'R&W'}>(R&W)&mdash;Красно-пестрая</Option>
                                    <Option value={'B/R'}>(B/R)&mdash;Преимущественно Ч/П</Option>
                                    <Option value={'AB'}>(AB)&mdash;Полностью черная</Option>
                                    <Option value={'AR'}>(AR)&mdash;Полностью красная</Option>
                                    <Option value={'AW'}>(AW)&mdash;Полностью белая</Option>
                                    <Option value={'W/B'}>(W/B)&mdash;Преимущественно белая</Option>
                                    <Option value={'G'}>(G)&mdash;Серая</Option>
                                    <Option value={'RN'}>(RN)&mdash;Чалая</Option>
                                    <Option value={'BC'}>(BC)&mdash;Бурая</Option>
                                    <Option value={'IC'}>(IC)&mdash;Нетипичн. или другая</Option>
                                </Select>
                            )}
                        />

                    </FormControl>
                    <FormControl required sx={{ width: '30%' }}>
                        <FormLabel required>Способ получения</FormLabel>
                        <Controller
                            name="methodOfObtaining"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Select
                                    size='sm'
                                    startDecorator={<ListRounded />}
                                    placeholder='Способ получения'
                                    {...field}
                                    onChange={(_e, newValue) => {
                                        field.onChange(newValue)
                                    }}
                                >
                                    <Option value={'ET'}>Эмбриотрансплантат (обычный)</Option>
                                    <Option value={'ETM'}>Эмбриотрансплантат (деление, клонирование эмбриона)</Option>
                                    <Option value={'ETA'}>Эмбриотрансплантат, полученный путем клонирования взрослого животного</Option>
                                    <Option value={'AI'}>Искусственное осеменение</Option>
                                    <Option value={'NI'}>Ручная случка</Option>
                                    <Option value={'MB'}>Множественные роды</Option>
                                    <Option value={'MBM'}>Множественные роды смешанного типа</Option>
                                    <Option value={'TW'}>Двойня</Option>
                                    <Option value={'TRI'}>Тройня</Option>
                                    <Option value={'OTH'}>Иное</Option>
                                </Select>
                            )}
                        />

                    </FormControl>

                    <FormControl required sx={{ width: '20%' }}>
                        <FormLabel required>Оценка экстерьера</FormLabel>
                        <Controller
                            name="exterior"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size="sm"
                                    placeholder="Оценка экстерьера"
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                </Stack>
                {/* ?qwrqrqw */}
                <Stack direction="row" spacing={5}>
                    <FormControl required sx={{ width: '50%' }}>
                        <FormLabel>Идентификатор партии</FormLabel>
                        <Controller
                            name="party"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Идентификатор партии'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '50%' }} required>
                        <FormLabel>Индекс племенной ценности</FormLabel>
                        <Controller
                            name="breedingValue"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Индекс племенной ценности'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                </Stack>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel required>Абсолютные показатели продуктивности</FormLabel>
                    <Controller
                        name="productivity"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                size="sm"
                                placeholder="Абсолютные показатели продуктивности"
                                {...field}
                            />
                        )}
                    />

                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel required>Родословная</FormLabel>
                    <Controller
                        name="lineage"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea minRows={2} placeholder='Родословная' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl required sx={{ width: '100%' }}>
                    <FormLabel>Рецессивные гены</FormLabel>
                    <Controller
                        name="recessiveGenes"
                        control={control}
                        render={({ field }) => (
                            <Textarea minRows={2} placeholder='Рецессивные гены' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }} required>
                    <FormLabel>Воспроизводитель</FormLabel>
                    <Controller
                        name="reproduction"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea minRows={2} placeholder='Воспроизводитель' {...field} />
                        )}
                    />
                </FormControl>
                
            </Stack>
        </form>
    )
}
