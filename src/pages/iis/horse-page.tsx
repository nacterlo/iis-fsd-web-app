import { ModalCreateHorse } from "@/features/horse/ui/modals/modal-create"
import { ModalUpdateHorse } from "@/features/horse/ui/modals/modal-update"
import { TableHorse } from "@/features/horse/ui/table-horse"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

export const HorsePage = () => {
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
                    Лошади
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
            <TableHorse onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateHorse open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
                {animalId && (
                    <ModalUpdateHorse animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
                )}
        </>
    )
}
