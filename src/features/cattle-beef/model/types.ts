import { OrganizationAnimal } from "@/features/organization/model/types"

type Status = {
    id: number,
    name: string
}
export type CattleBeefList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type CattleBeef = {
    id: number,
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    status: Status,
    CreatedAt: string,
    UpdatedAt: string,
    addresseeId: number,
    name: string,
    breed: string,
    birthDate: string,
    sexCode: string,
    identificationNumber: string,
    suit: string,
    ownerAtBirthId: number,
    businessEntityId: number,
    recessiveGenes: string,
    methodOfObtaining: string,
    breedingValue: string,
    lineage: string,
    reproduction: string,
    party: string
}

export type CreateCattleBeef = {
    identificationNumber: string,
    birthDate: string,
    sexCode: string,
    breed: string,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    name?: string,
    breedingValue?: string,
    lineage?: string,
    methodOfObtaining?: string,
    recessiveGenes?: string,
    reproduction?: string,
    status?: number,
    suit?: string,
    party?: string
}

export type UpdateCattleBeef = {
    addresseeId: number,
    birthDate: string,
    breed: string,
    breedingValue: string,
    businessEntityId: number,
    createdAt: string,
    id: number,
    identificationNumber: string,
    lineage: string,
    methodOfObtaining: string,
    name: string,
    ownerAtBirthId: number,
    recessiveGenes: string,
    reproduction: string,
    sexCode: string,
    suit: string,
    party: string,
    updatedAt: string
}