import { OrganizationAnimal } from "@/features/organization/model/types"
import { BreedingCertificate, Status } from "@/shared/lib/types"

export type FishList = {
    id: number
    name: string
    breed: string
    createdAt: string
    status: Status
}

export type FormValuesFish = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificateDate: string,
    breedingCertificateValue: string,
    name: 'икра' | 'личинки' | 'сперма' | 'малёк' | 'производители' | 'ремонтный молодняк',
    breed: string,
    party: string,
}

export type Fish = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    breedingCertificate: BreedingCertificate,
    id: number,
    breed: string,
    name: 'икра' | 'личинки' | 'сперма' | 'малёк' | 'производители' | 'ремонтный молодняк',
    party: string,
    status: Status
    createdAt: string,
    updatedAt: string
}

export type CreateFish = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate,
    breed: string,
    name: 'икра' | 'личинки' | 'сперма' | 'малёк' | 'производители' | 'ремонтный молодняк',
    party: string,
}

export type UpdateFish = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate,
    id: number,
    breed: string,
    name: 'икра' | 'личинки' | 'сперма' | 'малёк' | 'производители' | 'ремонтный молодняк',
    party: string,
}