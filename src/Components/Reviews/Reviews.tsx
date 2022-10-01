import {
  Box,
  Grid,
  useMediaQuery,
  SelectChangeEvent,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, ChangeEvent } from "react";
import {
  CardWrapper,
  ErrorText,
  POutlinedButton,
  PTitle,
} from "../../Styles/panelCommon";
import { TCheckBox, THCell } from "../../Styles/Reviews";
import { useTheme } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PanelPagination from "../PanelPagination/PanelPagination";
import { paginationStyle } from "../../Styles/PanelProducts";
import { useLocation } from "react-router-dom";
import TableHeader from "./TableHeader/TableHeader";
import TableItem from "./TableItem/TableItem";
import {
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} from "../../features/reviews/reviewsApi";
import PanelLoading from "../Loading/PanelLoading";
import NotFound from "../EmptyList/NotFound";
import {
  errorMessage,
  successMessage,
} from "../../Services/Utils/toastMessages";
const Reviews = () => {
  const [searchValue, setSearchValue] = useState("");
  const [reviewsPerPage, setReviewsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState<any[]>([]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { pathname } = useLocation();
  const isArticlePage = pathname.includes("articles");

  let queries = `page=${currentPage}&limit=${reviewsPerPage} `;
  if (searchValue) {
    queries = `${queries} &search=${searchValue}`;
  }
  const path = isArticlePage ? "articles" : "products";
  const {
    data: reviewsData,
    isLoading,
    isError,
  } = useGetAllReviewsQuery({
    path,
    queries,
  });
  const reviews = reviewsData?.data ?? [];
  const reviewsLength = reviewsData?.total ?? 0;
  console.log(reviewsData);
  const [deleteReview] = useDeleteReviewMutation();

  const handleToggle = (rid: string, id: string) => () => {
    const currentIndex = checked.findIndex((item) => item.rid === rid);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push({ rid, id });
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleToggleAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      let allChecked = reviews?.map((item) => ({
        rid: item._id,
        id: isArticlePage ? item.articleId._id : item.productId._id,
      }));
      setChecked(allChecked);
    } else {
      setChecked([]);
    }
  };

  const handleDelete = async (id: string, rid: string) => {
    try {
      const res = await deleteReview({
        path: isArticlePage ? "articles" : "products",
        id,
        rid,
      });
      console.log(res);

      successMessage("review deleted successfully");
    } catch (err: any) {
      errorMessage("could not delete review");
      console.log(err);
    }
  };

  const headerDelete = () => {
    for (let i = 0; i < checked.length; i++) {
      handleDelete(checked[i].id, checked[i].rid);
    }
  };

  const selectedAmountHandler = (event: SelectChangeEvent) => {
    const data = event.target.value;
    setReviewsPerPage(+data);
  };
  let tableHead = [
    <TCheckBox onChange={handleToggleAll} />,
    "#ID",
    "product",
    "name",
    "rating",
    "date",
    "action",
  ];
  if (isArticlePage) {
    tableHead = tableHead.filter((item) => item !== "rating");
    tableHead.splice(2, 1, "article");
  }

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PTitle>{`${isArticlePage ? "Article" : "Product"} Reviews`}</PTitle>
          {checked.length > 0 && (
            <POutlinedButton
              sx={{
                borderRadius: "4px",
                fontSize: "15px",
                height: "46px",
              }}
              onClick={headerDelete}
            >
              <DeleteForeverIcon />
            </POutlinedButton>
          )}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TableHeader
          setSearchValue={setSearchValue}
          reviewsPerPage={reviewsPerPage}
          selectedAmountHandler={selectedAmountHandler}
        />
        <CardWrapper>
          {isLoading && <PanelLoading />}
          {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
          {reviews?.length === 0 && !isLoading && !isError && (
            <NotFound message="Reviews list is empty" />
          )}
          {reviews?.length !== 0 && !isLoading && !isError && (
            <Table>
              <TableHead>
                <TableRow>
                  {tableHead.map((item, index) => (
                    <THCell
                      key={index}
                      align="left"
                      className={`${item === "action" && "hidden"} ${
                        item === "rating" && "hiddenSm"
                      }`}
                    >
                      {item}
                    </THCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reviews?.map((review) => (
                  <TableItem
                    key={review._id!}
                    review={review}
                    matches={matches}
                    matchesSm={matchesSm}
                    isArticlePage={isArticlePage}
                    checked={checked}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                  />
                ))}
              </TableBody>
            </Table>
          )}

          <Box sx={paginationStyle}>
            <PanelPagination
              productsPerPage={reviewsPerPage}
              totalProducts={reviewsLength}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
        </CardWrapper>
      </Grid>
    </Grid>
  );
};

export default Reviews;
