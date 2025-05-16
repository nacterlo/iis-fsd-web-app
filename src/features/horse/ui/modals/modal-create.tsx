import { BaseModalProps } from "@/shared/lib/types";
import { useCreateHorseMutation } from "../../api/horse-api";
import { CreateHorse } from "../../model/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button, Textarea } from "@mui/joy";
import { FormHorse } from "../forms/create-form";


interface ModalCreateProps extends BaseModalProps { }


export const ModalCreateHorse = ({ open, onClose }: ModalCreateProps) => {
    const [createHorse, { isLoading: loadingCreateHorse }] = useCreateHorseMutation()

    const onSubmitCreate = async (data: CreateHorse) => {
        await createHorse(data).unwrap()
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
                        Лошади
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormHorse onSubmitCreate={onSubmitCreate} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createHorse' disabled={loadingCreateHorse}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}