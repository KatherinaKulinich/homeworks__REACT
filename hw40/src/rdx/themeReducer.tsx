import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Theme {
    theme: 'dark' | 'light'
}


const initialState:Theme = {
    theme: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state) {
            state.theme === 'dark' ? state.theme = 'light' : state.theme = 'dark'
        }
    }
})

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
