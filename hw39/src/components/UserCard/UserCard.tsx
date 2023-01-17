import React from 'react';
import ReactDOM from 'react-dom';
import ButtonLink from '../ButtonLink/ButtonLink';
import '../UserCard/UserCard.css'

interface User {
    userName: string
    userCity: string
    userMail: string
    userPhone: string
    userCompany: string
    path:string
}


function UserCard({userName, userCity, userMail, userPhone, userCompany, path}:User) {
    return ( 
        <div className='card'>
            <h2 className='card__name'>
                {userName}
            </h2>
            <div className='card__info'>
                <div className='card__field'>
                    <div className='card__subfield'>
                        <p className='card__subtitle'>
                            City:
                        </p>
                        <p className='card__content'>
                            {userCity}
                        </p>
                    </div>
                    <div className='card__subfield'>
                        <p className='card__subtitle'>
                            Company:
                        </p>
                        <p className='card__content'>
                            {userCompany}
                        </p>
                    </div>
                </div>

                <div className='card__field'>
                    <div className='card__subfield'>
                        <p className='card__subtitle'>
                            Mail:
                        </p>
                        <p className='card__content'>
                            {userMail}
                        </p>
                    </div>
                    <div className='card__subfield'>
                        <p className='card__subtitle'>
                            Phone:
                        </p>
                        <p className='card__content'>
                            {userPhone}
                        </p>
                    </div>
                </div>
            </div>
            
            <ButtonLink 
                linkPath={path} 
                linkText={"See user's albums"} 
            />
        </div>
    );
}

export default UserCard