import { ModalCreateCattleMilk } from "@/features/cattle-milk/ui/modals/modal-create"
import { ModalUpdateCattleMilk } from "@/features/cattle-milk/ui/modals/modal-update"
import { TableCattleMilk } from "@/features/cattle-milk/ui/table-cattle-milk"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

const CattleMilk = () => {

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
                    КРС молочного направления продуктивности
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
            <TableCattleMilk onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateCattleMilk open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {animalId && (
                <ModalUpdateCattleMilk animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
            )}
        </>
    )
}

export const Component = CattleMilk;