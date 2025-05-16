import { OrganizationAnimal } from "@/features/organization/model/types"
import { Status } from "@/shared/lib/types"

export type SheepMeatShorthairList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type SheepMeatShorthair = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    id: number,
    birthDate: string,
    bonitationAndProductivity: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    sexCode: string,
    status: Status
    createdAt: string,
    updatedAt: string
}

export type CreateSheepMeatShorthair = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string,
    bonitationAndProductivity: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    sexCode: string,
}

export type UpdateSheepMeatShorthair = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    id: number,
    birthDate: string,
    bonitationAndProductivity: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    sexCode: string,
}