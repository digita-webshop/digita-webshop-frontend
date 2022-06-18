import React from 'react';
import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import img1 from "../../../Assets/Images/ShopByCat/cate1.jpg"

type Props = {
    item: {
        id: number,
        name: string,
        img: string
    }
};

const SliderCard = ({item}: Props) => {


    const Card = styled(Box)(({theme}) => ({
        width: '270px',
        position: 'relative',
        img: {
            maxWidth: '100%',
            height: 'auto'
        }
    }));
    return (
        <Card>
            <img src={item.img}/>
            <Typography sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '14px',
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>{item.name}</Typography>
        </Card>
    );
};

export default SliderCard;