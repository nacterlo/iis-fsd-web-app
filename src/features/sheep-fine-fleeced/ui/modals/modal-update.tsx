import { useGetSheepFineFleecedQuery, useUpdateSheepFineFleecedMutation, useUploadIISSheepFineFleecedMutation } from "../../api/sheep-fine-fleeced";
import { UpdateSheepFineFleeced } from "../../model/types";

import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, CircularProgress, Divider, DialogActions, Button } from "@mui/joy";
import { FormUpdateSheepFineFleeced } from "../forms/update-form";


interface ModalUpdateProps extends BaseModalProps {
    animalId: number
}

export const ModalUpdateSheepFineFleeced = ({ open, onClose, animalId }: ModalUpdateProps) => {
    const { data: animal, isLoading: loadingAnimal } = useGetSheepFineFleecedQuery(animalId)

    const [updateSheep, { isLoading: loadingUpdate }] = useUpdateSheepFineFleecedMutation()
    const onSumbitUpdate = async (data: UpdateSheepFineFleeced) => {
        console.log(data);
        await updateSheep(data).unwrap()
            .then(res => {
                console.log(res);

            })
    }


    const [uploadIISSheepFineFleeced, { isLoading: loadingIIS }] = useUploadIISSheepFineFleecedMutation()

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
                        Овцы тонкорунного и полутонкорунного направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {loadingAnimal ? (
                        <Box alignSelf={'center'}>
                            <CircularProgress size="md" />
                        </Box>
                    ) : animal ? (
                        <FormUpdateSheepFineFleeced initialData={animal} onSubmitUpdate={onSumbitUpdate} />
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
                    <Button size="sm" type='submit' form='updateSheepFineFleeced' disabled={loadingUpdate}>Изменить</Button>
                    <Button
                        size="sm"
                        color="success"
                        disabled={loadingIIS}
                        startDecorator={loadingIIS ? <CircularProgress size="sm" /> : null}
                        onClick={() => uploadIISSheepFineFleeced({ id: animalId })}
                    >
                        Загрузить в ИИС
                    </Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}