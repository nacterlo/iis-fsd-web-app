import { ICreateOrganization } from "@/features/organization/model/types";
import { BaseModalProps } from "@/shared/lib/types";
import { SubmitHandler, useForm } from "react-hook-form";


interface CreateFormProps {
    onSubmitCreate: (data: ICreateOrganization) => Promise<void>
}

export const CreateFormOrganization = ({ onSubmitCreate }: CreateFormProps) => {

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ICreateOrganization>()

    const onSubmit: SubmitHandler<ICreateOrganization> = async (data) => {
        await onSubmitCreate(data)
    }

    return (
        <form id="createOrganization"></form>
    )
}