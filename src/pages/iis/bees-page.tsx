import { ModalCreateBee } from "@/features/bee/ui/modals/modal-create"
import { ModalUpdateBee } from "@/features/bee/ui/modals/modal-update"
import { TableBee } from "@/features/bee/ui/table-bee"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

export const BeesPage = () => {
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
          Пчелы
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
      <TableBee onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreateBee open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && (
        <ModalUpdateBee animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
      )}
    </>
  )
}