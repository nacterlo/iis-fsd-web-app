import { ModalCreateSheepMeatShorthair } from '@/features/sheep-meat-shorthair/ui/modals/modal-create'
import { ModalUpdateSheepMeatShorthair } from '@/features/sheep-meat-shorthair/ui/modals/modal-update'
import { TableSheepMeatShorthair } from '@/features/sheep-meat-shorthair/ui/table-meat-shorthair'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

const SheepMeatShorthairPage = () => {
    const [animalId, setAnimalId] = useState<number>()

    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)

    const handleOpenModalUpdate = async (animalId: number) => {
        setAnimalId(animalId)
        setOpenModalUpdate(true)
    }

    return (
        <>
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
                    Овцы мясного короткошерстного (безрунного) направления
                </Typography>
                <Button
                    color="primary"
                    startDecorator={<AddRounded />}
                    size="sm"
                    onClick={() => setOpenModalCreate(true)}
                >
                    Ввод животного
                </Button>
            </Box>
            <TableSheepMeatShorthair onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateSheepMeatShorthair open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
                <ModalUpdateSheepMeatShorthair animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}

export const Component = SheepMeatShorthairPage