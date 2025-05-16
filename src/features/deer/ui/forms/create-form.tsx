import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateDeer, FormValuesDeer } from "../../model/types";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { useEffect, useState } from "react";
import { Organization } from "@/features/organization/model/types";
import { Autocomplete, AutocompleteOption, FormControl, FormLabel, Input, Option, Select, Stack, Textarea } from "@mui/joy";
import { MaleRounded, FemaleRounded } from "@mui/icons-material";


interface CreateFormProps {
    onSubmitCreate: (data: CreateDeer) => Promise<void>
}


export const CreateFormDeer = ({ onSubmitCreate }: CreateFormProps) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValuesDeer>()

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    const onSubmit: SubmitHandler<FormValuesDeer> = async (data) => {

        const createData: CreateDeer = {
            addresseeId: data.addresseeId,
            businessEntityId: data.businessEntityId,
            ownerAtBirthId: data.ownerAtBirthId,
            birthDate: data.birthDate,
            breed: data.breed,
            identificationNumber: data.identificationNumber,
            individualNumber: data.individualNumber,
            lineage: data.lineage,
            party: data.party,
            sexCode: data.sexCode,
            selectableTraits: data.selectableTraits,
            bonitation: {
                date: data.bonitationDate,
                evaluation: data.bonitationEvaluation,
                measurements: data.bonitationMeasurements
            }
        }

        await onSubmitCreate(createData)
    }

    return (
        <form id="createDeer" onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='column' spacing={1.5}>
                {optionsOrganization.length > 0 && (
                    <Stack direction='row' spacing={3}>
                        <FormControl required sx={{ flexGrow: 1 }}>
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
                    <FormControl required sx={{ width: '30%' }} error={!!errors.identificationNumber}>
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
                    <FormControl required sx={{ width: '30%' }}>
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
                    <FormControl required sx={{ flexGrow: 1 }}>
                        <FormLabel>Селекционируемые признаки</FormLabel>
                        <Controller
                            name="selectableTraits"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Селекционируемые признаки'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                </Stack>
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
            </Stack>
        </form>
    )
}