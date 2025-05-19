import { ModalCreateSheepRomanov } from '@/features/sheep-romanov/ui/modals/modal-create'
import { ModalUpdateSheepRomanov } from '@/features/sheep-romanov/ui/modals/modal-update'
import { TableSheepRomanov } from '@/features/sheep-romanov/ui/table-sheep-romanov'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

const SheepRomanovPage = () => {
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
                    Овцы романовской породы
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
            <TableSheepRomanov onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateSheepRomanov open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
                <ModalUpdateSheepRomanov animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}

export const Component = SheepRomanovPage