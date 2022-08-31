import { useState, ChangeEvent } from "react";
import {
  Grid,
  SelectChangeEvent,
  Divider,
  Table,
  TableRow,
  TableHead,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import { CardWrapper, PTitle } from "../../Styles/panelCommon";
import TableHeader from "../Orders/TableHeader/TableHeader";
import ArticleTable from "./ArticleTable/ArticleTable";
import { articleReviews } from "../../Services/Utils/Data/data";
import { TCheckBox, THCell } from "../../Styles/Reviews";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ArticleReviews = () => {
  const [list, setList] = useState(articleReviews);
  const [checked, setChecked] = useState<number[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setSelectedAmount(event.target.value);
  };

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
    const newList = list.filter((item) => 
      !checked.includes(item.id)
    );
    setList(newList);
  };

  const tableHead = [
    <TCheckBox onChange={handleToggleAll} />,
    "#ID",
    "reviews",
    "name",
    "date",
    "action",
  ];
  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PTitle>Article Reviews</PTitle>
            {checked.length > 0 && (
              <Button
                sx={{
                  borderRadius: "4px",
                  fontSize: "15px",
                  height: "46px",
                  border: "1px solid #181818",
                  "&:hover": { color: "#fff", border: "none" },
                }}
                onClick={headerDelete}
              >
                <DeleteForeverIcon />
              </Button>
            )}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <CardWrapper
            sx={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
          >
            <TableHeader
              selectedStatus={selectedStatus}
              selectedAmount={selectedAmount}
              selectedStatusHandler={selectedStatusHandler}
              selectedAmountHandler={selectedAmountHandler}
            />
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
                {list.map(({ id, pId, review, name, date }) => (
                  <ArticleTable
                    id={id}
                    pId={pId}
                    review={review}
                    name={name}
                    date={date}
                    onRemove={handleRemove}
                    handleToggle={handleToggle}
                    checked={checked}
                  />
                ))}
              </TableBody>
            </Table>
          </CardWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleReviews;
