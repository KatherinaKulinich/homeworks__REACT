import React from 'react';
import ReactDOM from 'react-dom';
import '../ButtonLink/ButtonLink.css'
import { Link } from "react-router-dom";


interface ButtonLinkProps {
    linkPath: string
    linkText: string
}





function ButtonLink({linkPath, linkText}:ButtonLinkProps) {
    return ( 
        <Link 
            to={linkPath} 
            className='button-link'
        >
            {linkText}
        </Link>
    );
}

export default ButtonLink