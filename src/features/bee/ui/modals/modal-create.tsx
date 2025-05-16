import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { useCreateBeeMutation } from "../../api/bee-api";
import { CreateBee } from "../../model/types";
import { FormCreateBee } from "../forms/create-form";




interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateBee = ({ open, onClose }: ModalCreateProps) => {
    const [createBee, { isLoading: loadingCreateFurry }] = useCreateBeeMutation()

    const onSubmitCreate = async (data: CreateBee) => {
        await createBee(data).unwrap()
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
                        Пчелы
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateBee onSubmitCreate={onSubmitCreate} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createBee' disabled={loadingCreateFurry}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}