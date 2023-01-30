import React from "react";
import useModal from "../../hooks/useModal";
import Button from "../Button";


interface ModalProps {
  children: React.ReactNode;
  onCloseModal: (event: React.MouseEvent) => void;
  onDelete: (event: React.MouseEvent) => void;
}


const Modal: React.FC<ModalProps> = ({ children, onCloseModal, onDelete }) => {

    const {closeAnyModal} = useModal()

    return (
        <div
            className="fixed top-0 right-0 bottom-0 left-0 bg-slate-600/75"
            onClick={closeAnyModal}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-[500px] h-auto bg-slate-50 flex flex-col gap-6">
                <h2 className="text-center text-xl text-bold">Are you sure?</h2>
                    {children}
                <div className="flex justify-between">
                    <Button
                        buttonColor="red"
                        buttonType="button"
                        buttonText="Cancel"
                        handleClick={onCloseModal}
                    />
                    <Button
                        buttonColor="green"
                        buttonType="button"
                        buttonText="Delete"
                        handleClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};
 
export default Modal;

