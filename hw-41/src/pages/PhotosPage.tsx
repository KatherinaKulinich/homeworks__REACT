import { Layout, Breadcrumb, Col, Row, Result } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import React from "react";
import PhotoCard from "../components/PhotoCard";
import { headerStyle, contentStyle } from "./UsersPage";
import { Image } from 'antd';
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectChosenAlbum, selectError, selectPhotos } from "../rdx/albums/albums-reducer";
import { Link, useParams } from "react-router-dom";
import { selectChosenUser } from "../rdx/users/users-reducer";
import { fetchPhotos } from "../rdx/albums/albums-thunks";





const PhotosPage:React.FC = () => {

    const {name : userName} = useAppSelector(selectChosenUser)
    const photos = useAppSelector(selectPhotos)
    const {title: albumTitle} = useAppSelector(selectChosenAlbum)
    const {userId} = useParams()
    const {albumId} = useParams()
    const errorMessagePhotos = useAppSelector(selectError);

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchPhotos(albumId))
    }, [dispatch, albumId])


    return (  
        <Layout>
            <Header style={headerStyle}>
                Photos
            </Header>

            <Content style={contentStyle}>
                
                <Breadcrumb >
                    <Breadcrumb.Item >
                        <Link to={"/"}>
                            Users
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {userName}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/users/${userId}/albums`}>
                            Albums
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {albumTitle}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Photos
                    </Breadcrumb.Item>
                </Breadcrumb>

                <Image.PreviewGroup>
                    <Row gutter={[10, 20]}>
                        {!errorMessagePhotos ? (
                            photos.map((photo: any) => (
                                <Col 
                                    xs={{ span: 24}} 
                                    sm={{ span: 12}} 
                                    lg={{ span: 6}} 
                                    key={photo.id}
                                >
                                    <PhotoCard 
                                        photoSrc={photo.url} 
                                        photoTitle={photo.title} 
                                        photoAlt={photo.title} 
                                    />
                                </Col>
                            ))
                        ) : (
                                <Result
                                    status="warning"
                                    title={errorMessagePhotos} 
                                    />
                            )
                        }
                    </Row>
                </Image.PreviewGroup>

            </Content>
        </Layout>
    );
}
 
export default PhotosPage;