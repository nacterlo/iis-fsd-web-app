import { ModalCreateGoatDowny } from '@/features/goat-downy/ui/modals/modal-create'
import { ModalUpdateGoatDowny } from '@/features/goat-downy/ui/modals/modal-update'
import { TableGoatDowny } from '@/features/goat-downy/ui/table-goat-downy'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

export const GoatDownyPage = () => {
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
                    Козы пухового направления
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
            <TableGoatDowny onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateGoatDowny open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
              <ModalUpdateGoatDowny animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}