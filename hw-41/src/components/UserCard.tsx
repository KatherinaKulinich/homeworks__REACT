import React from "react";
import { Button, Card, Col, Row, Space, Tooltip } from 'antd';
import { IoMdImages } from 'react-icons/Io'
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";



interface UserProps {
    userName: string,
    userPhone: string,
    userMail: string,
    userCity: string,
    userAlbumsPath: string,
    handleClick: () => void
}

export const buttonStyles: React.CSSProperties = {
    width: 50,
    height: 40
}



const UserCard: React.FC<UserProps> = ({userName, userPhone, userMail, userCity, userAlbumsPath, handleClick}) => {
    return ( 
        <Card 
            title={userName} 
            hoverable
            extra={
                    <Link to={userAlbumsPath}>
                        <Tooltip title="user's albums">
                            <Button 
                                type="primary" 
                                shape="default" 
                                style={buttonStyles}
                                icon={
                                    <IconContext.Provider value={{ size: '25'}}>
                                        <IoMdImages />
                                    </IconContext.Provider>
                                }
                                onClick={handleClick}
                            />
                        </Tooltip>
                    </Link>
                } 
            >
            <Row align={'middle'}>
                <Col span={6}>Phone:</Col>
                <Col span={18}>{userPhone}</Col>
            </Row>
            <Row>
                <Col span={6}>Mail:</Col>
                <Col span={18}>{userMail}</Col>
            </Row>
            <Row>
                <Col span={6}>City:</Col>
                <Col span={18}>{userCity}</Col>
            </Row>
        </Card> 
    );
}
 
export default UserCard;