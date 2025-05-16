



export type ServerResponseArray<T> = {
    data: T[]
    page: number
    limit: number
    totalCount: number
    totalPage: number
}

export type ServerResponseObject<T> = {
    data: T
}