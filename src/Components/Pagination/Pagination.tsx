import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import { PaginationList, PaginationListItem } from "../../Styles/Pagination";

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
      <PaginationList>
        <PaginationListItem
          onClick={() => setCurrentPage(currentPage - 1)}
          sx={{ display: currentPage === 1 ? "none" : "flex" }}
        >
          <ChevronLeft />
        </PaginationListItem>

        {pageNumber.map((number, index) => (
          <PaginationListItem
            key={index}
            onClick={() => paginate(number)}
            className={`${number === currentPage && "active"}`}
          >
            {number}
          </PaginationListItem>
        ))}

        <PaginationListItem
          onClick={() => setCurrentPage(currentPage + 1)}
          sx={{ display: currentPage === pageNumber.length ? "none" : "flex" }}
        >
          <ChevronRight />
        </PaginationListItem>
      </PaginationList>
    </Box>
  );
}

export default Pagination;
