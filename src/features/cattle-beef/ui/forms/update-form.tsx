import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CattleBeef, UpdateCattleBeef } from "../../model/types"
import { useEffect, useState } from "react";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { Organization } from "@/features/organization/model/types";
import { MaleRounded, FemaleRounded, ListRounded } from "@mui/icons-material";
import { Stack, FormControl, FormLabel, Autocomplete, AutocompleteOption, Select, Textarea, Option, Input } from "@mui/joy";


interface CattleMilkFormProps {
    initialData: CattleBeef
    onSubmitUpdate: (data: UpdateCattleBeef) => void
}

export const UpdateFormCattleBeef = ({ initialData, onSubmitUpdate }: CattleMilkFormProps) => {
    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<UpdateCattleBeef>();


    useEffect(() => {
        reset({
            id: initialData.id,
            addresseeId: initialData.addressee.id,
            businessEntityId: initialData.businessEntity.id,
            ownerAtBirthId: initialData.ownerAtBirth.id,
            identificationNumber: initialData.identificationNumber,
            breed: initialData.breed,
            birthDate: initialData.birthDate.split('T')[0],
            breedingValue: initialData.breedingValue,
            createdAt: initialData.CreatedAt,
            lineage: initialData.lineage,
            methodOfObtaining: initialData.methodOfObtaining,
            name: initialData.name,
            party: initialData.party,
            recessiveGenes: initialData.recessiveGenes,
            reproduction: initialData.reproduction,
            sexCode: initialData.sexCode,
            suit: initialData.suit,
            updatedAt: initialData.UpdatedAt
        })

    }, [initialData, reset])

    const onSubmit: SubmitHandler<UpdateCattleBeef> = (data) => {
        console.log(data);
        data.birthDate = data.birthDate + 'T03:00:00Z'
        onSubmitUpdate(data)
    }

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    return (
        <form onSubmit={handleSubmit(onSubmit)} id='updateCattleBeef'>
            <Stack direction='column' spacing={1.5}>
                {optionsOrganization.length > 0 && (
                    <Stack direction='row' spacing={3}>
                        <FormControl sx={{ flexGrow: 1 }} >
                            <FormLabel>Получатель</FormLabel>
                            <Controller
                                control={control}
                                name="addresseeId"
                                render={({ field: { onChange, value, ref } }) => (
                                    <Autocomplete
                                        placeholder="Выберите"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        defaultValue={optionsOrganization[optionsOrganization.findIndex(el => el.id === initialData.addressee.id)]}
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

                        <FormControl sx={{ flexGrow: 1 }} >
                            <FormLabel>Собственник</FormLabel>
                            <Controller
                                control={control}
                                name="businessEntityId"
                                render={({ field: { onChange, value, ref } }) => (
                                    <Autocomplete
                                        placeholder="Выберите"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        options={optionsOrganization}
                                        onChange={(_, newValue: Organization | null) => onChange(newValue?.id)}
                                        defaultValue={optionsOrganization[optionsOrganization.findIndex(el => el.id === initialData.businessEntity.id)]}
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
                        <FormControl sx={{ flexGrow: 1 }} >
                            <FormLabel>Место рождения</FormLabel>
                            <Controller
                                control={control}
                                name="ownerAtBirthId"
                                render={({ field: { onChange, value, ref } }) => (
                                    <Autocomplete
                                        placeholder="Выберите"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        options={optionsOrganization}
                                        onChange={(_, newValue: Organization | null) => onChange(newValue?.id)}
                                        defaultValue={optionsOrganization[optionsOrganization.findIndex(el => el.id === initialData.ownerAtBirth.id)]}
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
                <Stack direction='row' spacing={3}>
                    <FormControl sx={{ flexGrow: 1 }} error={!!errors.identificationNumber}>
                        <FormLabel>Идентификационный номер</FormLabel>
                        <Controller
                            name="identificationNumber"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    disabled
                                    placeholder='Идентификационный номер'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '25%' }} error={!!errors.breed}>
                        <FormLabel>Порода</FormLabel>
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
                    <FormControl sx={{ width: 'auto' }} error={!!errors.birthDate}>
                        <FormLabel>Дата рождения</FormLabel>
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
                    <FormControl sx={{ width: '20%' }} error={!!errors.sexCode}>
                        <FormLabel>Пол животного</FormLabel>
                        <Controller
                            name="sexCode"
                            control={control}
                            rules={{ required: 'Обязательное поле', minLength: 1 }}
                            render={({ field }) => (
                                <Select
                                    {...field}
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
                    <FormControl sx={{ width: '35%' }}>
                        <FormLabel>Масть</FormLabel>
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
                    <FormControl sx={{ width: '45%' }}>
                        <FormLabel >Способ получения</FormLabel>
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
                    <FormControl sx={{ width: '50%' }}>
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
                    <FormControl sx={{ width: '50%' }} >
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
                    <FormLabel >Родословная</FormLabel>
                    <Controller
                        name="lineage"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea sx={{ fontSize: 12 }} minRows={2} placeholder='Родословная' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel>Рецессивные гены</FormLabel>
                    <Controller
                        name="recessiveGenes"
                        control={control}
                        render={({ field }) => (
                            <Textarea minRows={2} placeholder='Рецессивные гены' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }} >
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