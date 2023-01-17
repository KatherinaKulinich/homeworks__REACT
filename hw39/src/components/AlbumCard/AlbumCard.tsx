import React from 'react';
import ReactDOM from 'react-dom';
import '../AlbumCard/AlbumCard.css'
import ButtonLink from '../ButtonLink/ButtonLink';


interface Album {
    albumTitle: string
    path: string
}




function AlbumCard({albumTitle, path}:Album) {
    return ( 
        <div className='card-album'>
            <div className='card-album__field'>
                <p className='card-album__title'>
                    Title:
                </p>
                <p className=''>
                    {albumTitle}
                </p>
            </div>
            <ButtonLink 
                linkPath={path} 
                linkText={'See all photos'}
            />
        </div>
    );
}

export default AlbumCard