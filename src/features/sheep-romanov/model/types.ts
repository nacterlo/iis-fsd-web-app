import { OrganizationAnimal } from "@/features/organization/model/types"
import { Status } from "@/shared/lib/types"

export type SheepRomanovList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type SheepRomanov = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    id: number,
    birthDate: string
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    selectedCharacteristics: string,
    sexCode: string,
    status: Status,
    createdAt: string,
    updatedAt: string
}

export type CreateSheepRomanov = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string
    breed: string,
    createdAt: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    selectedCharacteristics: string,
    sexCode: string,
}

export type UpdateSheepRomanov = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    id: number,
    birthDate: string
    breed: string,
    createdAt: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    selectedCharacteristics: string,
    sexCode: string,
}