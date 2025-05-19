import { ModalCreateDeer } from "@/features/deer/ui/modals/modal-create"
import { ModalUpdateDeer } from "@/features/deer/ui/modals/modal-update"
import { TableDeer } from "@/features/deer/ui/table-deer"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

const DeerPage = () => {
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
          Олени
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
      <TableDeer onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreateDeer open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && <ModalUpdateDeer open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} animalId={animalId} />}
    </>
  )
}

export const Component = DeerPage