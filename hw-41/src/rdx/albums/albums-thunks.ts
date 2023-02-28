
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAlbums, getError, getPhotos } from "./albums-actions";

type Item = {
    [key: string]: string | number
}



export const fetchAlbums = (userId: any) => {
    return (dispatch:ThunkDispatch<RootState, unknown, AnyAction>, getState:() => RootState) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(data => {
            dispatch(getAlbums(data))
        })
        .catch(error => {
            dispatch(getError(error.message));
        })
    }
}


export const fetchPhotos = (albumId: any) => {
    return (dispatch:ThunkDispatch<RootState, unknown, AnyAction>, getState:() => RootState) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(response => response.json())
        .then(data => {
            const keys = ['id', 'albumId', 'title', 'url'];
            const photosArray = data.map((item: Item) => keys.reduce((obj: Item, i) => {
                obj[i]= item[i];
                return obj
            }, {}))

            dispatch(getPhotos(photosArray))
        })
        .catch(error => {
            dispatch(getError(error.message));
        })
    }
}