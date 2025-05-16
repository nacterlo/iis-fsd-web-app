

import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { useCreateSheepRomanovMutation } from "../../api/sheep-romanov-api";
import { FormCreateSheepRomanov } from "../forms/create-form";


interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateSheepRomanov= ({ open, onClose }: ModalCreateProps) => {

    const [createSheep, { isLoading: loadingCreate }] = useCreateSheepRomanovMutation()

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
                        Овцы романовской породы
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateSheepRomanov onSubmitCreate={onSubmitCreate} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createSheepRomanov' disabled={loadingCreate}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    );
};