import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateCamel, FormValuesCamel } from "../../model/types";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { useEffect, useState } from "react";
import { Organization } from "@/features/organization/model/types";
import { Autocomplete, AutocompleteOption, FormControl, FormLabel, Input, Option, Select, Stack, Textarea } from "@mui/joy";
import { MaleRounded, FemaleRounded, ListRounded } from "@mui/icons-material";


interface CreateFormProps {
    onSubmitCreate: (data: CreateCamel) => Promise<void>
}

export const CreateFormCamel = ({ onSubmitCreate }: CreateFormProps) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValuesCamel>()

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    const onSubmit: SubmitHandler<FormValuesCamel> = async (data) => {
        const createData: CreateCamel = {
            addresseeId: data.addresseeId,
            businessEntityId: data.businessEntityId,
            ownerAtBirthId: data.ownerAtBirthId,
            birthDate: data.birthDate,
            breed: data.breed,
            events: data.events,
            identificationNumber: data.identificationNumber,
            individualNumber: data.individualNumber,
            lineage: data.lineage,
            name: data.name,
            number: data.number,
            party: data.party,
            sexCode: data.sexCode,
            suit: data.suit,
            recessiveGenes: data.recessiveGenes,
            bonitation: {
                date: data.bonitationDate,
                evaluation: data.bonitationEvaluation,
                measurements: data.bonitationMeasurements
            }
        }

        await onSubmitCreate(createData)
    }

    return (
        <form id="createCamel" onSubmit={handleSubmit(onSubmit)}>
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
                <Stack direction='row' spacing={3}>
                    <FormControl required sx={{ width: '30%' }} error={!!errors.individualNumber}>
                        <FormLabel required>Индивидуальный номер</FormLabel>
                        <Controller
                            name="individualNumber"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Индивидуальный номер'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '15%' }} error={!!errors.name}>
                        <FormLabel required>Кличка</FormLabel>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size="sm"
                                    placeholder='Кличка'
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '15%' }} error={!!errors.name}>
                        <FormLabel required>Номер</FormLabel>
                        <Controller
                            name="number"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size="sm"
                                    placeholder='Номер'
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
                </Stack>
                <FormControl required sx={{ width: '30%' }} error={!!errors.party}>
                    <FormLabel required>Идентификатор партии</FormLabel>
                    <Controller
                        name="party"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                size="sm"
                                placeholder='Идентификатор партии'
                            />
                        )}
                    />
                </FormControl>
                <Stack direction='row' spacing={3}>
                    <FormControl required sx={{ width: 'auto' }} error={!!errors.bonitationDate}>
                        <FormLabel required>Дата бонитировки</FormLabel>
                        <Controller
                            name="bonitationDate"
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
                    <FormControl required sx={{ flexGrow: 1 }} error={!!errors.bonitationEvaluation}>
                        <FormLabel required>Оценка бонитировки</FormLabel>
                        <Controller
                            name="bonitationEvaluation"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size="sm"
                                    placeholder='Оценка бонитировки'
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ flexGrow: 1 }} error={!!errors.bonitationMeasurements}>
                        <FormLabel required>Промеры бонитировки</FormLabel>
                        <Controller
                            name="bonitationMeasurements"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size="sm"
                                    placeholder='Промеры бонитировки'
                                />
                            )}
                        />
                    </FormControl>
                </Stack>
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
                <FormControl sx={{ width: '100%' }} error={!!errors.lineage}>
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
                <FormControl sx={{ flexGrow: 1 }} error={!!errors.events}>
                    <FormLabel>Участие в выставках, конкурсах, соревнованиях</FormLabel>
                    <Controller
                        name="events"
                        control={control}
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                placeholder='Участие в выставках, конкурсах, соревнованиях'
                            />
                        )}
                    />
                </FormControl>
            </Stack>
        </form>
    )

}