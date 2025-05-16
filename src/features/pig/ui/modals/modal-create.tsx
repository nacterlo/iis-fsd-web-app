import { BaseModalProps } from "@/shared/lib/types";
import { useCreatePigMutation } from "../../api/pig-api";
import { CreatePig } from "../../model/types";
import { Box, Button, Card, DialogActions, Divider, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { FormPig } from "../forms/create-form";


interface ModalCreateProps extends BaseModalProps { }

export const ModalCreatePig = ({ open, onClose }: ModalCreateProps) => {

    const [createPig, { isLoading: loadingCreatePig }] = useCreatePigMutation()

    const onSubmitCreatePig = async (data: CreatePig) => {
        await createPig(data).unwrap()
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
                        Свиньи
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormPig onSubmitCreate={onSubmitCreatePig}/>
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createPig' disabled={loadingCreatePig}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}