import { Modal, ModalDialog, ModalClose, Box, Typography, Divider, Card, DialogActions, Button } from "@mui/joy";
import { CreateCattleMilk } from "../../model/types";
import { FormCattleMilk } from "./forms/form-cattle-milk";
import { useCreateCattleMilkMutation } from "../../api/cattle-milk-api";
import { BaseModalProps } from "@/shared/lib/types";



interface ModalCreateProps extends BaseModalProps {}


export const ModalCreateCattleMilk = ({ open, onClose }: ModalCreateProps) => {

    const [createCattleMilk, { isLoading: loadingCreateCattleMilk }] = useCreateCattleMilkMutation()
    const onSubmitCreateCattleMilk = async (data: CreateCattleMilk) => {
        await createCattleMilk(data).unwrap()
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
                        Крупный рогатый скот молочного направления
                    </Typography>
                </Box>
                <Card sx={{  flexGrow: 1, }}>
                    <FormCattleMilk onSubmitCrateCattleMilk={onSubmitCreateCattleMilk} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createCattleMilk' disabled={loadingCreateCattleMilk}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}