import { Card, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Image } from 'antd';

interface PhotoProps {
    photoSrc: string,
    photoTitle: string,
    photoAlt: string
}

const cardStyles:React.CSSProperties  = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
}



const PhotoCard:React.FC<PhotoProps> = ({photoSrc, photoTitle, photoAlt}) => {
    return (  
        <Card
            hoverable
            style={cardStyles}
            cover={
                <Image
                    width={'100%'}
                    height={300}
                    src={photoSrc}
                    alt={photoAlt}
                />
            }
        >
            <Meta title={photoTitle} style={{width: '200px'}}/>
            <Rate />
        </Card>
    );
}
 
export default PhotoCard;