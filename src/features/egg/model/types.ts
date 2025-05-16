import { OrganizationAnimal } from "@/features/organization/model/types"
import { BreedingCertificate, Status } from "@/shared/lib/types"

export type EggList = {
    id: number
    cross: string,
    line: string,
    status: Status
    createdAt?: string
}

export type Egg = {
    addressee: OrganizationAnimal,
    businessEntity: OrganizationAnimal,
    ownerAtBirth: OrganizationAnimal,
    id: number,
    breedingCertificate: BreedingCertificate
    breedingGroup: 'Cелекционная' | 'Контрольная' | 'Множитель',
    characteristicsEggsEmbryos: string,
    cross: string,
    herdProductivity: string,
    line: string,
    parentalForm: string,
    party: string,
    population: string,
    status: Status
    createdAt: string,
    updatedAt: string
}

export type FormValuesEgg = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    id: number,
    breedingCertificateDate: string,
    breedingCertificateValue: string,
    breedingGroup: 'Cелекционная' | 'Контрольная' | 'Множитель',
    characteristicsEggsEmbryos: string,
    cross: string,
    herdProductivity: string,
    line: string,
    parentalForm: string,
    party: string,
    population: string,
}

export type CreateEgg = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    breedingCertificate: BreedingCertificate
    breedingGroup: 'Cелекционная' | 'Контрольная' | 'Множитель',
    characteristicsEggsEmbryos: string,
    cross: string,
    herdProductivity: string,
    line: string,
    parentalForm: string,
    party: string,
    population: string,
}

export type UpdateEgg = {
    addresseeId: number,
    businessEntityId: number,
    ownerAtBirthId: number,
    id: number,
    breedingCertificate: BreedingCertificate
    breedingGroup: 'Cелекционная' | 'Контрольная' | 'Множитель',
    characteristicsEggsEmbryos: string,
    cross: string,
    herdProductivity: string,
    line: string,
    parentalForm: string,
    party: string,
    population: string,
}