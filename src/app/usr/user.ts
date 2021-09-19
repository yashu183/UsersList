export interface User{
    firstName: string,
    lastName: string,
    email?: string,
    age?: number,
    address?: {
        street: string,
        city: string
    },
    image?: string, // coz we are adding only path
    isActive?: boolean,
    isBalance?: number,
    registered?: any,
    hide?: boolean
}