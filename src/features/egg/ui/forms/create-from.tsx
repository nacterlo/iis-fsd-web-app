import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { useEffect, useState } from "react";
import { Organization } from "@/features/organization/model/types";
import { Stack, FormControl, FormLabel, Autocomplete, AutocompleteOption, Option, Input, Select, Textarea } from "@mui/joy";
import { CreateEgg, FormValuesEgg } from "../../model/types";


interface CreateFormProps {
    onSubmitCreate: (data: CreateEgg) => Promise<void>;
}

export const FormCreateEgg = ({ onSubmitCreate }: CreateFormProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesEgg>()

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    const onSubmit: SubmitHandler<FormValuesEgg> = async (data) => {
        const createData: CreateEgg = {
            addresseeId: data.addresseeId,
            businessEntityId: data.businessEntityId,
            ownerAtBirthId: data.ownerAtBirthId,
            breedingCertificate: {
                date: data.breedingCertificateDate,
                value: data.breedingCertificateValue
            },
            party: data.party,
            breedingGroup: data.breedingGroup,
            characteristicsEggsEmbryos: data.characteristicsEggsEmbryos,
            cross: data.cross,
            herdProductivity: data.herdProductivity,
            line: data.line,
            parentalForm: data.parentalForm,
            population: data.population,
        }
        await onSubmitCreate(createData)
    }

    return (
        <form id="createEgg" onSubmit={handleSubmit(onSubmit)}>
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
                    <FormControl required sx={{ flexGrow: 1 }} error={!!errors.cross}>
                        <FormLabel required>Кросс</FormLabel>
                        <Controller
                            name="cross"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size='sm'
                                    placeholder='Кросс'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ width: '25%' }} error={!!errors.line}>
                        <FormLabel required>Линия</FormLabel>
                        <Controller
                            name="line"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    size="sm"
                                    placeholder='Линия'
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl required sx={{ flexGrow: 1 }} error={!!errors.breedingGroup}>
                        <FormLabel required>Племенная группа</FormLabel>
                        <Controller
                            name="breedingGroup"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Select
                                    size="sm"
                                    placeholder='Выберите группу'
                                    {...field}
                                    onChange={(_e, newValue) => {
                                        field.onChange(newValue)
                                    }}
                                >
                                    <Option value={'Cелекционная'}>Cелекционная</Option>
                                    <Option value={'Контрольная'}>Контрольная</Option>
                                    <Option value={'Множитель'}>Множитель</Option>

                                </Select>
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

                <FormControl sx={{ width: '100%' }}>
                    <FormLabel required>Характеристики инкубационных яиц (эмбрионов)</FormLabel>
                    <Controller
                        name="characteristicsEggsEmbryos"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea size="sm" minRows={2} placeholder='Характеристики инкубационных яиц (эмбрионов)' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel required>Продуктивность</FormLabel>
                    <Controller
                        name="herdProductivity"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea size="sm" minRows={2} placeholder='Продуктивность' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel required>Родительская форма</FormLabel>
                    <Controller
                        name="parentalForm"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea size="sm" minRows={2} placeholder='Родительская форма' {...field} />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel required>Популяция</FormLabel>
                    <Controller
                        name="population"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Textarea size="sm" minRows={2} placeholder='Популяция' {...field} />
                        )}
                    />
                </FormControl>
            </Stack>
        </form>
    )
}