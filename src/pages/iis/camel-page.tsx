import { ModalCreateCamel } from "@/features/camel/ui/modals/modal-create"
import { ModalUpdateCamel } from "@/features/camel/ui/modals/modal-update"
import { TableCamel } from "@/features/camel/ui/table-camel"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

const CamelPage = () => {
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
          Верблюды
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
      <TableCamel onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreateCamel open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && (
        <ModalUpdateCamel animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
      )}
    </>
  )
}

export const Component = CamelPage