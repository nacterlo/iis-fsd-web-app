import * as React from 'react';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import { ReactComponent as SheepLogo } from '@/shared/assets/images/sheep.svg'
import { ReactComponent as PigLogo } from '@/shared/assets/images/pig.svg'
import { ReactComponent as GoatLogo } from '@/shared/assets/images/goat.svg'
import { ReactComponent as DeerLogo } from '@/shared/assets/images/deer.svg'
import { ReactComponent as CamelLogo } from '@/shared/assets/images/camel.svg'
import { ReactComponent as MinkLogo } from '@/shared/assets/images/mink.svg'
import { ReactComponent as EggLightLogo } from '@/shared/assets/images/eggLight.svg'
import { ReactComponent as EggDarkLogo } from '@/shared/assets/images/eggDark.svg'
import { ReactComponent as FishLogo } from '@/shared/assets/images/fish.svg'
import { ReactComponent as CowLogo } from '@/shared/assets/images/cow.svg'
import { ReactComponent as HorseLogo } from '@/shared/assets/images/horse.svg'

import { HiveRounded, KeyboardArrowDown } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/joy';
import { useLocation, useNavigate } from 'react-router';

function Toggler({
    defaultExpanded = false,
    renderToggle,
    children,
}: {
    defaultExpanded?: boolean;
    children: React.ReactNode;
    renderToggle: (params: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => React.ReactNode;
}) {
    const [open, setOpen] = React.useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({ open, setOpen })}
            <Box
                sx={[
                    {
                        display: 'grid',
                        transition: '0.2s ease',
                        '& > *': {
                            overflow: 'hidden',
                        },
                        marginLeft: '25px'
                    },
                    open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
                ]}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}

export default function Navigation() {

    const navigate = useNavigate()
    const location = useLocation()
    const theme = useTheme()
    return (
        <List
            size="sm"
            sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px', /* overflowY: 'scroll', height: '85dvh'*/ }}
        >
            <ListItem nested>
                <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
                    Вид животного
                </ListSubheader>
                <List
                    aria-labelledby="nav-list-browse"
                    sx={{ '& .JoyListItemButton-root': { p: '8px' } }}
                >
                    <ListItem nested>
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <CowLogo />
                                    <ListItemContent>
                                        <Typography level="title-sm">Крупный рогатый скот</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDown
                                        sx={[
                                            open
                                                ? {
                                                    transform: 'rotate(180deg)',
                                                }
                                                : {
                                                    transform: 'none',
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{ gap: 0.5 }}>
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton selected={location.pathname === '/cattle-milk'} onClick={() => navigate('cattle-milk')}>Молочного направления</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/cattle-meat'} onClick={() => navigate('cattle-meat')}>Мясного направления</ListItemButton>
                                </ListItem>

                            </List>
                        </Toggler>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/pig'} onClick={() => navigate('pig')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <PigLogo style={{ width: '20px' }} />
                            </ListItemDecorator>
                            <ListItemContent>Свиньи</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/horse'} onClick={() => navigate('horse')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <HorseLogo />
                            </ListItemDecorator>
                            <ListItemContent>Лошади</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem nested>
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <SheepLogo style={{ width: '20px' }} />
                                    <ListItemContent>
                                        <Typography level="title-sm">Овцы</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDown
                                        sx={[
                                            open
                                                ? {
                                                    transform: 'rotate(180deg)',
                                                }
                                                : {
                                                    transform: 'none',
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{ gap: 0.5 }}>
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton selected={location.pathname === '/sheep-rough-haired'} onClick={() => navigate('sheep-rough-haired')}>Грубошестного и полугрубошерстного </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/sheep-romanov'} onClick={() => navigate('sheep-romanov')}>Романовской породы</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/sheep-smushkovy'} onClick={() => navigate('sheep-smushkovy')}>Смушкового направления</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/sheep-fine-fleeced'} onClick={() => navigate('sheep-fine-fleeced')}>Тонкорунного и полутонкорунного направления</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/sheep-meat-shorthair'} onClick={() => navigate('sheep-meat-shorthair')}>Мясного короткошерстного направления</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
                    <ListItem nested>
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <GoatLogo style={{ width: '20px' }} />
                                    <ListItemContent>
                                        <Typography level="title-sm">Козы</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDown
                                        sx={[
                                            open
                                                ? {
                                                    transform: 'rotate(180deg)',
                                                }
                                                : {
                                                    transform: 'none',
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{ gap: 0.5 }}>
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton selected={location.pathname === '/goat-dairy'} onClick={() => navigate('goat-dairy')}>Молочного направления</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/goat-beef'} onClick={() => navigate('goat-beef')}>Мясного направления</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/goat-wood'} onClick={() => navigate('goat-wood')}>Шерстяного направления</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton selected={location.pathname === '/goat-downy'} onClick={() => navigate('goat-downy')}>Пухового направления</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/deer'} onClick={() => navigate('deer')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <DeerLogo />
                            </ListItemDecorator>
                            <ListItemContent>Олени</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/camel'} onClick={() => navigate('camel')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <CamelLogo />
                            </ListItemDecorator>
                            <ListItemContent>Верблюды</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/mink'} onClick={() => navigate('mink')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <MinkLogo />
                            </ListItemDecorator>
                            <ListItemContent>Пушные звери</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/hatching-eggs'} onClick={() => navigate('hatching-eggs')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                {theme.palette.mode === 'light' ? (
                                    <EggLightLogo />
                                ) : (<EggDarkLogo />)}

                            </ListItemDecorator>
                            <ListItemContent>Инкубационные яйца</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/fish'} onClick={() => navigate('fish')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <FishLogo />
                            </ListItemDecorator>
                            <ListItemContent>Рыба</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/bees'} onClick={() => navigate('bees')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                <HiveRounded fontSize="small" color='warning' />
                            </ListItemDecorator>
                            <ListItemContent>Пчелы</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton selected={location.pathname === '/sperm-production'} onClick={() => navigate('sperm-production')}>
                            <ListItemDecorator sx={{ color: 'neutral.500' }}>
                                {/* {theme.palette.mode === 'light' ? (
                                    <SpermLightLogo />
                                ) : (<SpermDarkLogo />)} */}
                            </ListItemDecorator>
                            <ListItemContent>Спермопродукция и эмбрионы</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}
