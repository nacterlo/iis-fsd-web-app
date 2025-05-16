import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, CircularProgress, Divider, DialogActions, Button } from "@mui/joy";
import { useGetSheepMeatShorthairQuery, useUpdateSheepMeatShorthairMutation } from "../../api/sheep-meat-shorthair-api";
import { UpdateSheepMeatShorthair } from "../../model/types";
import { FormUpdateSheepMeatShorthair } from "../forms/update-form";


interface ModalUpdateProps extends BaseModalProps {
    animalId: number
}

export const ModalUpdateSheepMeatShorthair = ({ open, onClose, animalId }: ModalUpdateProps) => {
    const { data: animal, isLoading: loadingAnimal } = useGetSheepMeatShorthairQuery(animalId)

    const [updateSheep, { isLoading: loadingUpdate }] = useUpdateSheepMeatShorthairMutation()
    const onSumbitUpdate = async (data: UpdateSheepMeatShorthair) => {
        console.log(data);
        await updateSheep(data).unwrap()
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
                    Овцы мясного короткошерстного (безрунного) направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {loadingAnimal ? (
                        <Box alignSelf={'center'}>
                            <CircularProgress size="md" />
                        </Box>
                    ) : animal ? (
                        <FormUpdateSheepMeatShorthair initialData={animal} onSubmitUpdate={onSumbitUpdate} />
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
                    <Button size="sm" type='submit' form='updateSheepMeatShorthair' disabled={loadingUpdate}>Изменить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}