import { Stack, FormControl, FormLabel, Autocomplete, AutocompleteOption, Input, Option, Select, Textarea } from "@mui/joy";
import { MaleRounded, FemaleRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { Organization } from "@/features/organization/model/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Fish, FormValuesFish, UpdateFish } from "../../model/types";

interface UpdateFormProps {
    initialData: Fish
    onSubmitUpdate: (data: UpdateFish) => void
}

export const FormUpdateFish = ({ initialData, onSubmitUpdate }: UpdateFormProps) => {
    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<FormValuesFish>();

    useEffect(() => {
        reset({
            addresseeId: initialData.addressee.id,
            businessEntityId: initialData.businessEntity.id,
            ownerAtBirthId: initialData.ownerAtBirth.id,
            breed: initialData.breed,
            breedingCertificateDate: initialData.breedingCertificate.date,
            breedingCertificateValue: initialData.breedingCertificate.value,
            party: initialData.party,
            name: initialData.name
        })

    }, [initialData, reset])

    const onSubmit: SubmitHandler<FormValuesFish> = (data) => {
        const updateData: UpdateFish = {
            addresseeId: data.addresseeId,
            businessEntityId: data.businessEntityId,
            ownerAtBirthId: data.ownerAtBirthId,
            id: initialData.id,
            breed: data.breed,
            breedingCertificate: {
                date: data.breedingCertificateDate,
                value: data.breedingCertificateValue
            },
            party: data.party,
            name: data.name,
        }
        onSubmitUpdate(updateData)
    }

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    return (
        <form onSubmit={handleSubmit(onSubmit)} id='updateFish'>
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
                    <FormControl required sx={{ flexGrow: 1 }} error={!!errors.name}>
                        <FormLabel required>Наименование</FormLabel>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Select
                                    size="sm"
                                    placeholder='Выберите наименование'
                                    {...field}
                                    onChange={(_e, newValue) => {
                                        field.onChange(newValue)
                                    }}
                                >
                                    <Option value={'икра'}>Икра</Option>
                                    <Option value={'личинки'}>Личинки</Option>
                                    <Option value={'сперма'}>Сперма</Option>
                                    <Option value={'малёк'}>Малёк</Option>
                                    <Option value={'производители'}>Производители</Option>
                                    <Option value={'ремонтный молодняк'}>Ремонтный молодняк</Option>
                                </Select>
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
                    <FormControl required sx={{ width: '25%' }} error={!!errors.party}>
                        <FormLabel required>Идентификатор партии</FormLabel>
                        <Controller
                            name="party"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size="sm"
                                    placeholder='Идентификатор партии'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>

                </Stack>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel>Племенное свидетельство</FormLabel>
                </FormControl>
                <Stack direction='row' spacing={3}>
                    <FormControl required sx={{ width: '15%' }}>
                        <FormLabel>Дата выдачи</FormLabel>
                        <Controller
                            name="breedingCertificateDate"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    type='date'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '30%' }}>
                        <FormLabel>Кем выдан</FormLabel>
                        <Controller
                            name="breedingCertificateValue"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Кем выдан'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                </Stack>
            </Stack>
        </form>
    )
}