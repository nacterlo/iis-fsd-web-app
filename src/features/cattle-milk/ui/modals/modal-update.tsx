import { BaseModalProps } from "@/shared/lib/types";
import { UpdateCattleMilk } from "../../model/types";
import { Box, Button, Card, CircularProgress, DialogActions, Divider, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { UpdateFormCattleMilk } from "./forms/update-form";
import { useGetCattleMilkQuery, useUpdateCattleMilkMutation } from "../../api/cattle-milk-api";



interface ModalUpdateProps extends BaseModalProps {
    animalId: number
}


export const ModalUpdateCattleMilk = ({ open, onClose, animalId }: ModalUpdateProps) => {

    const { data: animal, isLoading: loadingAnimal } = useGetCattleMilkQuery(animalId)

    const [updateCattleMilk, { isLoading: loadingUpdateCattleMilk }] = useUpdateCattleMilkMutation()
    const onSumbitUpdate = async (data: UpdateCattleMilk) => {
        console.log(data);
        await updateCattleMilk(data).unwrap()
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
                        Крупный рогатый скот молочного направления
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {loadingAnimal ? (
                        <Box alignSelf={'center'}>
                            <CircularProgress size="md" />
                        </Box>
                    ) : animal ? (
                        <UpdateFormCattleMilk initialData={animal} onSubmitUpdate={onSumbitUpdate} />
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
                    <Button size="sm" type='submit' form='updateCattleMilk' disabled={loadingUpdateCattleMilk}>Изменить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}