import React from "react";
import { addTodo } from "../rdx/todoReducer";
import { useAppDispatch } from "./hooks";

const useForm = () => {
    const [value, setValue] = React.useState("");
    const dispatch = useAppDispatch();



    const handleAddTodo = React.useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();

            if (value) {
            dispatch(addTodo(value));
            }

            setValue("");
        },
       [dispatch, value]
    );

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setValue(event.target.value);
    };

    
    return { value, handleAddTodo, handleChange }
}

export default useForm;