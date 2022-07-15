import {Paper, Table, TableCell, TableContainer, Typography, TableRow, Box} from "@mui/material";
import React from "react";
import {StyledTableCell, TotalTextStyle} from "../../../../Styles/Cart";
import DynamicButton from "../../DynamicButton/DynamicButton";
import {styled} from "@mui/material/styles";

type Props = {
    total: number
}

const CartTotalTable = ({total}: Props) => {

    const CustomTableContainer = styled(Box)(({theme}) => ({
        width:'56%',
        marginLeft: '30px',
        height: 'max-content',
        border: '1px solid #ebebeb',
        [theme.breakpoints.down('lg')]: {
            width:'100%',
            margin: '0 0 44px ',
        },
    }));

    return <CustomTableContainer component={Paper}>
        <Typography sx={{
            padding: '0.7em 0',
            fontSize: '1.077em',
            fontWeight: 600,
            textAlign: 'center',
            lineHeight: 1.4,
            borderBottom: '1px solid #ebebeb',
            width: '100%'
        }}>Cart totals</Typography>
        <Box sx={{width: '100%', padding: '0 20px 20px', boxSizing: ' border-box'}}>
            <Table sx={{border: '0', margin: '20px 0 20px'}}>
                <TableRow>
                    <StyledTableCell variant="head">Subtotal</StyledTableCell>
                    <TableCell sx={{
                        borderLeft: '1px solid #ebebeb',
                        borderColor: '#ebebeb',
                        color: '#f03637',
                    }}>${total.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                    <StyledTableCell sx={{lineHeight: '1.5em'}} variant="head">Total</StyledTableCell>
                    <TableCell sx={{borderLeft: '1px solid #ebebeb', borderColor: '#ebebeb'}}>
                        <Typography sx={Object.assign({...TotalTextStyle}, {
                            fontWeight: 600, color: '#f03637'
                        })}>
                            ${total.toFixed(2)}
                        </Typography>
                    </TableCell>
                </TableRow>
            </Table>
            <DynamicButton classes={{padding: '14px 20px'}} title={'Proceed to checkout'}/>
        </Box>
    </CustomTableContainer>
}

export default CartTotalTable;