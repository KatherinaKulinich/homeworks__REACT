import React from "react";
import { useAppSelector } from "../hooks/hooks";
import TodoItem from "./TodoItem";



const TodoList: React.FC = () => {
    const todosList = useAppSelector((state) => state.todos.listTodos);

    return (
        <>
            {todosList?.length > 0 ? (
                <ul className="w-full flex flex-col gap-2 min-h-[200px] max-h-[500px]  overflow-y-scroll">
                    {todosList.map(({ id, text, isCompleted }) => (
                        <TodoItem
                            key={id}
                            text={text}
                            isCompleted={isCompleted}
                            id={id}
                        />
                    ))}
                </ul>
            ) : (
                <p className="text-center uppercase min-h-[200px]">No tasks yet</p>
            )}
        </>
    );
};

export default TodoList;
