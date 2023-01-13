import React from "react";
import  '../Form/Form.css';

interface userValue {
    value: string,
    setValue: any,
    addNewItem: any
}

function Form({value, setValue, addNewItem}: userValue) {
    
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
                onClick={addNewItem}
            >
                Add
            </button>
        </form>
    )
}

export default Form