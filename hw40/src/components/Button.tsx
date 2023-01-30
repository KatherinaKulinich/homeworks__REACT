import React from "react";


interface ButtonProps {
  buttonType: "submit" | "button";
  buttonColor: string;
  buttonText: string;
  handleClick: (e: React.MouseEvent) => void;
  buttonAdditionalStyles?:string
  isDisabled?: boolean
}



const Button: React.FC<ButtonProps> = ({
  buttonType,
  buttonColor,
  buttonText,
  handleClick,
  buttonAdditionalStyles,
  isDisabled,
}) => {
  return (
    <button
      type={buttonType}
      className={`border rounded-md text-slate-50 px-4 py-2 bg-${buttonColor}-500  hover:bg-${buttonColor}-600 ${buttonAdditionalStyles}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};
 
export default Button;