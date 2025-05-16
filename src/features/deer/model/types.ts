import { OrganizationAnimal } from "@/features/organization/model/types"
import { Bonitation, Status } from "@/shared/lib/types"



export type DeerList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type Deer = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    bonitation: Bonitation
    id: number,
    birthDate: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    selectableTraits: string,
    sexCode: string,
    status: Status
}

export type CreateDeer = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    sexCode: string,
    bonitation: Bonitation
    lineage: string,
    party: string,
    selectableTraits: string,// Селекционируемые признаки
}

export type FormValuesDeer = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    selectableTraits: string,
    sexCode: string,
    bonitationDate: string,
    bonitationEvaluation: string,
    bonitationMeasurements: string
}

export type UpdateDeer = {
    id: number,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string,
    breed: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    party: string,
    selectableTraits: string,
    sexCode: string,
    bonitation: Bonitation
}