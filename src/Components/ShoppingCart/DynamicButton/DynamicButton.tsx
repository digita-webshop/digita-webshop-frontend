import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import Link from '@mui/material/Link';

export const LinkBtn = styled(Link)(({theme}) => ({
    background: '#333333',
    color: 'white',
    textTransform: 'uppercase',
    padding: '14px 20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
        background: '#f03637',
    }
}));

type Props = {
    icon?: boolean;
    title: string;
    href?: string;
    disabled?: boolean;
    action?: (() => void) | undefined;
    classes?: {
        padding?: string,
        background?: string
    };
}

const styles = {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: 1,
}

const DynamicButton = ({icon, title, href, disabled, action, classes}: Props) => {

    const BoxBtn = styled(Box)(({theme}) => ({
        background: `${classes ? classes.background : '#333333'}`,
        color: 'white',
        width: '100%',
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        padding: `${classes ? classes.padding : '12px 20px'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: `${disabled ? '0.5 !important' : '1'}`,
        cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
        '&:hover': {
            background: `${disabled ? '' : '#f03637'}`,
        }
    }));

    return (
        <>
            {href ? <LinkBtn href={href}>
                    {icon && <ArrowBackIosNewIcon sx={{fontSize: '0.5rem', marginRight: '8px'}}/>}
                    <Typography
                        sx={Object.assign({...styles}, {letterSpacing: '0.1em'})}>{title}</Typography>
                </LinkBtn> :
                <BoxBtn onClick={action} classes={{classes}}>
                    {icon && <ArrowBackIosNewIcon sx={{fontSize: '0.5rem', marginRight: '8px'}}/>}
                    <Typography
                        sx={styles}>{title}</Typography>
                </BoxBtn>}
        </>
    );
};

export default DynamicButton;