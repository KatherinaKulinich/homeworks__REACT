import React from "react";
import { useParams } from "react-router-dom";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Header from "../../components/Header/Header";
import '../AlbumsPage/AlbumsPage.css'



interface AlbumItem {
    userId: number
    id: number
    title: string
}




const AlbumsPage: React.FC = () => {
    const [albums, setAlbums] = React.useState<AlbumItem[]>([]);
    const {userId} = useParams()

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(data => {
            setAlbums(data)
        })
        .catch(error => console.warn(error))
    }, [userId])


    return (  
        <div className="wrapper">
            <Header 
                pageTitle={"Albums"} 
            />
            <main className="section album-page">
                < ButtonLink 
                    linkPath={'/'} 
                    linkText={'Back to users'}
                />
                <div className="album-section">
                    {
                        albums.map((album: AlbumItem) => (

                            <div key={album.id}>
                                <AlbumCard 
                                    albumTitle={album.title}
                                    path={`/users/${album.userId}/albums/${album.id}/photos`}                                
                                />
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default AlbumsPage;