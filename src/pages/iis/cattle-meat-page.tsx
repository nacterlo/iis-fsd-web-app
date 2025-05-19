import { ModalCreateCattleBeef } from "@/features/cattle-beef/ui/modals/modal-create"
import { ModalUpdateCattleBeef } from "@/features/cattle-beef/ui/modals/modal-update"
import { TabbleCattleBeef } from "@/features/cattle-beef/ui/table-cattle-beef"
import { AddRounded } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/joy"
import { useState } from "react"

const CattleMeat = () => {

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
          КРС мясного направления продуктивности
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
      <TabbleCattleBeef onOpenModalUpdate={handleOpenModalUpdate} />
      <ModalCreateCattleBeef open={openModalCreate} onClose={() => setOpenModalCreate(false)} />
      {animalId && (
        <ModalUpdateCattleBeef animalId={animalId} open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} />
      )}
    </>
  )
}

export const Component = CattleMeat