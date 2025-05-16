import React from "react";

import { PetsRounded } from "@mui/icons-material";
import { Box, Stack, IconButton, Button, Drawer, ModalClose, DialogTitle, Typography, Dropdown, MenuButton, Avatar, MenuItem, ListDivider, Input, Menu } from "@mui/joy";

import { useLocation, useNavigate } from "react-router";

import ColorSchemeToggle from "../theme/color-scheme-toggle";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';



export default function Header() {
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', maxHeight: '15px' }}>
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: { xs: 'none', sm: 'flex' },
                }}
            >
                <IconButton
                    size="md"
                    variant="outlined"
                    color="neutral"
                    sx={{ display: { xs: 'none', sm: 'inline-flex' }, borderRadius: '50%' }}
                >
                    <PetsRounded />
                </IconButton>
                <Button
                    variant="plain"
                    color="neutral"
                    size="sm"
                    aria-pressed={location.pathname === '/organization' ? false : true}
                    sx={{ alignSelf: 'center' }}
                    onClick={() => navigate(`/cattle-milk`)}
                >
                    ИИС
                </Button>
                <Button
                    variant="plain"
                    color="neutral"
                    aria-pressed={location.pathname === '/organization' ? true : false}
                    size="sm"
                    sx={{ alignSelf: 'center' }}
                    onClick={() => navigate(`/organization`)}

                >
                    Организации
                </Button>
                {/* Интегрированная информационная система */}
            </Stack>
            <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
                <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
                    <MenuRoundedIcon />
                </IconButton>
                <Drawer
                    sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ModalClose />
                    <DialogTitle>ИИС</DialogTitle>
                    <Box sx={{ px: 1 }}>
                        {/* <TeamNav /> */}
                    </Box>
                </Drawer>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1.5,
                    alignItems: 'center',
                }}
            >
                <Input
                    size="sm"
                    variant="outlined"
                    placeholder="Поиск"
                    startDecorator={<SearchRoundedIcon color="primary" />}
                    endDecorator={
                        <IconButton
                            variant="outlined"
                            color="neutral"
                            sx={{ bgcolor: 'background.level1' }}
                        >
                            <Typography level="title-sm" textColor="text.icon">
                                ⌘ K
                            </Typography>
                        </IconButton>
                    }
                    sx={{
                        alignSelf: 'center',
                        display: {
                            xs: 'none',
                            sm: 'flex',
                        },
                    }}
                />
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    sx={{ display: { xs: 'inline-flex', sm: 'none' }, alignSelf: 'center' }}
                >
                    <SearchRoundedIcon />
                </IconButton>

                <ColorSchemeToggle />
                <Dropdown>
                    <MenuButton
                        variant="plain"
                        size="sm"
                        sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
                    >
                        <Avatar
                            // src="https://i.pravatar.cc/40?img=2"
                            // srcSet="https://i.pravatar.cc/80?img=2"
                            sx={{ maxWidth: '32px', maxHeight: '32px' }}
                        />
                    </MenuButton>
                    <Menu
                        placement="bottom-end"
                        size="sm"
                        sx={{
                            zIndex: '99999',
                            p: 1,
                            gap: 1,
                            '--ListItem-radius': 'var(--joy-radius-sm)',
                        }}
                    >
                        <MenuItem>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    sx={{ borderRadius: '50%' }}
                                />
                                <Box sx={{ ml: 1.5 }}>
                                    <Typography level="title-sm" textColor="text.primary">
                                        ТЕСТ Тест
                                    </Typography>
                                    <Typography level="body-xs" textColor="text.tertiary">
                                        test@mail.com
                                    </Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                        <ListDivider />
                        {/* <MenuItem>
                            <HelpRoundedIcon />
                            Help
                        </MenuItem>
                        <MenuItem>
                            <SettingsRoundedIcon />
                            Settings
                        </MenuItem>
                        <ListDivider />
                        <MenuItem component="a" href="/blog/first-look-at-joy/">
                            First look at Joy UI
                            <OpenInNewRoundedIcon />
                        </MenuItem>
                        <MenuItem
                            component="a"
                            href="https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/email"
                        >
                            Sourcecode
                            <OpenInNewRoundedIcon />
                        </MenuItem>
                        <ListDivider /> */}
                        <MenuItem>
                            <LogoutRoundedIcon />
                            Выход
                        </MenuItem>
                    </Menu>
                </Dropdown>
            </Box>
        </Box>
    )
}