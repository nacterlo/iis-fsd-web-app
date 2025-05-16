import { ModalCreateGoatBeef } from '@/features/goat-beef/ui/modals/modal-create'
import { ModalUpdateGoatBeef } from '@/features/goat-beef/ui/modals/modal-update'
import { TableGoatBeef } from '@/features/goat-beef/ui/table-goat-beef'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

export const GoatBeefPage = () => {
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
                    Козы мясного направления
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
            <TableGoatBeef onOpenModalUpdate={handleOpenModalUpdate} />

            <ModalCreateGoatBeef open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
              <ModalUpdateGoatBeef animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}