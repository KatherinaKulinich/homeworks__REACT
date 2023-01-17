import  React from 'react';
import { useParams } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import Header from '../../components/Header/Header';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import '../PhotosPage/PhotosPage.css'


interface PhotoItem {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl:string
}

const  PhotosPage: React.FC = () => {
    const [photos, setPhotos] = React.useState<PhotoItem[]>([])
    const {albumId} = useParams()
    const {userId} = useParams()

    

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(response => response.json())
        .then(data => {
            setPhotos(data)
        })
        .catch(error => {
            console.warn(error);
            
        })
    }, [albumId])

  

    return (  
        <div className='wrapper'>
            <Header pageTitle={'Photos'}/>
            <main className='section photos-page'>
                <ButtonLink 
                    linkPath={`/users/${userId}/albums`} 
                    linkText={'Back to albums'}
                />
                <div className='photos-section'>
                    {
                        photos.map((photo: PhotoItem) => (
                            <div 
                                key={photo.id} 
                                className='photo-item'
                            >
                                <PhotoCard 
                                    imagePath={photo.url} 
                                    imageText={photo.title}
                                />
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default PhotosPage;
