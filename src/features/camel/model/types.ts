import { OrganizationAnimal } from "@/features/organization/model/types"
import { Bonitation, Status } from "@/shared/lib/types"



export type CamelList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type Camel = {
    id: number,
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    bonitation: Bonitation,
    birthDate: string,
    breed: string,
    createdAt: string,
    events: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    name: string,
    number: string,
    party: string,
    recessiveGenes: string,
    sexCode: string,
    suit: string,
    status: Status
}

export type CreateCamel = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    birthDate: string,
    breed: string,
    events: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    name: string,
    number: string,
    party: string,
    recessiveGenes: string,
    sexCode: string,
    suit: string,
    bonitation: Bonitation
}

export type FormValuesCamel = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breed: string,
    birthDate: string,
    events: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    name: string,
    number: string,
    party: string,
    recessiveGenes: string,
    sexCode: string,
    suit: string,
    bonitationDate: string,
    bonitationEvaluation: string,
    bonitationMeasurements: string
}

export type UpdateCamel = {
    id: number,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breed: string,
    birthDate: string,
    events: string,
    identificationNumber: string,
    individualNumber: string,
    lineage: string,
    name: string,
    number: string,
    party: string,
    recessiveGenes: string,
    sexCode: string,
    suit: string,
    bonitation: Bonitation
}

