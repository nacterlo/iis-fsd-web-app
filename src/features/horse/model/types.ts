import { OrganizationAnimal } from "@/features/organization/model/types"
import { Bonitation, Status } from "@/shared/lib/types"


export type HorseList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type Horse = {
    addressee: OrganizationAnimal
    businessEntity: OrganizationAnimal
    ownerAtBirth: OrganizationAnimal
    id: number
    birthDate: string
    bonitation: Bonitation
    breed: string
    createdAt: string
    events: string
    graphicDescription: string
    identificationNumber: string
    individualNumber: string
    lineage: string
    name: string
    number: string
    party: string
    sexCode: string
    suit: string
    updatedAt: string
}

export type CreateHorse = {
    addresseeId: number
    businessEntityId: number
    ownerAtBirthId: number
    birthDate: string
    bonitation: Bonitation
    number: string
    party: string
    lineage: string
    suit: string
    events: string
    name: string
    breed: string
    graphicDescription: string
    identificationNumber: string
    individualNumber: string
    sexCode: string
}

export type FormValuesHorse = {
    addresseeId: number
    businessEntityId: number
    ownerAtBirthId: number
    birthDate: string
    bonitationDate: string
    bonitationEvaluation: string // Сведения об оценке
    bonitationMeasurements: string //Сведения о промерах
    number: string
    party: string
    lineage: string
    suit: string
    events: string
    name: string
    breed: string
    createdAt: string
    graphicDescription: string
    identificationNumber: string
    individualNumber: string
    sexCode: string
}

export type UpdateHorse = {
    addresseeId: number
    businessEntityId: number
    ownerAtBirthId: number
    id: number
    birthDate: string
    bonitation: Bonitation
    breed: string
    createdAt: string
    events: string
    graphicDescription: string
    identificationNumber: string
    individualNumber: string
    lineage: string
    name: string
    number: string
    party: string
    sexCode: string
    suit: string
    updatedAt: string
}