import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, CircularProgress, Divider, DialogActions, Button } from "@mui/joy";
import { UpdateGoatBeef } from "../../model/types";
import { useGetGoatBeefQuery, useUpdateGoatBeefMutation } from "../../api/goat-beef-api";
import { FormUpdateGoatBeef } from "../forms/update-from";


interface ModalUpdateProps extends BaseModalProps {
    animalId: number
}

export const ModalUpdateGoatBeef = ({ open, onClose, animalId }: ModalUpdateProps) => {
    const { data: animal, isLoading: loadingAnimal } = useGetGoatBeefQuery(animalId)

    const [updateGoat, { isLoading: loadingUpdate }] = useUpdateGoatBeefMutation()
    const onSumbitUpdate = async (data: UpdateGoatBeef) => {
        console.log(data);
        await updateGoat(data).unwrap()
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
                        Козы молочного направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {loadingAnimal ? (
                        <Box alignSelf={'center'}>
                            <CircularProgress size="md" />
                        </Box>
                    ) : animal ? (
                        <FormUpdateGoatBeef initialData={animal} onSubmitUpdate={onSumbitUpdate} />
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
                    <Button size="sm" type='submit' form='updateGoatBeef' disabled={loadingUpdate}>Изменить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}