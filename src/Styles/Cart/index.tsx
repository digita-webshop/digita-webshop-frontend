import {styled} from "@mui/material/styles";
import {TableCell, tableCellClasses, TableRow} from "@mui/material";

export const ImageBox = styled(TableRow)(({theme}) => ({
    "img": {
        width: 'auto',
        maxWidth: '60px'
    }
}));

export const CustomBtn = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
    width: "50px",
    cursor: "pointer",
    height: "50px",
    fontSize: "20px",
    userSelect: "none",
};

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        padding: '11.2px',
        fontWeight: 600,
        textTransform: 'uppercase',
        borderColor: '#ebebeb',
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '11.2px',
        fontSize: 14,
        borderColor: '#ebebeb',
    },
}));

export const CalculateShopping = {
    padding: '0 0 3px 0',
    borderBottom: '1px solid #333',
    fontSize: '13px',
    lineHeight: 1,
    fontWeight: 'normal',
    letterSpacing: '0.4px',
    marginTop: '13px',
    '&:hover': {
        background: 'unset',
        color: '#f03637',
        borderColor: '#f03637',
    }
}

export const TotalTextStyle = {
    fontSize: '14px',
    color: '#777',
    lineHeight: '1.5em',
    textTransform: 'capitalize'
}