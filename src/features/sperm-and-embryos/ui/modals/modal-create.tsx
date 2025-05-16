import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog, ModalClose, Box, Typography, Card, Divider, DialogActions, Button } from "@mui/joy";
import { useCreateSpermAndEmbryosMutation } from "../../api/sperm-and-embryos-api";
import { CreateSpermAndEmbryos } from "../../model/types";
import { FormCreateSpermAndEmbryos } from "../forms/create-form";



interface ModalCreateProps extends BaseModalProps { }

export const ModalCreateSpermAndEmbryos = ({ open, onClose }: ModalCreateProps) => {
    const [createSpermEmbryos, { isLoading: loadingCreateFurry }] = useCreateSpermAndEmbryosMutation()

    const onSubmitCreate = async (data: CreateSpermAndEmbryos) => {
        await createSpermEmbryos(data).unwrap()
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
                        Спермопродукция и эмбрионы
                    </Typography>
                </Box>
                <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <FormCreateSpermAndEmbryos onSubmitCreate={onSubmitCreate} />
                </Card>
                <DialogActions
                    buttonFlex="none"
                    sx={{ pt: 1.5, justifyContent: 'flex-start', marginTop: 'auto' }}
                >
                    <Button size="sm" type='submit' form='createSpermAndEmbryos' disabled={loadingCreateFurry}>Добавить</Button>
                    <Button variant='outlined' size="sm" onClick={() => onClose()}>Отмена</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}