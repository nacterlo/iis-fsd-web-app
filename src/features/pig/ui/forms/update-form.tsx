import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Pig, UpdatePig } from "../../model/types";
import { useEffect, useState } from "react";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { Organization } from "@/features/organization/model/types";
import { Autocomplete, AutocompleteOption, FormControl, FormLabel, Input, Option, Select, Stack, Textarea } from "@mui/joy";
import { MaleRounded, FemaleRounded } from "@mui/icons-material";




interface UpdateFormPigProps {
    initialData: Pig
    onSubmitUpdate: (data: UpdatePig) => void
}

export const UpdateFormPig = ({ initialData, onSubmitUpdate }: UpdateFormPigProps) => {
    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<UpdatePig>()

    console.log(initialData);

    useEffect(() => {
        reset({
            id: initialData.id,
            addresseeId: initialData.addressee.id,
            businessEntityId: initialData.businessEntity.id,
            ownerAtBirthId: initialData.ownerAtBirth.id,
            birthDate: initialData.birthDate.split('T')[0],
            breed: initialData.breed,
            breedingValue: initialData.breedingValue,
            identificationNumber: initialData.identificationNumber,
            individualNumber: initialData.individualNumber,
            lineage: initialData.lineage,
            party: initialData.party,
            productivity: initialData.productivity,
            sexCode: initialData.sexCode,
            updatedAt: initialData.updatedAt,
            weight: initialData.weight

        })
    }, [initialData, reset])

    const onSubmit: SubmitHandler<UpdatePig> = (data) => {
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
                                render={({ field: { onChange, ref } }) => (
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
                                render={({ field: { onChange, ref } }) => (
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
                                render={({ field: { onChange, ref } }) => (
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
                    <FormControl disabled sx={{ flexGrow: 1 }} error={!!errors.identificationNumber}>
                        <FormLabel>Идентификационный номер</FormLabel>
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
                    <FormControl sx={{ width: '25%' }} error={!!errors.breed}>
                        <FormLabel >Порода</FormLabel>
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
                        <FormLabel >Дата рождения</FormLabel>
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
                        <FormLabel >Пол животного</FormLabel>
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
                    <FormControl sx={{ width: '30%' }} error={!!errors.identificationNumber}>
                        <FormLabel>Индивидуальный номер</FormLabel>
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
                    <FormControl sx={{ width: '15%' }} error={!!errors.weight}>
                        <FormLabel>Вес</FormLabel>
                        <Controller
                            name="weight"
                            control={control}
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    size="sm"
                                    placeholder='Вес'
                                    startDecorator='кг.'
                                    type="number"
                                    slotProps={{
                                        input: {
                                            min: 1,
                                            max: 350,
                                            step: 0.1,
                                        },
                                    }}
                                />
                            )}
                        />
                    </FormControl>
                </Stack>
                <FormControl sx={{ flexGrow: 1 }} >
                    <FormLabel>Абсолютные показатели продуктивности</FormLabel>
                    <Controller
                        name="productivity"
                        control={control}
                        rules={{ required: 'Обязательное поле' }}
                        render={({ field }) => (
                            <Input
                                size='sm'
                                placeholder='Продуктивность'
                                {...field}
                            />
                        )}
                    />
                </FormControl>
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
                    <FormLabel>Родословная</FormLabel>
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