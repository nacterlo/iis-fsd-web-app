import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { useCreateGoatWoodMutation } from "../../api/goat-wood-api";
import { CreateGoatWood } from "../../model/types";
import { FormCreateGoatWood } from "../forms/create-form";


interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateGoatWood = ({ open, onClose }: ModalCreateProps) => {

    const [createGoat, { isLoading: loadingCreateDairy }] = useCreateGoatWoodMutation()

    const onSubmitCreateCattleBeef = async (data: CreateGoatWood) => {
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
                        Козы шерстяного направления продуктивности
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateGoatWood onSubmitCreate={onSubmitCreateCattleBeef} />
                    {/* <FormCreateGoatDairy onSubmitCreate={onSubmitCreateCattleBeef} /> */}
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createGoatWood' disabled={loadingCreateDairy}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}