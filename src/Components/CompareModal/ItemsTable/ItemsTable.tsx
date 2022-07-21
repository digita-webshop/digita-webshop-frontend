import { Close } from "@mui/icons-material";
import { Box, Table, TableBody, TableRow } from "@mui/material";
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
  let widthClass = `w-${productData.length + 1}`;

  return (
    <Table>
      <TableBody sx={compareTableStyles} className={widthClass}>
        <TableRow>
          <CTHCell className="td"></CTHCell>
          {productData.map((product) => (
            <CTCell>
              <Box sx={tableRemoveBtnStyles}>
                Remove
                <Close />
              </Box>
            </CTCell>
          ))}
        </TableRow>
        <TableRow>
          <CTHCell></CTHCell>
          {productData.map((product) => (
            <CTCell>
              <Box sx={tableImageStyles}>
                <img src={product.image} alt={product.color} />
              </Box>
            </CTCell>
          ))}
        </TableRow>
        {compareIndexes.map(({ key, value }) => {
          return (
            <TableRow>
              <CTHCell>{key}</CTHCell>

              {productData.map((product) => (
                <CTCell className={value === "price" ? "bold" : ""}>
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
