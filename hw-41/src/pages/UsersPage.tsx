import React from "react";
import UserCard from "../components/UserCard";
import { Col, Layout, Result, Row} from 'antd';
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { chooseUser, User } from "../rdx/users/users-actions";
import { selectError } from "../rdx/albums/albums-reducer";
import { selectUsers } from "../rdx/users/users-reducer";
import { fetchUsers } from "../rdx/users/users-thunks";

const { Header, Content } = Layout;


export const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  color: '#fff',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: 30
};



const UsersPage:React.FC = () => {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();
    const errorMessage = useAppSelector(selectError)

    React.useEffect(()=> {
        dispatch(fetchUsers())
    }, [dispatch])


    return (  
        <Layout>
            <Header style={headerStyle}>
                Users
            </Header>
            <Content style={contentStyle}>
                <Row gutter={[15, 15]}>
                    { !errorMessage ? (
                         (users.map((user:User) => (
                            <Col  
                                key={user.id} 
                                xs={{ span: 24}} 
                                sm={{ span: 12}} 
                                lg={{ span: 6}} 
                            >
                                <UserCard 
                                        userName={user.name}
                                        userPhone={user.phone}
                                        userMail={user.email}
                                        userCity={user.address.city}
                                        userAlbumsPath={`/users/${user.id}/albums`}
                                        handleClick={() => dispatch(chooseUser(user.id))}                                
                                    />
                            </Col>
                        )))
                    ) : (
                            <Result
                                status="warning"
                                title={errorMessage} 
                            />
                        )
                    }
                </Row>
            </Content>
        </Layout>
    );
}
 
export default UsersPage;