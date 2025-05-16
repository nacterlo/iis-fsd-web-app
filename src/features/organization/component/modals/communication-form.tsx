import { PublicRounded } from "@mui/icons-material"
import { FormControl, FormLabel, Input, Option, Select, Stack } from "@mui/joy"



export const Communication = () => {
    return (
        <Stack direction='row' spacing={3}>
            <FormControl sx={{ width: '30%' }}>
                <FormLabel>Кодовое обозначение вида средства</FormLabel>
                <Select
                    size='sm'
                    startDecorator={<PublicRounded />}
                    placeholder='Выберите вид связи'
                    name='channelCode'
                >
                    <Option value={'AO'}>AO (Веб-сайт)</Option>
                    <Option value={'EM'}>EM (Электронная почта)</Option>
                    <Option value={'FX'}>FX (Телефакс)</Option>
                    <Option value={'TE'}>TE (Телефон)</Option>
                    <Option value={'TG'}>TG (Телеграф)</Option>
                    <Option value={'TL'}>TL (Телекс)</Option>
                    <Option value={'ZA'}>ZA (Специальная связь)</Option>
                    <Option value={'ZB'}>ZB (Радиосвязь)</Option>
                    <Option value={'ZZ'}>ZZ (Иной вид связи)</Option>
                </Select>
            </FormControl>

            <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Наименование вида средства</FormLabel>
                <Input
                    size="sm"
                    required
                    placeholder="Например: директор, приемная"
                    name='name'
                />
            </FormControl>

            <FormControl sx={{ width: '30%' }}>
                <FormLabel>Контакт</FormLabel>
                <Input
                    size="sm"
                    placeholder="Контакт"
                    name='contact'
                />
            </FormControl>
        </Stack>
    )
}