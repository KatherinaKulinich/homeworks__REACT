import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumsReducer } from "./albums/albums-reducer";
import { usersReducer } from "./users/users-reducer";


const store = configureStore({
    reducer: combineReducers({
        users: usersReducer,
        albums: albumsReducer
    })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


