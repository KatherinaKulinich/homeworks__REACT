import React from 'react';
import ReactDOM from 'react-dom';
import ButtonLink from '../ButtonLink/ButtonLink';
import '../Header/Header.css'

interface Title {
    pageTitle: string
}


const Header: React.FC<Title> = ({pageTitle}) => {

    return ( 
        <div className='header'>
            <h1 className='header__text'>
                {pageTitle}
            </h1>
        </div>
    );
}

export default Header;