import { CircularProgress, styled } from '@mui/joy'

export const TableLoading = () => {
    return (
        <tbody>
            <tr>
                <TDCss colSpan={5} style={{ textAlign: 'center', height: '400px' }}>
                    <CircularProgress />
                </TDCss>
            </tr>
        </tbody>
    )
}

const TDCss = styled(`td`)({
    textAlign: 'center',
    height: '400px'
})
