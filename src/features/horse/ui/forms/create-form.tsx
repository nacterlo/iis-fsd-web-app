import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateHorse, FormValuesHorse } from "../../model/types";
import { useGetFullOrganizationsQuery } from "@/app/store/api/organization-api";
import { Organization } from "@/features/organization/model/types";
import { useState, useEffect } from "react";
import { Autocomplete, AutocompleteOption, Box, Button, Card, Divider, FormControl, FormLabel, Input, Option, Select, Stack, Textarea } from "@mui/joy";
import { FemaleRounded, ListRounded, MaleRounded } from "@mui/icons-material";
import { convertToBase64 } from "@/shared/lib/utils";


interface CreateFormProps {
    onSubmitCreate: (data: CreateHorse) => Promise<void>
}

export const FormHorse = ({ onSubmitCreate }: CreateFormProps) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValuesHorse>()

    const { data: fullOrganizations } = useGetFullOrganizationsQuery()

    const [optionsOrganization, setOptionsOrganization] = useState<Organization[]>([] as Organization[])

    useEffect(() => {
        if (fullOrganizations) setOptionsOrganization(fullOrganizations.data)
    }, [fullOrganizations])

    const onSubmit: SubmitHandler<FormValuesHorse> = async (data) => {
        const createData: CreateHorse = {
            addresseeId: data.addresseeId,
            businessEntityId: data.businessEntityId,
            ownerAtBirthId: data.ownerAtBirthId,
            birthDate: data.birthDate,
            breed: data.breed,
            events: data.events,
            graphicDescription: data.graphicDescription,
            identificationNumber: data.identificationNumber,
            individualNumber: data.individualNumber,
            lineage: data.lineage,
            name: data.name,
            number: data.number,
            party: data.party,
            sexCode: data.sexCode,
            suit: data.suit,
            bonitation: {
                date: data.bonitationDate,
                evaluation: data.bonitationEvaluation,
                measurements: data.bonitationMeasurements
            }
        }

        await onSubmitCreate(createData)
    }

    return (
        <form id="createHorse" onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='column' spacing={1.5}>
                <Controller
                    name="graphicDescription"
                    control={control}
                    rules={{
                        required: 'Выберите изображение',
                        validate: {
                            validBase64: (value) =>
                                typeof value === 'string' && value.startsWith('data:image') || 'Некорректный формат изображения'
                        }
                    }}
                    render={({ field: { onChange, value }, fieldState }) => (
                        <FormControl >
                            <FormLabel>Графическое описание</FormLabel>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <input
                                    type="file"
                                    accept="image/jpeg, image/png"
                                    hidden
                                    id="avatar-upload"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (!file) {
                                            onChange(null);
                                            return;
                                        }

                                        // Валидация перед конвертацией
                                        if (file.size > 5 * 1024 * 1024) {
                                            onChange(null);
                                            return; // Можно добавить обработку ошибки
                                        }

                                        if (!['image/jpeg', 'image/png'].includes(file.type)) {
                                            onChange(null);
                                            return; // Можно добавить обработку ошибки
                                        }

                                        const base64 = await convertToBase64(file);
                                        onChange(base64);
                                    }}
                                />

                                <label htmlFor="avatar-upload" style={{ alignItems: 'center' }}>
                                    <Button component="span">
                                        {value ? 'Изменить фото' : 'Загрузить фото'}
                                    </Button>
                                </label>

                                {value && (
                                    <Card>
                                        <img src={value} alt="Preview" style={{ maxWidth: 400, maxHeight: 400 }} />
                                    </Card>
                                )}
                            </Box>

                            {fieldState.error && (
                                <div>{fieldState.error.message}</div>
                            )}
                        </FormControl>
                    )}
                />
                <Divider />
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

