import React from "react";
import { Breadcrumb, Button, Col, Layout, Result, Row, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link, useParams } from "react-router-dom";
import { Header, Content } from "antd/es/layout/layout";
import { headerStyle, contentStyle } from "./UsersPage";
import { MdImageSearch } from "react-icons/Md";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectChosenUser } from "../rdx/users/users-reducer";
import { chooseAlbum, getError } from "../rdx/albums/albums-actions";
import { selectAlbums, selectError } from "../rdx/albums/albums-reducer";
import { fetchAlbums } from "../rdx/albums/albums-thunks";
import { IconContext } from "react-icons";
import { buttonStyles } from "../components/UserCard";


interface DataType {
  id: number;
  title: string;
  userId: number
}





const AlbumsPage: React.FC = () => {

    const {name: userName} = useAppSelector(selectChosenUser)
    const albums = useAppSelector(selectAlbums)
    const dispatch = useAppDispatch()
    const {userId} = useParams()
    const errorMessageAlbums = useAppSelector(selectError)
    
    React.useEffect(() => {
        dispatch(fetchAlbums(userId))
    }, [dispatch, userId])

    const columns: ColumnsType<DataType> = [
        {
            title: "Album title",
            dataIndex: 'title',
        },
        {
            title: "Album photos",
            render: (_, {id, userId}) =>  (
                    <Tooltip title="go to album's photos"> 
                        <Link to={`/users/${userId}/albums/${id}/photos`}>
                            <Button 
                            type="primary" 
                            shape="default" 
                            style={buttonStyles}
                            icon={
                                <IconContext.Provider value={{ size: "30" }}>
                                    <MdImageSearch />
                                </IconContext.Provider>
                            }
                            onClick={() => dispatch(chooseAlbum(id))}
                        />
                        </Link>
                    </Tooltip>) ,
            width: '150px',
        }
    ];

    
    return (  
        <Layout>
            <Header style={headerStyle}>
                Albums
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
                        Albums
                    </Breadcrumb.Item>
                </Breadcrumb>

                { !errorMessageAlbums ? (
                    <Table 
                        columns={columns} 
                        dataSource={albums} 
                        pagination={false} 
                        rowKey={(data) => data.id}
                        style={{width: '100%', maxWidth: '900px'}}
                    />
                ) : (
                        <Result
                            status="warning"
                            title={errorMessageAlbums} 
                        />
                    )
                }
                
            </Content>
        </Layout>

    );
}
 
export default AlbumsPage;


