import { BaseModalProps } from "@/shared/lib/types";
import { useCreateFurryMutation } from "../../api/furry-api";
import { CreateFurry } from "../../model/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { FormCreateFurry } from "../forms/create-form";



interface ModalCreateProps extends BaseModalProps { }


export const ModalCreateFurry = ({ open, onClose }: ModalCreateProps) => {

    const [createFurry, { isLoading: loadingCreateFurry }] = useCreateFurryMutation()

    const onSubmitCreate = async (data: CreateFurry) => {
        await createFurry(data).unwrap()
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
                        Пушные звери
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateFurry onSubmitCreate={onSubmitCreate} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createFurry' disabled={loadingCreateFurry}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}