import React from 'react';
import { User } from '../ContactsPage/ContactsPage';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';


interface Props {
    userContacts: User[]
    deleteContact: (key: number) => void
}

const ContactsTable = ({userContacts, deleteContact}: Props) => {
    
    return (
        <div className='container'>
            <div className='row'>
                <table className="table table-secondary ">
                    <TableHead />
                    <tbody>
                        { userContacts.map((user:any) => (
                                
                                <TableRow 
                                    userFullName={user.name}
                                    userName={user.username}
                                    userPhone={user.phone} 
                                    deleteContact={deleteContact} 
                                    key={user.id} 
                                    id = {user.id}             
                                /> 
                            ))
                        }
                    </tbody> 
                </table>
            </div>
        </div>
    );
}

export default ContactsTable;