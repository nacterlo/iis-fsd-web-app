import { ModalCreateSheepFineFleeced } from '@/features/sheep-fine-fleeced/ui/modals/modal-create'
import { ModalUpdateSheepFineFleeced } from '@/features/sheep-fine-fleeced/ui/modals/modal-update'
import { TableSheepFineFleeced } from '@/features/sheep-fine-fleeced/ui/table-fine-fleeced'
import { AddRounded } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/joy'
import { useState } from 'react'

export const SheepFineFleecedPage = () => {
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
                    Овцы тонкорунного и полутонкорунного направления
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
            <TableSheepFineFleeced onOpenModalUpdate={handleOpenModalUpdate} />

            <ModalCreateSheepFineFleeced open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
                <ModalUpdateSheepFineFleeced animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}