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

    const [form, setForm] = React.useState(false);
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

            return setFetchContacts(userArray);
        })
        .catch(error => {
            setErrorMessage(!errorMessage)
        })
    }, [])


    
    function openForm():void {
        setForm(!form) 
    }

    function deleteContact(key:number):void {
        const arrayAfterDeletion:User[] = fetchContacts.filter((contact:User) => {
            return contact.id !== key
        })
        setFetchContacts(arrayAfterDeletion)
    }

    return (
        <div className='container-xxl'>
            <div className='row'>
                <ContactsTable 
                    contacts={contacts} 
                    onDelete={handleDelete}
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
            {form && 
                <Form 
                    openForm={openForm} 
                    setFetchContacts={setFetchContacts} 
                    fetchContacts={fetchContacts}
                />
            }
        </div>
    );
}

export default ContactsPage;

