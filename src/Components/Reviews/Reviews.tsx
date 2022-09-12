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
import { useState, ChangeEvent } from "react";
import {
  CardWrapper,
  POutlinedButton,
  PTitle,
  PTextField,
  PFormControl,
} from "../../Styles/panelCommon";
import { reviews } from "../../Services/Utils/Data/data";
import { TableButton } from "../../Styles/Orders";
import { TCell, TCheckBox, THCell } from "../../Styles/Reviews";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Reviews = () => {
  const [list, setList] = useState(reviews);
  const [search, setSearch] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");
  const [checked, setChecked] = useState<number[]>([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

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
      let allChecked = list.map((item) => item.id);
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

  const handleSearch = (e: any) => {
    const data = e.target.value;
    setSearch(data);
    if (data !== "") {
      const filteredData = list.filter((item: any) => item.product.match(data));
      setList(filteredData);
    } else {
      setList(reviews);
    }
  };

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    const data = event.target.value;
    setSelectedAmount(data);
    /* const filtered = list.filter((item) => (
      
    )) */
  };

  const tableHead = [
    <TCheckBox onChange={handleToggleAll} />,
    "#ID",
    "product",
    "name",
    "rating",
    "date",
    "action",
  ];

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
          <PTitle>Reviews</PTitle>
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
              <PTextField
                placeholder="Search... "
                value={search}
                onChange={handleSearch}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", lg: "30%" },
                display: "flex",
                gap: "10px",
              }}
            >
              <PFormControl size="small">
                <Select
                  variant="outlined"
                  displayEmpty
                  value={selectedStatus}
                  onChange={selectedStatusHandler}
                >
                  <MenuItem value="status">Status</MenuItem>
                  <MenuItem value={"active"}>Active</MenuItem>
                  <MenuItem value={"disable"}>Disable </MenuItem>
                  <MenuItem value={"show-all"}>Show All </MenuItem>
                </Select>
              </PFormControl>
              <PFormControl size="small">
                <Select
                  variant="outlined"
                  displayEmpty
                  value={selectedAmount}
                  onChange={selectedAmountHandler}
                >
                  <MenuItem value="20">Show 20</MenuItem>
                  <MenuItem value={"30"}>Show 30 </MenuItem>
                  <MenuItem value={"40"}>Show 40</MenuItem>
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
                .slice(0, +selectedAmount)
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

                    {!matchesSm && (
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
                          sx={{ display: "flex", justifyContent: "center" }}
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
        </CardWrapper>
      </Grid>
    </Grid>
  );
};

export default Reviews;
