import { Action, AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { getUsers, getError } from "./users-actions"

export type ThunkAction<R, S, E, A extends Action > = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R

type Item = {
    [key: string]: string | number
}



export const fetchUsers = () => {
    return (dispatch:ThunkDispatch< RootState, unknown, AnyAction>, getState:() => RootState) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const keys = ['id', 'name', 'address', 'phone', 'email', 'company'];
            const usersArray = data.map((item: Item) => keys.reduce((obj: Item, i) => {
                obj[i]= item[i];
                return obj
            }, {}))

            dispatch(getUsers(usersArray))
        })
        .catch(error => {
            dispatch(getError(error.message));
        })
    }

}