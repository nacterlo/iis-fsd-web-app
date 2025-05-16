import { OrganizationAnimal } from "@/features/organization/model/types"
import { BreedingCertificate, Status } from "@/shared/lib/types"

export type BeeList = {
    id: number,
    identificationNumber: string,
    breed: string,
    status: Status,
    createdAt: string
}

export type Bee = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    breedingCertificate: BreedingCertificate,
    id: number,
    birthDate: string
    breed: string,
    description: string,
    identificationNumber: string,
    line: string,
    party: string,
    queenLineage: string,
    reproduction: string,
    status: Status
    createdAt: string,
    updatedAt: string
}

export type FormValuesBee = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificateDate: string,
    breedingCertificateValue: string,
    birthDate: string
    breed: string,
    description: string,
    identificationNumber: string,
    line: string,
    party: string,
    queenLineage: string,
    reproduction: string,
}

export type CreateBee = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate,
    birthDate: string
    breed: string,
    description: string,
    identificationNumber: string,
    line: string,
    party: string,
    queenLineage: string,
    reproduction: string,
}

export type UpdateBee = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate,
    id: number,
    birthDate: string
    breed: string,
    description: string,
    identificationNumber: string,
    line: string,
    party: string,
    queenLineage: string,
    reproduction: string,
}
