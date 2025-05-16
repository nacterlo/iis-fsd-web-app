import { PublicRounded } from "@mui/icons-material"
import { Box, Button, Card, CircularProgress, DialogActions, Divider, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Option, Select, Stack, Typography } from "@mui/joy"
import React from "react"
import { IAdressList, ICreateOrganization } from "../../model/types"
import { AddCommunication } from "./button-add-comunication"
import { AdressForm } from "./adress-form"
import { useCreateOrganizationMutation } from "@/app/store/api/organization-api"



interface ModalCreateOrganizationProps {
    open: boolean
    onClose: () => void
}

export const ModalCreateOrganization = ({ open, onClose }: ModalCreateOrganizationProps) => {

    const [createOrganization, { isLoading: loadingCreateOrganization }] = useCreateOrganizationMutation()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formJson = Object.fromEntries((formData as any).entries())

        const createData: ICreateOrganization = {
            businessEntityName: formJson.businessEntityName,
            countryCode: formJson.countryCode,
            businessEntityBriefName: formJson.businessEntityBriefName,
            businessEntityTypeName: formJson.businessEntityTypeName,
            taxpayer: formJson.taxpayer,
            taxRegistrationReasonCode: formJson.taxRegistrationReasonCode,
            uniqueCustomsNumber: formJson.uniqueCustomsNumber,
            addressList: createAdressArr(selectedAdress, formJson),
            communicationsList: [
                {
                    channelCode: formJson.channelCode,
                    contact: formJson.contact,
                    name: formJson.name
                }
            ]
        }

        await createOrganization(createData).unwrap()
            .then(() => {
                onClose()
            }).catch((err) => {
                console.log(err)
            })
    }

    const [selectedAdress, setSelectedAdress] = React.useState<string[]>(['1'])

    const handleChangeAdress = (_event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.FocusEvent<Element, Element> | null, newValue: any) => {
        setSelectedAdress(newValue)
    }

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog
                layout={'fullscreen'}
                sx={{
                    display: 'flex'
                }}
            >
                <ModalClose />
                <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Добавление</Typography>
                    <Typography level="body-sm">
                        Организации
                    </Typography>
                </Box>
                <Divider inset="none" />
                <Card sx={{ flexGrow: 1, overflowY: 'scroll' }}>
                    <form
                        onSubmit={handleSubmit}
                        id='createAnimalForm'
                    >
                        <Stack
                            direction="column"
                            spacing={3}
                            sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
                        >
                            <Stack spacing={4} sx={{ flexGrow: 1 }}>
                                <Stack direction='row' spacing={3}>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel required>Наименование организации(полное)</FormLabel>
                                        <Input
                                            size="sm"
                                            required
                                            autoFocus
                                            placeholder="Наименование организации(полное)"
                                            name='businessEntityName'
                                        />
                                    </FormControl>
                                    <FormControl sx={{ width: '30%' }}>
                                        <FormLabel>Наименование организации(сокращенное)</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Наименование организации(сокращенное)"
                                            name='businessEntityBriefName'
                                        />
                                    </FormControl>
                                    <FormControl sx={{ width: '30%' }}>
                                        <FormLabel>Наименование организационно-правовой формы</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Наименование организационно-правовой формы"
                                            name='businessEntityTypeName'
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction='row' spacing={3}>
                                    <FormControl sx={{ width: '22%' }}>
                                        <FormLabel required>Код страны</FormLabel>
                                        <Select
                                            size='sm'
                                            startDecorator={<PublicRounded />}
                                            placeholder='Выберите код страны'
                                            name='countryCode'
                                        >
                                            <Option value={'AM'}>AM (Республика Армения)</Option>
                                            <Option value={'BY'}>BY (Республика Беларусь)</Option>
                                            <Option value={'KZ'}>KZ (Республика Казахстан)</Option>
                                            <Option value={'KG'}>KG (Кыргызская Республика)</Option>
                                            <Option value={'RU'}>RU (Российская Федерация)</Option>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ width: '22%' }}>
                                        <FormLabel>Код причины постановки на учет</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Код причины постановки на учет"
                                            name='taxRegistrationReasonCode'
                                        />
                                    </FormControl>
                                    <FormControl sx={{ width: '22%' }}>
                                        <FormLabel>Таможенный номер</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Таможенный номер"
                                            name='uniqueCustomsNumber'
                                        />
                                    </FormControl>
                                    <FormControl sx={{ width: '22%' }}>
                                        <FormLabel>Идентификатор налогоплательщика</FormLabel>
                                        <Input
                                            size="sm"
                                            placeholder="Идентификатор налогоплательщика"
                                            name='taxpayer'
                                        />
                                    </FormControl>
                                </Stack>
                            </Stack>
                            <Divider />
                            <Stack direction='column' spacing={3}>
                                <Typography level='title-md'>Адрес:</Typography>
                                <Select
                                    defaultValue={['1']}
                                    multiple
                                    size="sm"
                                    onChange={handleChangeAdress}
                                    sx={{ width: 'auto', maxWidth: '500px' }}
                                    slotProps={{
                                        listbox: {
                                            sx: {
                                                width: '100%',
                                            },
                                        },
                                    }}
                                >
                                    <Option value='1'>Адрес регистрации</Option>
                                    <Option value='2'>Фактический адрес</Option>
                                    <Option value='3'>Почтовый адрес</Option>
                                </Select>

                                {selectedAdress.includes('1') ? (
                                    <>
                                        <Typography>Адрес регистрации:</Typography>
                                        <AdressForm typeAdress='_reg' />
                                    </>
                                ) : null}
                                {selectedAdress.includes('2') ? (
                                    <>
                                        <Typography>Фактический адрес:</Typography>
                                        <AdressForm typeAdress='_fact' />
                                    </>
                                ) : null}
                                {selectedAdress.includes('3') ? (
                                    <>
                                        <Typography>Почтовый адрес:</Typography>
                                        <AdressForm typeAdress='_post' />
                                    </>
                                ) : null}

                            </Stack>
                            <AddCommunication />
                        </Stack>
                    </form>
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button
                        size="sm"
                        type='submit'
                        form='createAnimalForm'
                        startDecorator={loadingCreateOrganization ? <CircularProgress size='sm' /> : null}
                        disabled={loadingCreateOrganization}
                    >
                        {loadingCreateOrganization ? 'Добавление...' : 'Добавить'}
                    </Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}

