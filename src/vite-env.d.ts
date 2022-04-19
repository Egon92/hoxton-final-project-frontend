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
    id: number
    price: number,
    deadline: Date,
    title: string,
    description: string,
    status: boolean,
    employer_id: number,
    category_id: number
}