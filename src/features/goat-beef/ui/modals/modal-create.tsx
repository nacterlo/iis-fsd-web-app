import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { BaseModalProps } from "@/shared/lib/types";
import { CreateGoatBeef } from "../../model/types";
import { useCreateGoatBeefMutation } from "../../api/goat-beef-api";
import { FormCreateGoatBeef } from "../forms/create-form";

interface ModalCreateProps extends BaseModalProps { }


export const ModalCreateGoatBeef = ({ open, onClose }: ModalCreateProps) => {

    const [createGoatDairy, { isLoading: loadingCreateDairy }] = useCreateGoatBeefMutation()

    const onSubmitCreateCattleBeef = async (data: CreateGoatBeef) => {
        await createGoatDairy(data).unwrap()
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
                        Козы мясного направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateGoatBeef onSubmitCreate={onSubmitCreateCattleBeef} />
                    {/* <FormCreateGoatDairy onSubmitCreateCattleBeef={onSubmitCreateCattleBeef} /> */}
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createGoatBeef' disabled={loadingCreateDairy}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}