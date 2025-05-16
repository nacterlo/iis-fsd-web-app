import { BaseModalProps } from "@/shared/lib/types";
import { useGetDeerQuery, useUpdateDeerMutation } from "../../api/deer-api";
import { UpdateDeer } from "../../model/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, CircularProgress, Divider, DialogActions, Button } from "@mui/joy";
import { UpdateFormDeer } from "../forms/update-form";


interface ModalUpdateProps extends BaseModalProps {
    animalId: number
}


export const ModalUpdateDeer = ({ animalId, onClose, open }: ModalUpdateProps) => {
    const { data: animal, isLoading: loadingAnimal } = useGetDeerQuery(animalId)

    const [updateDeer, { isLoading: loadingUpdatePig }] = useUpdateDeerMutation()
    const onSumbitUpdate = async (data: UpdateDeer) => {
        console.log(data);
        await updateDeer(data).unwrap()
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
                        Олени
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {loadingAnimal ? (
                        <Box alignSelf={'center'}>
                            <CircularProgress size="md" />
                        </Box>
                    ) : animal ? (
                        <UpdateFormDeer initialData={animal} onSubmitUpdate={onSumbitUpdate} />
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
                    <Button size="sm" type='submit' form='updateDeer' disabled={loadingUpdatePig}>Изменить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}