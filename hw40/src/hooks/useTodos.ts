import React from "react";
import { completeAllTodos } from "../rdx/todoReducer";
import { useAppDispatch, useAppSelector } from "./hooks";

const useTodos = () => {
    const todosList = useAppSelector((state) => state.todos.listTodos);
    const dispatch = useAppDispatch();

    const handleCompleteAllTodos = React.useCallback(() => {
    dispatch(completeAllTodos());
    }, [dispatch]);

    return { todosList, handleCompleteAllTodos }
}

export default useTodos;