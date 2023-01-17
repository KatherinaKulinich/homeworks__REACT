import React from 'react';
import ReactDOM from 'react-dom';
import '../PhotoCard/PhotoCard.css'



interface Photo {
    imagePath: string
    imageText: string
}



function PhotoCard({imagePath, imageText}:Photo) {
    return ( 
        <div className='card-photo'>
            <img 
                src={imagePath} 
                width='100px' 
                height='100px'
                className='card__image'
            />
            <p className='card__title'>
                {imageText}
            </p>
        </div>
    );
}

export default PhotoCard