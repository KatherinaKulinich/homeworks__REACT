import React from 'react';
import ReactDOM from 'react-dom';
import '../ButtonLink/ButtonLink.css'
import { Link } from "react-router-dom";


interface ButtonLinkProps {
    linkPath: string
    linkText: string
}





const ButtonLink: React.FC<ButtonLinkProps> = ({linkPath, linkText}) => {
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