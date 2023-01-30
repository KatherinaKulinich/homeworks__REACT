import React from "react";
import useForm from "../hooks/useForm";
import Button from "./Button";

const TodoForm: React.FC = () => {
    const { value, handleAddTodo, handleChange } = useForm()

    return (
        <form action="#" method="get" name="todoForm" className="flex gap-4">
            <label htmlFor="todoInput" className="hidden"></label>
            <input
                type="text"
                className="w-4/5 border rounded-lg p-2 outline-0"
                id="todoInput"
                placeholder="New task..."
                onChange={handleChange}
                value={value}
            />
            <Button
                buttonColor="green"
                buttonAdditionalStyles="w-1/5 disabled:bg-slate-300"
                buttonType="submit"
                buttonText="Add"
                handleClick={handleAddTodo}
                isDisabled={!value.trim()}
            />
        </form>
    );
};

export default TodoForm;
