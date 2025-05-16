import { useGetOrganizationsQuery } from '@/app/store/api/organization-api'
import { ModalCreateOrganization } from '@/features/organization/component/modals/modal-create-organization'
import { PaginationOrganization } from '@/features/organization/component/pagination/pagination-oraganization'
import OrganizationTable from '@/features/organization/component/tables/organization-table'
import { AddRounded, Search, FilterAlt, FileUploadRounded, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Typography, Button, Sheet, IconButton, Modal, ModalDialog, ModalClose, Divider, FormControl, FormLabel, Table, Checkbox, Chip, iconButtonClasses, Input, Link } from '@mui/joy'
import React from 'react'


export const OrganizationsPage = () => {
    const [open, setOpen] = React.useState(false);
    const [openModalCreate, setOpenModalCreate] = React.useState(false);

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
            <OrganizationTable />
            <ModalCreateOrganization open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
        </React.Fragment>
    )
}
