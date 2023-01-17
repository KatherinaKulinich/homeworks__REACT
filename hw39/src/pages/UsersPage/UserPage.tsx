import  React from 'react';
import { ParamKeyValuePair, URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import '../UsersPage/UserPage.css'



interface UserItem {
    id: number
    name: string
    phone: string
    email: string
    company: {
        [key: string]: string
    }
    address: {
        [key: string]: string
    }
}

type Item = {
    [key: string]: string | number
}

const keys = ['id', 'name', 'address', 'phone', 'email', 'company'];


const UserPage: React.FC = () => {
    const [users, setUsers] = React.useState<UserItem[]>([]);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            const usersArray:UserItem[] = data.map((item: Item) => keys.reduce((obj: Item, i) => {
                obj[i]= item[i];
                return obj
            }, {}))

            setUsers(usersArray)
        })
        .catch(error => {
            console.warn(error);
            
        })
    })
    

    return (  
        <div className='wrapper'>
            <Header  pageTitle='Users' />
            <main className='section user-page'>
                <div className='users-section'>
                    {
                        users.map((user:UserItem) => (
                            <div 
                                key={user.id} 
                                className='user-card'
                            >
                                <UserCard 
                                    userName={user.name} 
                                    userCity={user.address.city} 
                                    userMail={user.email} 
                                    userPhone={user.phone} 
                                    userCompany={user.company.name} 
                                    path={`users/${user.id}/albums`}
                                />
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default UserPage;
