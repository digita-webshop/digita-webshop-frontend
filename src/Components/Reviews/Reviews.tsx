import {
  Box,
  Grid,
  Divider,
  useMediaQuery,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  Typography,
  TableHead,
  TableRow,
  Rating,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, ChangeEvent, useEffect } from "react";
import {
  CardWrapper,
  POutlinedButton,
  PTitle,
  PTextField,
  PFormControl,
} from "../../Styles/panelCommon";
import { reviews } from "../../Services/Data/data";
import { TableButton } from "../../Styles/Orders";
import { TCell, TCheckBox, THCell } from "../../Styles/Reviews";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PanelPagination from "../PanelPagination/PanelPagination";
import { paginationStyle } from "../../Styles/PanelProducts";
import { useLocation } from "react-router-dom";

interface IReviews {
  id: number;
  pId: number;
  product: string;
  name: string;
  rating: number;
  date: string;
}
const Reviews = () => {
  const [list, setList] = useState<IReviews[]>([]);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState<number[]>([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  const { pathname } = useLocation();
  const isArticlePage = pathname.includes("articles");

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleToggleAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      let allChecked = list?.map((item) => item.id);
      setChecked(allChecked);
    } else {
      setChecked([]);
    }
  };

  const headerDelete = () => {
    const newList = list.filter((item) => !checked.includes(item.id));
    setList(newList);
  };

  const handleDelete = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    const filteredData = reviews.filter((item: any) =>
      item.product.toLowerCase().includes(data.toLowerCase())
    );
    setList(filteredData);
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

  useEffect(() => {
    if (isArticlePage) {
      //? fetch article reviews
      setList(reviews);
    } else {
      //? fetch product reviews
      setList(reviews);
    }
  }, [isArticlePage]);
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
        <CardWrapper
          sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "40%", lg: "30%" } }}>
              <PTextField placeholder="Search... " onChange={handleSearch} />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "35%", lg: "25%" },
                display: "flex",
                gap: "10px",
              }}
            >
              <PFormControl size="small">
                <Select
                  variant="outlined"
                  displayEmpty
                  value={`${reviewsPerPage}`}
                  onChange={selectedAmountHandler}
                >
                  <MenuItem value="10">Show 10</MenuItem>
                  <MenuItem value={"20"}>Show 20 </MenuItem>
                  <MenuItem value={"30"}>Show 30</MenuItem>
                </Select>
              </PFormControl>
            </Box>
          </Box>
          <Divider
            sx={{ borderColor: "common.panelBorderGrey", opacity: ".1" }}
          />
        </CardWrapper>
        <CardWrapper>
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
              {list
                .slice(indexOfFirstReview, indexOfLastReview)
                .map(({ id, pId, product, name, rating, date }) => (
                  <TableRow
                    key={id}
                    sx={{ "&:hover": { bgcolor: "common.panelActiveRed" } }}
                  >
                    <TCell>
                      <TCheckBox
                        onChange={handleToggle(id)}
                        checked={checked.indexOf(id) !== -1}
                      />
                    </TCell>
                    <TCell>{pId}</TCell>
                    <TCell
                      sx={{
                        fontWeight: 500,
                        wordBreak: "break-word",
                      }}
                    >
                      {product}
                    </TCell>
                    <TCell sx={{ wordBreak: "break-all" }}>{name}</TCell>

                    {!matchesSm && !isArticlePage && (
                      <TCell>
                        <Rating
                          name="text-feedback"
                          size="small"
                          value={rating}
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </TCell>
                    )}
                    <TCell>{date}</TCell>
                    {!matches && (
                      <TCell
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          justifyContent: "center",
                          gap: "4px",
                          flexWrap: "wrap",
                        }}
                      >
                        <TableButton>Detail</TableButton>
                        <TableButton
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            "&:hover": {
                              borderColor: "common.digitaRed",
                              svg: { color: "common.digitaRed" },
                            },
                          }}
                          onClick={() => handleDelete(id)}
                        >
                          <DeleteIcon sx={{ color: "common.panelGrey" }} />
                        </TableButton>
                      </TCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {list.length === 0 && (
            <Box
              sx={{
                padding: "1.5rem 0 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Your Product Review is empty</Typography>
            </Box>
          )}
          <Box sx={paginationStyle}>
            <PanelPagination
              productsPerPage={reviewsPerPage}
              totalProducts={list.length}
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
