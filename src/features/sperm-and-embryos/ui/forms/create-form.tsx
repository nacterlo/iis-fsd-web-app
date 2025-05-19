import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { Organization } from "@/features/organization/model/types";
import { Autocomplete, AutocompleteOption, Box, Divider, FormControl, FormLabel, Input, Option, Select, Stack, Textarea } from "@mui/joy";
import { CreateSpermAndEmbryos } from "../../model/types";
import { MaleRounded, FemaleRounded, ListRounded } from "@mui/icons-material";



interface CreateFormProps {
    onSubmitCreate: (data: CreateSpermAndEmbryos) => Promise<void>
}

export const FormCreateSpermAndEmbryos = ({ }: CreateFormProps) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    const onSubmit: SubmitHandler<any> = async (data) => {
        console.log(data);

        // const createData: CreateFish = {
        //     addresseeId: data.addresseeId,
        //     businessEntityId: data.businessEntityId,
        //     ownerAtBirthId: data.ownerAtBirthId,
        //     breed: data.breed,
        //     breedingCertificate: {
        //         date: data.breedingCertificateDate,
        //         value: data.breedingCertificateValue
        //     },
        //     name: data.name,
        //     party: data.party,
        // }
        // await onSubmitCreate(createData)
    }

    const [valueTypeAnimal, setValueTypeAnimal] = useState<string | null>(null);
    const handleChangeTypeAnimal = (
        _event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setValueTypeAnimal(newValue);
        console.log(newValue);
    };

    return (
        <form id="createSpermAndEmbryos" onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='column' spacing={1.5}>
                {optionsOrganization.length > 0 && (
                    <Stack direction='row' spacing={3}>
                        <FormControl required sx={{ flexGrow: 1 }} >
                            <FormLabel>Получатель</FormLabel>
                            <Controller
                                control={control}
                                name="addresseeId"
                                render={({ field: { onChange, ref } }) => (
                                    <Autocomplete
                                        size="sm"
                                        placeholder="Получатель"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        options={optionsOrganization}
                                        onChange={(_, newValue: Organization | null) => onChange(newValue?.id)}
                                        slotProps={{
                                            input: {
                                                ref,
                                                autoComplete: 'new-password'
                                            }
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
                        </FormControl>

                        <FormControl required sx={{ flexGrow: 1 }} >
                            <FormLabel>Собственник</FormLabel>
                            <Controller
                                control={control}
                                name="businessEntityId"
                                render={({ field: { onChange, ref } }) => (
                                    <Autocomplete
                                        size="sm"
                                        placeholder="Собственник"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        options={optionsOrganization}
                                        onChange={(_, newValue: Organization | null) => onChange(newValue?.id)}
                                        slotProps={{
                                            input: {
                                                ref,
                                                autoComplete: 'new-password'
                                            }
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
                        </FormControl>
                        <FormControl required sx={{ flexGrow: 1 }} >
                            <FormLabel>Место рождения</FormLabel>
                            <Controller
                                control={control}
                                name="ownerAtBirthId"
                                render={({ field: { onChange, ref } }) => (
                                    <Autocomplete
                                        size="sm"
                                        placeholder="Место рождения"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        options={optionsOrganization}
                                        onChange={(_, newValue: Organization | null) => onChange(newValue?.id)}
                                        slotProps={{
                                            input: {
                                                ref,
                                                autoComplete: 'new-password'
                                            }
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
                        </FormControl>
                    </Stack>
                )}
                <FormControl required sx={{ width: '35%' }} >
                    <FormLabel>Племенной производитель (родители)</FormLabel>
                    <Select
                        size="sm"
                        placeholder="Вид животного"
                        onChange={handleChangeTypeAnimal}
                    >
                        <Option value="1">КРС молочного направления</Option>
                        <Option value="2">КРС мясного направления</Option>
                    </Select>
                </FormControl>
                <Box >
                    {valueTypeAnimal === '1' && (
                        <Stack direction='column' spacing={1.5}>
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
                    )}
                    {valueTypeAnimal === '2' && (
                        <Stack direction='column' spacing={1.5}>
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
                            <Stack direction="row" spacing={2}>
                                <FormControl sx={{ width: '15%' }}>
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
                                <FormControl required sx={{ width: '35%' }}>
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
                                <FormControl required sx={{ width: '45%' }}>
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

                            </Stack>
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
                    )}
                    <Divider />
                    {/* {valueTypeAnimal === '2' && <CattleBeefValues />} */}

                </Box>
                <Divider />

            </Stack>
        </form >
    )
}


