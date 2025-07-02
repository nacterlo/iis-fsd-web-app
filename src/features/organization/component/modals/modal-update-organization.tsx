import { useGetFullOrganizationsQuery, useGetOrganizationQuery } from "@/app/store/api/organization-api";
import { BaseModalProps } from "@/shared/lib/types";
import { Modal, ModalDialog } from "@mui/joy";




interface ModalUpdateOrganizationProps extends BaseModalProps {
    id: number
}



export const ModalUpdateOrganization = ({ open, onClose, id }: ModalUpdateOrganizationProps) => {
    const { data: organization } = useGetOrganizationQuery(id)
    console.log(organization);

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog>
                q
            </ModalDialog>
        </Modal>
    )
}