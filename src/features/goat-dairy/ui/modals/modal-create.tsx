import { useCreateGoatDairyMutation } from "../../api/goat-dairy-api";
import { CreateGoatDairy } from "../../model/types";
import { FormCreateGoatDairy } from "../forms/create-form";

import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";


interface ModalCreateProps extends BaseModalProps { }


export const ModalCreateGoatDairy = ({ open, onClose }: ModalCreateProps) => {

    const [createGoat, { isLoading: loadingCreateDairy }] = useCreateGoatDairyMutation()

    const onSubmitCreateCattleBeef = async (data: CreateGoatDairy) => {
        await createGoat(data).unwrap()
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
                        Козы молочного направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateGoatDairy onSubmitCreate={onSubmitCreateCattleBeef} />
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createGoatDairy' disabled={loadingCreateDairy}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}