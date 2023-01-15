import React from 'react';



interface InputField {
    inputId: string,
    inputType: string,
    labelText: string,
    inputHandler: any,
    value: string,
    inputName: string,
}

const Input = ({inputId, inputType, labelText, inputHandler, value, inputName}: InputField) => {


    return (
        <div>
            <label 
                htmlFor={inputId} 
                className="form-label"
            >
                {labelText}
            </label>
            <input 
                type={inputType} 
                id={inputId} 
                className="form-control" 
                value={value} 
                onChange={inputHandler}
                name = {inputName}
            />
        </div>
    );
}

export default Input;