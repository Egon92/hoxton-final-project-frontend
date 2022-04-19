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
    postedProjects: Project[]
    acceptedProjects: Project[]
}

type Project = {
    id: number
    price: number,
    deadline: Date,
    title: string,
    description: string,
    status: boolean,
    employer_id: number,
    category_id: number,
    employee: User| null,
}

type Bid = {
    id: number
    bids: number
    employee_id: number
    project_id: number
    employee: User
}