import { ModalCreateOrganization } from '@/features/organization/component/modals/modal-create-organization'
import { ModalUpdateOrganization } from '@/features/organization/component/modals/modal-update-organization'
import OrganizationTable from '@/features/organization/component/tables/organization-table'
import { AddRounded, Search, FilterAlt } from '@mui/icons-material'
import { Box, Typography, Button, Sheet, IconButton, Modal, ModalDialog, ModalClose, Divider, FormControl, FormLabel, Input } from '@mui/joy'
import React from 'react'


const OrganizationsPage = () => {
    const [open, setOpen] = React.useState(false);
    const [openModalCreate, setOpenModalCreate] = React.useState(false);
    const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

    const [organizationId, setOrganizationId] = React.useState<number>();

    const onOpenModalUpdate = (id: number) => {
        setOrganizationId(id);
        setOpenModalUpdate(true);
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    mb: 1,
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'start', sm: 'center' },
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="h2" component="h1">
                    Организации
                </Typography>
            </Box>
            <Sheet
                className="SearchAndFilters-mobile"
                sx={{ display: { xs: 'flex', sm: 'none' }, my: 1, gap: 1, alignSelf: 'center' }}
            >
                <Input
                    size="sm"
                    placeholder="Поиск"
                    startDecorator={<Search />}
                    sx={{ flexGrow: 1 }}
                />
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpen(true)}
                >
                    <FilterAlt />
                </IconButton>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                        <ModalClose />
                        <Typography id="filter-modal" level="h2">
                            Filters
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {/* {renderFilters()} */}
                            <Button color="primary" onClick={() => setOpen(false)}>
                                Submit
                            </Button>
                        </Sheet>
                    </ModalDialog>
                </Modal>
            </Sheet>
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: 'sm',
                    py: 2,
                    display: { xs: 'none', sm: 'flex' },
                    justifyContent: { xs: 'normal', md: 'space-between' },
                    flexWrap: 'wrap',
                    width: '50%',
                    alignSelf: 'center',
                    gap: 1.5,
                    '& > *': {
                        minWidth: { xs: '120px', md: '160px' },
                        maxWidth: { xs: '200px', md: '260px' },
                    },
                }}
            >
                <FormControl sx={{ flex: 1 }} size="sm">
                    <FormLabel>Поиск</FormLabel>
                    <Input size="sm" placeholder="Поиск" startDecorator={<Search color='primary' />} />
                </FormControl>
                <Box alignSelf='flex-end'>
                    <Button
                        color="primary"
                        startDecorator={<AddRounded />}
                        size="sm"
                        onClick={() => setOpenModalCreate(true)}
                    >
                        Ввод организации
                    </Button>
                </Box>
                {/* {renderFilters()} */}
            </Box>
            <OrganizationTable onOpenModalUpdate={onOpenModalUpdate} />
            <ModalCreateOrganization open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {organizationId && (
                <ModalUpdateOrganization id={organizationId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </React.Fragment>
    )
}

export const Component = OrganizationsPage