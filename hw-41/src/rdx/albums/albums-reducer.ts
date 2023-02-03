import { PayloadAction } from "@reduxjs/toolkit"
import { State } from "../users/users-reducer"
import { Album, Photo, GET_ALBUMS, CHOOSE_ALBUM, GET_PHOTOS, GET_ERROR } from "./albums-actions"


export interface AlbumsState {
    albums: Album[],
    selectedAlbum: Album,
    photos: Photo[]
    error: string
}

export const initialState: AlbumsState = {
    albums: [],
    selectedAlbum: {
        id: 0,
        userId: 0,
        title: ''
    },
    photos: [],
    error: ''
}



export const albumsReducer = (state = initialState, action:PayloadAction<any>) => {
    switch (action.type) {
        case GET_ALBUMS:
            return {...state, albums: action.payload}

        case CHOOSE_ALBUM:
            const select = state.albums.find((album: Album) => album.id === action.payload);
            const newState = Object.assign({}, state, {selectedAlbum: select})
            return newState
            
        case GET_PHOTOS: 
            return {...state, photos: action.payload}

        case GET_ERROR: 
            return {...state, error: action.payload};

        default:
            return state;
    }
}



export const selectAlbums = (state: State) => state.albums.albums
export const selectChosenAlbum = (state: State) => state.albums.selectedAlbum
export const selectPhotos = (state: State) =>  state.albums.photos
export const selectError= (state: State) => state.albums.error


