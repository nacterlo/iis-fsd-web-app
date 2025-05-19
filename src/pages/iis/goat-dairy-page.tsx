import { ModalCreateGoatDairy } from '@/features/goat-dairy/ui/modals/modal-create'
import { ModalUpdateGoatDairy } from '@/features/goat-dairy/ui/modals/modal-update'
import { TableGoatDairy } from '@/features/goat-dairy/ui/table-goat-dairy'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

const GoatDairyPage = () => {
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
                    Козы молочного направления
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
            <TableGoatDairy onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateGoatDairy open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
                <ModalUpdateGoatDairy animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}

export const Component = GoatDairyPage