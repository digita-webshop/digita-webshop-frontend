import { Box } from "@mui/material";
import { PaginationList, PaginationListItem } from "../PanelProducts/styles";

type PaginationProps = {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  setCurrentPage: any;
};

function PanelPagination({ productsPerPage, totalProducts, currentPage, setCurrentPage }: PaginationProps) {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <Box marginTop={4} sx={{ display: totalProducts <= productsPerPage ? "none" : "block" }}>
      <PaginationList>
        <PaginationListItem
          onClick={() => setCurrentPage(currentPage - 1)}
          sx={{
            display: currentPage === 1 ? "none" : "flex",
            width: "auto !important",
            padding: "0 0.7rem",
            borderRadius: "5px 0 0 5px",
          }}
        >
          Previous
        </PaginationListItem>

        {pageNumber.map((number, index) => (
          <PaginationListItem
            key={index}
            onClick={() => setCurrentPage(number)}
            className={`${number === currentPage && "active"}`}
          >
            {number}
          </PaginationListItem>
        ))}

        <PaginationListItem
          onClick={() => setCurrentPage(currentPage + 1)}
          sx={{
            display: currentPage === pageNumber.length ? "none" : "flex",
            width: "auto !important",
            padding: "0 0.7rem",
            borderRadius: "0 5px 5px 0",
          }}
        >
          Next
        </PaginationListItem>
      </PaginationList>
    </Box>
  );
}

export default PanelPagination;