const createAdressArr = (selectedAdress: string[], formJson: any) => {
    const newArr: IAdressList[] = []
    selectedAdress.map(el => {
        if (el === '1') {
            newArr.push({
                addressKindCode: el,
                buildingNumber: formJson.buildingNumber_reg,
                cityName: formJson.cityName_reg,
                countryCodeType: formJson.countryCodeType_reg,
                districtName: formJson.districtName_reg,
                postCode: formJson.postCode_reg,
                postOfficeBox: formJson.postOfficeBox_reg,
                regionName: formJson.regionName_reg,
                roomNumber: formJson.roomNumber_reg,
                settlementName: formJson.settlementName_reg,
                streetName: formJson.streetName_reg,
                territoryCode: formJson.territoryCode_reg,
            })
        }
        if (el === '2') {
            newArr.push({
                addressKindCode: el,
                buildingNumber: formJson.buildingNumber_fact,
                cityName: formJson.cityName_fact,
                countryCodeType: formJson.countryCodeType_fact,
                districtName: formJson.districtName_fact,
                postCode: formJson.postCode_fact,
                postOfficeBox: formJson.postOfficeBox_fact,
                regionName: formJson.regionName_fact,
                roomNumber: formJson.roomNumber_fact,
                settlementName: formJson.settlementName_fact,
                streetName: formJson.streetName_fact,
                territoryCode: formJson.territoryCode_fact,
            })
        }
        if (el === '3') {
            newArr.push({
                addressKindCode: el,
                buildingNumber: formJson.buildingNumber_post,
                cityName: formJson.cityName_post,
                countryCodeType: formJson.countryCodeType_post,
                districtName: formJson.districtName_post,
                postCode: formJson.postCode_post,
                postOfficeBox: formJson.postOfficeBox_post,
                regionName: formJson.regionName_post,
                roomNumber: formJson.roomNumber_post,
                settlementName: formJson.settlementName_post,
                streetName: formJson.streetName_post,
                territoryCode: formJson.territoryCode_post,
            })
        }
    })

    return newArr
}