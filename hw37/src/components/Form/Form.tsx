import React from "react";
import { Todo } from "../Container/Container";
import  '../Form/Form.css';

interface userValue {
    setTodosList: any
    todosList: Todo[]
}

function Form({todosList, setTodosList}: userValue) {
    const [value, setValue] = React.useState('');


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

    return (
        <form 
            className="form" 
            method="get" 
            action="#"
            name="form"
        >
            <label 
                htmlFor="userValue" 
                className="form__label"></label>
            <input 
                type="text"
                placeholder="Enter something.."
                id="userValue"
                name="userValue"
                className="form__input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button 
                className="form__button"
                type="submit"
                onClick={addItem}
            >
                Add
            </button>
        </form>
    )
}

export default Form