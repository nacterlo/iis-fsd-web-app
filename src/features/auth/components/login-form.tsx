import { useAppDispatch } from "@/shared/hooks/redux";
import { InfoOutlined } from "@mui/icons-material";
import { Stack, FormControl, FormLabel, Input, FormHelperText, Typography, Box, Checkbox, Button, Link, CircularProgress } from "@mui/joy";
import React from "react";
import { useNavigate } from "react-router";
import { setCredentials } from "../model/auth-slice";
import { useLoginMutation } from "@/app/store/api/authApi";



export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const [isLoginError, setIsLoginError] = React.useState<boolean>(false)

    const navigate = useNavigate()

    const [login, { isLoading: loadingLogin }] = useLoginMutation()
    const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const formJson = Object.fromEntries((formData as any).entries())
        const data = {
            login: formJson.login,
            password: formJson.password,
        };

        //  "login": "admin",
        // "password": "121212"
        await login(data).unwrap()
            .then((res) => {
                dispatch(setCredentials(res))
                navigate('/cattle-milk')
            }).catch((err) => {
                console.log(err)
                setIsLoginError(true)
                setTimeout(() => {
                    setIsLoginError(false)
                }, 3000);
            })
    }

    return (
        <Stack sx={{ gap: 4, mt: 2, maxWidth: 400 }}>
            <form
                onSubmit={onSubmitLogin}
            >
                <FormControl required>
                    <FormLabel>Логин</FormLabel>
                    <Input name="login" />
                </FormControl>
                <FormControl required>
                    <FormLabel>Пароль</FormLabel>
                    <Input type="password" name="password" />
                    <FormHelperText color='error' sx={{ color: 'red', transition: 'all 3s' }}>
                        {isLoginError && (
                            <>
                                <InfoOutlined sx={{ color: 'red', transition: 'all 3s' }} />
                                <Typography color='danger'>Неверный логин или пароль!</Typography>
                            </>

                        )}
                    </FormHelperText>
                </FormControl>
                <Stack sx={{ gap: 4, mt: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Checkbox size="sm" label="Запомнить меня" name="persistent" />
                        <Link level="title-sm" href="#replace-with-a-link">
                            Забыли пароль?
                        </Link>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        startDecorator={loadingLogin ? <CircularProgress size="sm" /> : null}
                        disabled={loadingLogin}
                    >
                        {loadingLogin ? 'Вход...' : 'Войти'}
                    </Button>
                </Stack>
            </form>
        </Stack>
    )
}