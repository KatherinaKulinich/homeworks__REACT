import React from "react";
import { IconContext } from "react-icons";
import { FaTrashAlt } from "react-icons/Fa";
import { MdDone } from "react-icons/Md";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import useModal from "../hooks/useModal";
import useTheme from "../hooks/useTheme";
import {  showTodoById, toggleTodo } from "../rdx/todoReducer";



interface TodoProps {
    id: string
    text: string
    isCompleted: boolean,
}



const TodoItem: React.FC<TodoProps> = ({ id, text, isCompleted }) => {
    
    const { onToggleModalToDeleteItem } = useModal()
    const { currentTheme} = useTheme()

    const dispatch = useAppDispatch();
    const deleteTodo = React.useCallback(
      (event: React.MouseEvent) => {
        dispatch(showTodoById(id));
        onToggleModalToDeleteItem(event);
      },
      [dispatch, id]
    );
    
   
  return (
    <li
        className={`border p-2 rounded-sm flex justify-between items-center w-full  ${
        currentTheme === "dark" ? "bg-zinc-600" : "bg-slate-50"
        }`}
    >
        <div className="flex gap-2 items-center w-full">
            <div
                onClick={() => dispatch(toggleTodo(id))}
                className={`border p-1 rounded-md ${
                    isCompleted ? "bg-green-500" : "bg-slate-50"
                }`}
            >
                <IconContext.Provider value={{ color: "#f8fafc", size: "26" }}>
                    <MdDone />
                </IconContext.Provider>
            </div>
            <p
                className={`${isCompleted ? "line-through" : ""} ${
                    currentTheme === "dark" ? "text-slate-50" : "text-slate-900"
                } overflow-x-scroll max-w-[400px]`}
            >
                {text}
            </p>
        </div>
        <div
            className="border p-2 bg-red-400 rounded-md hover:bg-red-600"
            onClick={deleteTodo}
        >
            <IconContext.Provider value={{ color: "white" }}>
            <FaTrashAlt />
            </IconContext.Provider>
        </div>
    </li>
  );
};

export default TodoItem;


