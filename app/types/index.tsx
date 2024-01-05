import React from "react"

export type Children = {
    children: React.ReactNode
}


export interface SearchData {
    data: (object | undefined) [],
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    message: string | null,
    value: string | null
}