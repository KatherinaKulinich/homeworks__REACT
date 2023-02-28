import { PayloadAction } from "@reduxjs/toolkit"
import { AlbumsState } from "../albums/albums-reducer"
import { User, GET_USERS, CHOOSE_USER, GET_ERROR } from "./users-actions"


interface UsersState {
    users: User[],
    selectedUser: User,
    error: string
}


const initialState: UsersState = {
    users: [],
    selectedUser: {
        id: 0,
        name: '',
        email: '',
        phone: '',
        address: {},
        company: {}
    },
    error: ''
}

// interface Action {
//     payload: User[] | string | number
//     type: string
// }

export interface State {
    users : UsersState,
    albums : AlbumsState
}


export const usersReducer = (state = initialState, action: PayloadAction<any>) => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}

        case CHOOSE_USER: 
            const select = state.users.find((user: User) => user.id === action.payload);
            const newState = Object.assign({}, state, {selectedUser: select})
            return newState

        case GET_ERROR: 
            return {...state, error: action.payload};
            
        default:
            return state;
    }
}

export const selectUsers = (state:State) => state.users.users
export const selectChosenUser = (state: State) => state.users.selectedUser
export const selectError = (state: State) => state.users.error
