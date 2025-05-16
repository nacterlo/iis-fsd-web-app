import { BaseModalProps } from "@/shared/lib/types";
import { useCreateDeerMutation } from "../../api/deer-api";
import { CreateDeer } from "../../model/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { CreateFormDeer } from "../forms/create-form";



interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateDeer = ({ open, onClose }: ModalCreateProps) => {

    const [createDeer, { isLoading: loadingCreateDeer }] = useCreateDeerMutation()

    const onSubmitCreateDeer = async (data: CreateDeer) => {
        await createDeer(data).unwrap()
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
                        Олени
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <CreateFormDeer onSubmitCreate={onSubmitCreateDeer} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createDeer' disabled={loadingCreateDeer}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    );
};