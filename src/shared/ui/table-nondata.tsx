import { Typography } from '@mui/joy'

export const TableNoData = () => {
    return (
            <tr style={{ height: '600px' }}>
                <td
                    colSpan={6}
                    style={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }}>
                    <Typography level='body-lg'>Нет данных</Typography>
                </td>
            </tr>
    )
}
