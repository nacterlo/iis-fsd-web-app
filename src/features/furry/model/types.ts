import { OrganizationAnimal } from "@/features/organization/model/types"
import { BreedingCertificate, Status } from "@/shared/lib/types"

export type FurryList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type Furry = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    breedingCertificate: BreedingCertificate,
    id: number,
    breed: string,
    color: string,
    fertility: string,
    identificationNumber: string,
    lineage: string,
    objectBreedingName: string,
    party: string,
    periodOfBirth: string,
    sexCode: string,
    status: Status,
    createdAt: string,
    updatedAt: string
}


export type FormValuesFurry = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificateDate: string,
    breedingCertificateValue: string,
    id: number,
    breed: string,
    color: string,
    fertility: string,
    identificationNumber: string,
    lineage: string,
    objectBreedingName: string,
    party: string,
    periodOfBirth: string,
    sexCode: string,
}

export type CreateFurry = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate,
    breed: string,
    color: string,
    fertility: string,
    identificationNumber: string,
    lineage: string,
    objectBreedingName: string,
    party: string,
    periodOfBirth: string,
    sexCode: string,
}

export type UpdateFurry = {
    id: number,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate,
    breed: string,
    color: string,
    fertility: string,
    identificationNumber: string,
    lineage: string,
    objectBreedingName: string,
    party: string,
    periodOfBirth: string,
    sexCode: string,
}