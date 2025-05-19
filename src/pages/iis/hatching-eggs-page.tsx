import { ModalCreateEgg } from "@/features/egg/ui/modals/modal-create"
import { ModalUpdateEgg } from "@/features/egg/ui/modals/modal-update"
import { TableEgg } from "@/features/egg/ui/table-egg"
import { AddRounded } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/joy"
import { useState } from "react"

const HatchingEggsPage = () => {
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
          Инкубационные яйца
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
      <TableEgg onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreateEgg open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && (
        <ModalUpdateEgg animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
      )}
    </>
  )
}

export const Component = HatchingEggsPage