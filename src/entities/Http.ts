export interface SortableResponse {
    unsorted: boolean,
    sorted: boolean,
    empty: boolean
}

export interface PaginationResponse {
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    sort: SortableResponse,
    unpaged: boolean
}

export interface Response<T> {
    content: Array<T>,
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    pageable: PaginationResponse,
    size: number,
    sort: SortableResponse,
    totalElements: number,
    totalPages: number
}