import { OrganizationAnimal } from "@/features/organization/model/types"

export type CattleMilkList = {
    id: number
    identificationNumber: string // Indentification number
    breed: string
    sexCode: string
    status: Status
    createdAt?: string
}

export type CattleMilk = {
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
    exterior: string,
    productivity: string,
    breedingValue: string,
    lineage: string,
    reproduction: string,
    party: string
}

export type CreateCattleMilk = {
    identificationNumber: string,
    birthDate: string,
    sexCode: string,
    breed: string,
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    name?: string,
    breedingValue?: string,
    exterior?: string,
    lineage?: string,
    methodOfObtaining?: string,
    productivity?: string,
    recessiveGenes?: string,
    reproduction?: string,
    status?: number,
    suit?: string,
    party?: string
}

export type UpdateCattleMilk = {
    addresseeId: number,
    birthDate: string,
    breed: string,
    breedingValue: string,
    businessEntityId: number,
    createdAt: string,
    exterior: string,
    id: number,
    identificationNumber: string,
    lineage: string,
    methodOfObtaining: string,
    name: string,
    ownerAtBirthId: number,
    productivity: string,
    recessiveGenes: string,
    reproduction: string,
    sexCode: string,
    suit: string,
    party: string,
    updatedAt: string
}


type Status = {
    id: number,
    name: string
}