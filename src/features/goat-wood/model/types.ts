import { OrganizationAnimal } from "@/features/organization/model/types"
import { Status } from "@/shared/lib/types"

export type GoatWoodList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type GoatWood = {
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
    sexCode: string,
    status: Status
    suit: string,
    createdAt: string,
    updatedAt: string
}

export type CreateGoatWood = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string
    breed: string,
    identificationNumber: string,
    lineage: string,
    party: string,
    productivity: string,
    sexCode: string,
    status: Status
    suit: string,
}

export type UpdateGoatWood = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    id: number,
    birthDate: string
    breed: string,
    identificationNumber: string,
    lineage: string,
    party: string,
    productivity: string,
    sexCode: string,
    status: Status
    suit: string,
}