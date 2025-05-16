import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { useCreateCattleBeefMutation } from "../../api/cattle-beef-api";
import { FormCattleBeef } from "../forms/create-form";
import { CreateCattleBeef } from "../../model/types";



interface ModalCreateProps extends BaseModalProps { }


export const ModalCreateCattleBeef = ({ open, onClose }: ModalCreateProps) => {

    const [createCattleBeef, { isLoading: loadingCreateCattleBeef }] = useCreateCattleBeefMutation()
    const onSubmitCreateCattleBeef = async (data: CreateCattleBeef) => {
        await createCattleBeef(data).unwrap()
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
                        Крупный рогатый скот мясного направления
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCattleBeef onSubmitCreateCattleBeef={onSubmitCreateCattleBeef} />
                    {/* <FormCattleMilk onSubmitCrateCattleMilk={onSubmitCreateCattleMilk} /> */}
                </Card>
                <Divider />
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createCattleBeef' disabled={loadingCreateCattleBeef}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal >
    )
}
