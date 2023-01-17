import React from "react";
import { useParams } from "react-router-dom";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Header from "../../components/Header/Header";
import '../AlbumsPage/AlbumsPage.css'



interface Album {
    userId: number
    id: number
    title: string
}




function AlbumsPage() {
    const [albums, setAlbums] = React.useState<Album[]>([]);
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
                        albums.map((album: Album) => (

                            <div key={album.id}>
                                <AlbumCard 
                                    albumTitle={album.title}
                                    path={`/users/${album.userId}/albums/albums/${album.id}/photos`}                                
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