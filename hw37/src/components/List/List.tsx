import React from "react";
import '../List/List.css';
import Item from "../Item/Item";


interface Todos {
    list: Todo[],
    deleteItem: any
}

interface Todo {
    id: number,
    text: string,
}

function List({list, deleteItem}: Todos) {


    return (
        <>
            {list?.length > 0 ? 
                (<ul className="todo-list">
                    {list.map((item) => 
                        <Item 
                            text={item.text} 
                            id={item.id} 
                            key={item.id} 
                            deleteTodo={deleteItem} 
                        />
                    )}
                </ul>) : (
                    <p className="todo__message"> 
                        No tasks yet
                    </p>
                )
            }
        </>
    )
}

export default List