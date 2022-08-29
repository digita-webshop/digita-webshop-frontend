import { useState } from "react";
import {
  Grid,
  SelectChangeEvent,
  Divider,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import ContentHeader from "./ContentHeader/ContentHeader";
import { CardWrapper } from "../../Styles/panelCommon";
import TableHeader from "../Orders/TableHeader/TableHeader";
import ArticleTable from "./ArticleTable/ArticleTable";
import { articleReviews } from "../../Services/Utils/Data/data";
import { TCheckBox, THCell } from "../../Styles/Reviews";

const tableHead = [<TCheckBox />, "#ID", "reviews", "name", "date", "action"];

const ArticleReviews = () => {
  const [list, setList] = useState(articleReviews);
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedAmount, setSelectedAmount] = useState("20");

  const selectedStatusHandler = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };
  const selectedAmountHandler = (event: SelectChangeEvent) => {
    setSelectedAmount(event.target.value);
  };

  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <ContentHeader />
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
