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