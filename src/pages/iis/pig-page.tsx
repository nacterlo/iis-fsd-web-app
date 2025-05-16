import { ModalCreatePig } from "@/features/pig/ui/modals/modal-create"
import { ModalUpdatePig } from "@/features/pig/ui/modals/modal-update"
import { TablePig } from "@/features/pig/ui/table-pig"
import { AddRounded } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/joy"
import { useState } from "react"

export const PigPage = () => {

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
          Свиньи
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
      <TablePig onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreatePig open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && (
        <ModalUpdatePig animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)}/>
      )}
    </>
  )
}
