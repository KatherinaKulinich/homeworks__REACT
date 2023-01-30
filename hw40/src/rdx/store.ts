import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import themeReducer from "./themeReducer";
import todoReducer from "./todoReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
    modal: modalReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
