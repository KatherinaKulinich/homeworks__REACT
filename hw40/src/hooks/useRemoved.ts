import React from "react";
import { deleteAllTodos, removeTodo } from "../rdx/todoReducer";
import { useAppDispatch, useAppSelector } from "./hooks";
import useModal from "./useModal";

const useRemoved = () => {
    const { onToggleModalToDeleteAll, onToggleModalToDeleteItem } = useModal();

    const dispatch = useAppDispatch();
    const { id } = useAppSelector((state) => state.todos.selectTodo);


    const deleteAll = React.useCallback(
      (event: React.MouseEvent) => {
        dispatch(deleteAllTodos());
        onToggleModalToDeleteAll(event);
      },
      [dispatch]
    );


    const removeSelectedTodo = React.useCallback(
      (event: React.MouseEvent) => {
        dispatch(removeTodo(id));
        onToggleModalToDeleteItem(event);
      },
      [dispatch, id]
    );

    return {deleteAll, removeSelectedTodo}

}

export default useRemoved;

