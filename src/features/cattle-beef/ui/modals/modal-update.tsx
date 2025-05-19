import { BaseModalProps } from "@/shared/lib/types";
import { Box, Button, Card, CircularProgress, DialogActions, Divider, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useGetCattleBeefQuery, useUpdateCattleBeefMutation } from "../../api/cattle-beef-api";
import { UpdateCattleBeef } from "../../model/types";
import { UpdateFormCattleBeef } from "../forms/update-form";



interface ModalUpdateProps extends BaseModalProps {
    animalId: number
}


export const ModalUpdateCattleBeef = ({ open, onClose, animalId }: ModalUpdateProps) => {

    const { data: animal, isLoading: loadingAnimal } = useGetCattleBeefQuery(animalId)

    const [updateCattleBeef, { isLoading: loadingUpdateCattleMilk }] = useUpdateCattleBeefMutation()
    const onSumbitUpdate = async (data: UpdateCattleBeef) => {
        console.log(data);
        await updateCattleBeef(data).unwrap()
            .then(res => {
                console.log(res);

            })
    }

    return (
        <Modal keepMounted open={open} onClose={onClose}>
            <ModalDialog
                sx={{
                    display: 'flex',
                    minWidth: 900,
                    width: 900
                }}
            >
                <ModalClose />
                <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Изменение</Typography>
                    <Typography level="body-sm">
                        Крупный рогатый скот мясного направления
                    </Typography>
                </Box>
                <Card>
                    {loadingAnimal ? (
                        <Box alignSelf={'center'}>
                            <CircularProgress size="md" />
                        </Box>
                    ) : animal ? (
                        <UpdateFormCattleBeef initialData={animal} onSubmitUpdate={onSumbitUpdate} />
                    ) : (
                        <Box sx={{ alignSelf: 'center' }}>
                            <Typography level="title-lg" color="danger">Не удалось получить данные животного!</Typography>
                        </Box>
                    )}
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='updateCattleBeef' disabled={loadingUpdateCattleMilk}>Изменить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}