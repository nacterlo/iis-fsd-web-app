import { OrganizationAnimal } from "@/features/organization/model/types"
import { Status } from "@/shared/lib/types"

export type GoatDairyList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type GoatDairy = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    id: number,
    birthDate: string
    breed: string,
    identificationNumber: string,
    lineage: string,
    party: string,
    productivity: string,
    valueIndex: string,
    sexCode: string,
    status: Status,
    suit: string,
    createdAt: string,
    updatedAt: string
}

export type CreateGoatDairy = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string,
    breed: string,
    identificationNumber: string,
    lineage: string,
    party: string,
    productivity: string,
    valueIndex: string,
    sexCode: string,
    suit: string,
}

export type UpdateGoatDairy = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    id: number,
    birthDate: string,
    breed: string,
    identificationNumber: string,
    lineage: string,
    party: string,
    productivity: string,
    valueIndex: string,
    sexCode: string,
    suit: string,
}