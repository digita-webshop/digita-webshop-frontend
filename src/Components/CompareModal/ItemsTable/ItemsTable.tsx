import { Close } from "@mui/icons-material";
import { Box, Table, TableBody, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCompareList } from "../../../features/compare/compareSlice";
import {
  compareTableStyles,
  CTButton,
  CTCell,
  CTHCell,
  tableImageStyles,
  tableRemoveBtnStyles,
} from "../../../Styles/Compare";

const compareIndexes = [
  { key: "name", value: "title" },
  { key: "price", value: "price" },
  { key: "add to cart", value: "add to cart" },
  { key: "description", value: "shortDescription" },
  { key: "sku", value: "sku" },
  { key: "colors", value: "colors" },
];
interface Props {
  products: any[];
}
function ItemsTable({ products }: Props) {
  const dispatch = useDispatch();
  let widthClass = `w-${products.length + 1}`;

  const removeHandler = (id: number) => () => {
    dispatch(removeFromCompareList(id));
  };
  return (
    <Table sx={{ width: products.length === 1 ? "70%" : "100%" }}>
      <TableBody sx={compareTableStyles} className={widthClass}>
        <TableRow>
          <CTHCell className="td"></CTHCell>
          {products.map((product, index) => (
            <CTCell key={index}>
              <Box
                sx={tableRemoveBtnStyles}
                onClick={removeHandler(product._id)}
              >
                Remove
                <Close />
              </Box>
            </CTCell>
          ))}
        </TableRow>
        <TableRow>
          <CTHCell></CTHCell>
          {products.map((product, index) => (
            <CTCell key={index}>
              <Box sx={tableImageStyles}>
                <img src={product.image} alt={product.title} />
              </Box>
            </CTCell>
          ))}
        </TableRow>
        {compareIndexes.map(({ key, value }, index) => {
          return (
            <TableRow key={index}>
              <CTHCell>{key}</CTHCell>

              {products.map((product, index) => (
                <CTCell key={index} className={value === "price" ? "bold" : ""}>
                  {key === "add to cart" && (
                    <CTButton variant="contained">{value}</CTButton>
                  )}

                  {product[value]}
                </CTCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default ItemsTable;
