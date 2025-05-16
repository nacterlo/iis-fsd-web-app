

export interface BaseModalProps {
    open: boolean
    onClose: () => void
}

export type Status = {
    id: number,
    name: string
}

export type Bonitation = {
    date: string
    evaluation: string // Сведения об оценке
    measurements: string //Сведения о промерах
}


export type BreedingCertificate = {
    date: string
    value: string
}