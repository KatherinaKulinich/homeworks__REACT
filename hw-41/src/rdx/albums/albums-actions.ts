
export interface Album {
    id: number,
    userId: number
    title: string
}

export interface Photo {
    id: number,
    albumId: number,
    title: string,
    url: string
}



export const GET_ALBUMS = 'getAlbums';
export const CHOOSE_ALBUM = 'chooseAlbum';
export const GET_PHOTOS = 'getPhotos';
export const GET_ERROR = 'getError';

export const getAlbums = (albums: Album[]) => ({
    type: GET_ALBUMS,
    payload: albums
})
export const chooseAlbum = (id: number) => ({
    type: CHOOSE_ALBUM,
    payload: id
})
export const getPhotos = (photos: Photo[]) => ({
    type: GET_PHOTOS,
    payload: photos
})
export const getError = (error: string) => ({
    type: GET_ERROR,
    payload: error
})




