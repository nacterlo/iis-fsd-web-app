import { useCreateSheepFineFleecedMutation } from "../../api/sheep-fine-fleeced";
import { FormCreateSheepFineFleeced } from "../forms/create-form";

import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";


interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateSheepFineFleeced = ({ open, onClose }: ModalCreateProps) => {

    const [createSheep, { isLoading: loadingCreate }] = useCreateSheepFineFleecedMutation()

    const onSubmitCreate = async (data: any) => {
        await createSheep(data).unwrap()
            .then((res) => {
                console.log(res);
                onClose()
            })
    }

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog
                sx={{
                    display: 'flex',
                    minWidth: 900,
                    width: 900
                }}
            >
                <ModalClose />
                <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Добавление</Typography>
                    <Typography level="body-sm">
                        Овцы тонкорунного и полутонкорунного направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateSheepFineFleeced onSubmitCreate={onSubmitCreate} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createSheepFineFleeced' disabled={loadingCreate}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    );
};