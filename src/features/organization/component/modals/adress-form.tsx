import { Stack, FormControl, FormLabel, Divider, Input } from "@mui/joy"



interface AdressComponentProps {
    typeAdress: string
}
export const AdressForm = ({ typeAdress }: AdressComponentProps) => {
    return (
        <>
            <Stack direction='row' spacing={3}>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Город</FormLabel>
                    {/* <Input size='sm' placeholder='Город' name='city_name' /> */}
                    <Input size='sm' placeholder='Город' name={`cityName${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Населенный пункт</FormLabel>
                    <Input size='sm' placeholder='Населенный пункт' name={`settlementName${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Район</FormLabel>
                    <Input size='sm' placeholder='Район' name={`districtName${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Улица</FormLabel>
                    <Input size='sm' placeholder='Улица' name={`streetName${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Дом, корпус</FormLabel>
                    <Input size='sm' placeholder='Дом, корпус' name={`buildingNumber${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Квартира, офис</FormLabel>
                    <Input size='sm' placeholder='Квартира, офис' name={`roomNumber${typeAdress}`} />
                </FormControl>
            </Stack>
            <Stack direction='row' spacing={8}>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Код страны</FormLabel>
                    <Input size='sm' placeholder='Код страны' name={`countryCodeType${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Почтовый индекс</FormLabel>
                    <Input size='sm' placeholder='Почтовый индекс' name={`postCode${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Номер почтового ящика</FormLabel>
                    <Input size='sm' placeholder='Номер почтового ящика' name={`postOfficeBox${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Область</FormLabel>
                    <Input size='sm' placeholder='Область' name={`regionName${typeAdress}`} />
                </FormControl>
                <FormControl sx={{ width: '15%' }}>
                    <FormLabel>Код области</FormLabel>
                    <Input size='sm' placeholder='Код области' name={`territoryCode${typeAdress}`} />
                </FormControl>
            </Stack>
            <Divider />
        </>
    )
}