import React from "react";
import { changeTheme } from "../rdx/themeReducer";
import { useAppDispatch, useAppSelector } from "./hooks";

const useTheme = () => {
    
     const currentTheme = useAppSelector((state) => state.theme.theme);
     const dispatch = useAppDispatch();

     const handleChangeTheme = React.useCallback(() => {
       dispatch(changeTheme());
     }, [dispatch]);

     return { currentTheme, handleChangeTheme }
}

export default useTheme;