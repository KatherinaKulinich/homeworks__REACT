import React, {useState} from "react";
import  '../Container/Container.css';
import Form from '../Form/Form';
import List from '../List/List';

interface Todo {
    id: number,
    text: string
}




function Container() {
    const [value, setValue] = useState('');
    const [todosList, setTodosList] = useState<Todo[]>([]);



    function addItem(e:any) {
        e.preventDefault();

        if (!value) return;

        const item: Todo = {
            id: Math.floor(Math.random() * 100000),
            text: value
        }

        setTodosList([...todosList, item])
        setValue('')
    }



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
           <Form 
                value={value} 
                setValue={setValue} 
                addNewItem={addItem}
           />
           <List 
                list={todosList} 
                deleteItem={deleteItem} 
           />
        </div>
    )
}

export default Container