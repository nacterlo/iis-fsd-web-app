import { LoginForm } from '@/features/auth/components/login-form'
import { Box, Divider, Stack, Typography } from '@mui/joy'

export default function LoginPage() {
    return (
        <Box
            component="main"
            sx={{
                my: 'auto',
                py: 2,
                pb: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 400,
                maxWidth: '100%',
                mx: 'auto',
                borderRadius: 'sm',
                '& form': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                },
                [`& .MuiFormLabel-asterisk`]: {
                    visibility: 'hidden',
                },
            }}
        >
            <Stack sx={{ gap: 4, mb: 2 }}>
                <Stack sx={{ gap: 1 }}>
                    <Typography component="h1" level="h3" textAlign='center'>
                        Вход в ИИС
                    </Typography>
                </Stack>

            </Stack>
            <Divider
                sx={(theme) => ({
                    [theme.getColorSchemeSelector('light')]: {
                        color: { xs: '#FFF', md: 'text.tertiary' },
                    },
                })}
            />
            <LoginForm />
        </Box>
    )
}
