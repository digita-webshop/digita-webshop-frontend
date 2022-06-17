import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ListItem = styled("li")({
  listStyle: "none",
  padding: 0,
  margin: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F6F6F6",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  fontFamily: "jost",
  color: "#333333",
  transition: "all 150ms ease-in",
  "&:hover": {
    backgroundColor: "#f03637",
    color: "white",
  },
  "&.active": {
    backgroundColor: "#f03637",
    color: "white",
  },
});

type PaginationProps = {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  setCurrentPage: any;
};

function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <Box marginTop={4}>
      <List>
        <ListItem
          onClick={() => setCurrentPage(currentPage - 1)}
          sx={{ display: currentPage === 1 ? "none" : "flex" }}
        >
          <ChevronLeft />
        </ListItem>

        {pageNumber.map((number, index) => (
          <ListItem
            key={index}
            onClick={() => paginate(number)}
            className={`${number === currentPage && "active"}`}
          >
            {number}
          </ListItem>
        ))}

        <ListItem
          onClick={() => setCurrentPage(currentPage + 1)}
          sx={{ display: currentPage === pageNumber.length ? "none" : "flex" }}
        >
          <ChevronRight />
        </ListItem>
      </List>
    </Box>
  );
}

export default Pagination;
