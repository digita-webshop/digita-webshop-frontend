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
  { key: "description", value: "description" },
  { key: "sku", value: "sku" },
  { key: "color", value: "color" },
];
interface Props {
  productData: any[];
}
function ItemsTable({ productData }: Props) {
  const dispatch = useDispatch();
  let widthClass = `w-${productData.length + 1}`;

  const removeHandler = (id: number) => () => {
    dispatch(removeFromCompareList(id));
  };
  return (
    <Table>
      <TableBody sx={compareTableStyles} className={widthClass}>
        <TableRow>
          <CTHCell className="td"></CTHCell>
          {productData.map((product, index) => (
            <CTCell key={index}>
              <Box
                sx={tableRemoveBtnStyles}
                onClick={removeHandler(product.id)}
              >
                Remove
                <Close />
              </Box>
            </CTCell>
          ))}
        </TableRow>
        <TableRow>
          <CTHCell></CTHCell>
          {productData.map((product, index) => (
            <CTCell key={index}>
              <Box sx={tableImageStyles}>
                <img src={product.image} alt={product.color} />
              </Box>
            </CTCell>
          ))}
        </TableRow>
        {compareIndexes.map(({ key, value }, index) => {
          return (
            <TableRow key={index}>
              <CTHCell>{key}</CTHCell>

              {productData.map((product, index) => (
                <CTCell key={index} className={value === "price" ? "bold" : ""}>
                  {key === "add to cart" && (
                    <CTButton variant="contained">{value}</CTButton>
                  )}

                  {product[key]}
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
