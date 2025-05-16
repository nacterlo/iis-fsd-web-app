import { OrganizationAnimal } from "@/features/organization/model/types"
import { Status } from "@/shared/lib/types"


export type PigList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type Pig = {
    addressee: OrganizationAnimal
    businessEntity: OrganizationAnimal
    ownerAtBirth: OrganizationAnimal
    id: number
    birthDate: string
    breed: string
    breedingValue: string
    identificationNumber: string
    individualNumber: string
    lineage: string
    updatedAt: string
    weight: number
    party: string
    productivity: string
    sexCode: string
    status: Status
}

export type CreatePig = {
    addresseeId: number
    businessEntityId: number
    ownerAtBirthId: number
    birthDate: string
    breed: string
    breedingValue: string
    identificationNumber: string
    individualNumber: string
    lineage: string
    weight: number
    party: string
    productivity: string
    sexCode: string
}

export type UpdatePig = {
    addresseeId: number
    businessEntityId: number
    ownerAtBirthId: number
    id: number
    birthDate: string
    breed: string
    breedingValue: string
    identificationNumber: string
    individualNumber: string
    lineage: string
    updatedAt: string
    weight: number
    party: string
    productivity: string
    sexCode: string
}