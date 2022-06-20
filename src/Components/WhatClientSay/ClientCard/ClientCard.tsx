import {Box} from "@mui/material";
import React from "react";
import {ReusableTypography} from "../../../Styles/WhatClientSay";
import ClientAvatar from "../ClientAvatar/ClientAvatar";
import {ItemType} from "./Types/Item";

type Props = {
    item: ItemType
}

function ClientCard({item}: Props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            color: 'white',
            position: 'relative',
            width: '100%',
        }}>
            <ReusableTypography
                fontWeight="400"
                smallSizeFontSize="17px"
                mediumSizeFontSize="24px"
                component="p"
                sx={{
                    fontSize: 32,
                    textAlign: "center",
                }}
            >
                {item.text}
            </ReusableTypography>

            <Box sx={{display: "grid", placeItems: "center"}}>
                <ClientAvatar user={item.user}/>
            </Box>
        </Box>
    );
}

export default ClientCard;
