import ColorSchemeToggle from '@/shared/components/theme/color-scheme-toggle'
import { BadgeRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/joy'
import { Outlet } from 'react-router'

export default function AuthLayout() {
    return (
        <Box
            sx={(theme) => ({
                width: { xs: '100%', md: '45vw' },
                transition: 'width var(--Transition-duration)',
                transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(255 255 255 / 0.2)',
                [theme.getColorSchemeSelector('dark')]: {
                    backgroundColor: 'rgba(19 19 24 / 0.4)',
                },
            })}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100dvh',
                    width: '100%',
                    px: 2,
                }}
            >
                <Box
                    component="header"
                    sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                        <IconButton variant="soft" color="primary" size="sm">
                            <BadgeRounded />
                        </IconButton>
                        <Box>
                            <Typography level="title-lg">Министерство сельского хозяйства и продовольствия</Typography>
                            <Typography level="title-sm">Интегрированная информационная система</Typography>
                        </Box>

                    </Box>
                    <ColorSchemeToggle />
                </Box>
                <Outlet />
                <Box component="footer" sx={{ py: 3 }}>
                    <Typography level="body-xs" sx={{ textAlign: 'center' }}>
                        © УП ГИВЦ Минсельхозпрода {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Box>

        </Box>

    )
}
