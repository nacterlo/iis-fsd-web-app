import { OrganizationAnimal } from "@/features/organization/model/types"
import { Status } from "@/shared/lib/types"

export type SheepRoughList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type SheepRough = {
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

export type CreateSheepRough = {
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

export type UpdateSheepRough = {
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