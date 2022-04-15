/// <reference types="vite/client" />
type User = {
    id: number
    username: string
    full_name: string
    email: string
    password: string
    avatar: string
    phone: number
    address: string
    bio: string
    isEmployer: boolean
}

type Project = {
    price: number,
    deadline: Date,
    tile: string,
    overview: string,
    status: boolean,
    employer_id: number,
    category_id: number
}