import { ModalCreateSpermAndEmbryos } from "@/features/sperm-and-embryos/ui/modals/modal-create"
import { TableSpermAndEmbryos } from "@/features/sperm-and-embryos/ui/table-sperm-and-embryos"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

export const SpermProdPage = () => {
    const [_animalId, setAnimalId] = useState<number>()

    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [_openModalUpdate, setOpenModalUpdate] = useState(false)

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
                    Спермопродукция и эмбрионы
                </Typography>
                <Button
                    color="primary"
                    startDecorator={<AddRounded />}
                    size="sm"
                    onClick={() => setOpenModalCreate(true)}
                >
                    Ввод
                </Button>
            </Box>
            <TableSpermAndEmbryos onOpenModalUpdate={handleOpenModalUpdate} />
            <ModalCreateSpermAndEmbryos open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
            {/* <TabbleCattleBeef onOpenModalUpdate={handleOpenModalUpdate} />
          <ModalCreateCattleBeef open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
          {animalId && (
            <ModalUpdateCattleBeef animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
          )} */}
        </>
    )
}