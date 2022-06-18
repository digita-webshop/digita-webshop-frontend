import React from 'react';
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import Item from "./Types/Item";
import {Name} from './Styles'

type Props = {
    item: Item
};

const SliderCard = ({item}: Props) => {

    const Card = styled(Box)(({theme}) => ({
        width: '100%',
        position: 'relative',
        img: {
            maxWidth: '100%',
            height: 'auto'
        }
    }));
    return (
        <Card>
            <img src={item.img}/>
            <Name>{item.name}</Name>
        </Card>
    );
};

export default SliderCard;