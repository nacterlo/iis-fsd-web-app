import { OrganizationAnimal } from "@/features/organization/model/types"
import { BreedingCertificate, Status } from "@/shared/lib/types"

export type SpermAndEmbryosList = {
    id: number,
    sexCode: string,
    createdAt: string,
    status: Status
}

export type SpermAndEmbryos = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    breedingCertificate: BreedingCertificate,
    id: number,
    date: string,
    geneticExamination: string,
    party: string,
    quantity: number,
    reproduction: {
        identificationNumber: string
        sexCode: string
    },
    sexCode: string,
    status: Status
    createdAt: string,
    updatedAt: string
}

export type FormValuesSpermAndEmbryos = {
    addresseeId: number,
    breedingCertificateDate: string,
    breedingCertificateValue: string,
    businessEntityId: number,
    date: string,
    geneticExamination: string,
    id: number,
    party: string,
    quantity: number,
    reproduction: {
        identificationNumber: string,
        sexCode: string,
    },
    sexCode: string
}

export type CreateSpermAndEmbryos = {}

export type UpdateSpermAndEmbryos = {}

