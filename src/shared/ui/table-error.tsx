import { Typography } from '@mui/joy'

export const TableError = () => {
    return (
        <tbody>
            <tr>
                <td colSpan={5} style={{ textAlign: 'center', verticalAlign: 'middle', height: '400px' }}>
                    <Typography level='body-lg' color='danger'>Ошибка получения данных</Typography>
                </td>
            </tr>
        </tbody>
    )
}
