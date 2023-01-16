import React from 'react';
import Button from '../Button/Button';
import ContactsTable from '../ContactsTable/ContactsTable';
import Form from '../Form/Form';


export interface User {
    id: number,
    name: string,
    phone: string
}


interface Object {
    [key: string]: string | number
}


const ContactsPage = () => {

    const [isFormVisible, setIsFormVisible] = React.useState(false);
    const [contacts, setContacts] = React.useState<User[]>([]);
    const [errorMessage, setErrorMessage] = React.useState(false)


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                setErrorMessage(!errorMessage)
            }

            return response.json()
        })
        .then(data => {
            const keys = ['id', 'name', 'username', 'phone'];
            const userArray: User[] = data.map((item:Object) => keys.reduce((obj:Object, i) => {
                obj[i]= item[i];
                return obj
            }, {}))

            return setContacts(userArray);
        })
        .catch(error => {
            setErrorMessage(!errorMessage)
        })
    }, [])


    
    function openForm():void {
        setIsFormVisible(!isFormVisible) 
    }

    function deleteContact(key:number):void {
        const arrayAfterDeletion:User[] = contacts.filter((contact:User) => {
            return contact.id !== key
        })
        setContacts(arrayAfterDeletion)
    }

    return (
        <div className='container-xxl'>
            <div className='row'>
                <ContactsTable 
                    userContacts={contacts} 
                    deleteContact={deleteContact}
                />
            </div>
            {errorMessage && 
                <p>
                    Something was wrong! Try later!
                </p>
            }
            <Button 
                buttonClass={'btn btn-info'} 
                buttonHandle={openForm} 
                buttonText={'Add new contact'}
                buttonType={'button'}
            />
            {isFormVisible && 
                <Form 
                    openForm={openForm} 
                    setContacts={setContacts} 
                    contacts={contacts}
                />
            }
        </div>
    );
}

export default ContactsPage;


