import { ModalCreateSheepRoughHaired } from '@/features/sheep-rough-haired/ui/modals/modal-create'
import { ModalUpdateSheepRough } from '@/features/sheep-rough-haired/ui/modals/modal-update'
import { TableSheepRough } from '@/features/sheep-rough-haired/ui/table-sheep-rough'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

const SheepRoughHairedPage = () => {
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
                    Овцы грубошерстного и полугрубошерстного направления
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
            <TableSheepRough onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateSheepRoughHaired open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
                <ModalUpdateSheepRough animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}

        </>
    )
}

export const Component = SheepRoughHairedPage