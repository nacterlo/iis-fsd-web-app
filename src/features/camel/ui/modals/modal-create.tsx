import { BaseModalProps } from "@/shared/lib/types";
import { useCreateCamelMutation } from "../../api/camel-api";
import { CreateCamel } from "../../model/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { CreateFormCamel } from "../forms/create-from";


interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateCamel = ({ open, onClose }: ModalCreateProps) => {
    const [createCamel, { isLoading: loadingCreate }] = useCreateCamelMutation()

    const onSubmitCreate = async (data: CreateCamel) => {
        await createCamel(data).unwrap()
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
                        Верблюды
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <CreateFormCamel onSubmitCreate={onSubmitCreate} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createCamel' disabled={loadingCreate}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}