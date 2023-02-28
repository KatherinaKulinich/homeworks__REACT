
export interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    address: {
        [key:string]: string
    },
    company: {
        [key:string]: string
    }
}



export const GET_USERS = 'getUsers';
export const CHOOSE_USER = 'chooseUser';
export const GET_ERROR = 'getError';

export const getUsers = (users: User[]) => ({
    type: GET_USERS,
    payload: users
})

export const chooseUser = (id: number) => ({
    type: CHOOSE_USER,
    payload: id
})
export const getError = (error: string) => ({
    type: GET_ERROR,
    payload: error
})













