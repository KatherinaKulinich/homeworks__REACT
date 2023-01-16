import React, {useState} from "react";
import  '../Container/Container.css';
import Form from '../Form/Form';
import List from '../List/List';

export interface Todo {
    id: number,
    text: string
}


function Container() {
   
    const [todosList, setTodosList] = useState<Todo[]>([]);


    function deleteItem( item: number) {
        const newTodosList: Todo[] = todosList.filter((todo) => {
            return todo.id !== item
        })
        setTodosList(newTodosList)    
    }
    


    return (
        <div className="container">
            <h1 className="container__title"> 
                TO DO LIST
            </h1>
           <Form setTodosList={setTodosList} todosList={todosList} />
           <List 
                list={todosList} 
                deleteItem={deleteItem} 
           />
        </div>
    )
}

export default Container