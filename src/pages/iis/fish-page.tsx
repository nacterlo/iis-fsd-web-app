import { ModalCreateFish } from "@/features/fish/ui/modals/modal-create"
import { ModalUpdateFish } from "@/features/fish/ui/modals/modal-update"
import { TableFish } from "@/features/fish/ui/table-fish"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

export const FishPage = () => {
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
          Рыба
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
      <TableFish onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreateFish open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && (
        <ModalUpdateFish animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
      )}
    </>
  )
}
