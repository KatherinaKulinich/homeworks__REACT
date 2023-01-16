import React from 'react';
import Button from '../Button/Button';
import { User } from '../ContactsPage/ContactsPage';
import '../Form/Form.css'
import Input from '../Input/Input';



type formState = {
    openForm: () => void,
    fetchContacts: User[],
    setFetchContacts: any
}


const Form = ({openForm, setFetchContacts, fetchContacts}: formState) => {
    const [inputsValues, setInputsValues] = React.useState({
        id: Date.now(),
        name: '',
        username: '',
        phone: '',
        valid: true
    });


    function getInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        setInputsValues({
            ...inputsValues,
            [event.target.name]: event.target.value
        })
    }

    function saveNewContact(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        if (inputsValues.name !== '' && inputsValues.username !== '' && inputsValues.phone !== '') {
            setFetchContacts([...fetchContacts, inputsValues])
            openForm()
            return
        }
        setInputsValues({...inputsValues, valid: false})
    }

    

    return (
        <div className='popup'>
            <form 
                action='#' 
                method='get' 
                name='addContactForm'
                className='form'
            >
                <Input 
                    inputId={'addUserName'}
                    inputType={'text'}
                    labelText={'Full name:'}
                    inputHandler={getInputValue}
                    value={inputsValues.name}
                    inputName = {'name'}
                />
                <Input 
                    inputId={'addUserSurname'}
                    inputType={'text'}
                    labelText={'User name:'}
                    inputHandler={getInputValue}
                    value={inputsValues.username}
                    inputName = {'username'}
                />
                <Input 
                    inputId={'addUserPhone'}
                    inputType={'number'}
                    labelText={'Phone:'}
                    inputHandler={getInputValue}
                    value={inputsValues.phone}
                    inputName = {'phone'}
                />
                {inputsValues.valid === false && 
                    <p className="form-text">
                        fill all fields
                    </p>
                }
                <div className='button-group'>
                    <Button 
                        buttonClass={'btn btn-danger'} 
                        buttonHandle={openForm} 
                        buttonText={'Cancel'}
                        buttonType={'button'}
                    />
                    <Button 
                        buttonClass={'btn btn-success'} 
                        buttonHandle={saveNewContact} 
                        buttonText={'Save contact'}
                        buttonType={'submit'}
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;


