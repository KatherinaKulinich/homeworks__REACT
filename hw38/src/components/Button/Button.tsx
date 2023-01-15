import React, { ReactEventHandler } from 'react';


interface Button {
    buttonClass: string,
    buttonHandle: ReactEventHandler,
    buttonText: string,
    buttonType: "button" | "submit"
}


const Button = ({buttonClass, buttonHandle, buttonText, buttonType}: Button) => {
    return (
        <button 
            type={buttonType} 
            className={buttonClass}
            onClick={buttonHandle}
        >
            {buttonText}
        </button>
    );
}

export default Button;