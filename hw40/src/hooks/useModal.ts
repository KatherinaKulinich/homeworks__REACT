import React from "react";
import { toggleModalDeleteItem, toggleModalDeleteAll } from "../rdx/modalReducer";
import { useAppDispatch, useAppSelector } from "./hooks";

const useModal = () => {

    const modalStateDeleteItem = useAppSelector(
        (state) => state.modal.modalDeleteItem
    );
    const modalStateDeleteAll = useAppSelector(
        (state) => state.modal.modalDeleteAll
    );
    const dispatch = useAppDispatch();



    const closeAnyModal = React.useCallback((event: React.MouseEvent) => {
      modalStateDeleteItem === true
        ? onToggleModalToDeleteItem(event)
        : modalStateDeleteItem;

      modalStateDeleteAll === true
        ? onToggleModalToDeleteAll(event)
        : modalStateDeleteAll;
    }, []);



    const onToggleModalToDeleteAll = React.useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        dispatch(toggleModalDeleteAll());
      },
      [dispatch]
    );

    const onToggleModalToDeleteItem = React.useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        dispatch(toggleModalDeleteItem());
      },
      [dispatch]
    );



    return {
        closeAnyModal, 
        onToggleModalToDeleteAll,
        onToggleModalToDeleteItem,
        modalStateDeleteAll,
        modalStateDeleteItem
    }
}

export default useModal