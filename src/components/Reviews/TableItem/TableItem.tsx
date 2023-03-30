import { TableRow, Rating } from "@mui/material";
import { Delete, Star } from "@mui/icons-material";
import { TableButton } from "components/Orders/styles";
import { TCell, TCheckBox } from "../styles";
import { IReviews } from "types/product";
import { getReadableDate } from "utils/getReadableDate";
import { useNavigate } from "react-router-dom";

interface Props {
  review: IReviews;
  handleToggle: (rid: any, id: string) => () => void;
  handleDelete: (id: string, uid: string) => void;
  matches: boolean;
  matchesSm: boolean;
  isArticlePage: boolean;
  checked: any[];
}
function TableItem({ review, handleToggle, handleDelete, matches, matchesSm, checked, isArticlePage }: Props) {
  const data = isArticlePage ? review?.articleId : review?.productId;
  const user = review.userId;
  const readableDate = getReadableDate(review?.createdAt!);
  const navigate = useNavigate();

  const reviewClickHandler = () => {
    navigate({
      pathname: `/${isArticlePage ? "article" : "product"}/${data._id}`,
      hash: `review-${review._id}`,
      search: isArticlePage ? "" : "tab=reviews",
    });
  };
  const deleteClickHandler = (event: any) => {
    event.stopPropagation();
    handleDelete(data?._id, review?._id!);
  };
  return (
    <TableRow
      sx={{
        cursor: "pointer",
        "&:hover": { bgcolor: "common.panelActiveRed" },
      }}
      onClick={reviewClickHandler}
    >
      <TCell>
        <TCheckBox
          onClick={(e) => e.stopPropagation()}
          onChange={handleToggle(review._id!, data._id)}
          checked={checked.findIndex((item) => item.rid === review._id!) !== -1}
        />
      </TCell>
      <TCell>{data._id.slice(0, 3)}</TCell>
      <TCell
        sx={{
          fontWeight: 500,
          wordBreak: "break-word",
        }}
      >
        {data?.title}
      </TCell>
      <TCell sx={{ wordBreak: "break-all" }}>{user ? user?.userName : "deleted account"}</TCell>
      {!matchesSm && !isArticlePage && (
        <TCell>
          <Rating
            name="text-feedback"
            size="small"
            value={review.rating}
            readOnly
            precision={0.5}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
        </TCell>
      )}
      <TCell>{readableDate}</TCell>
      {!matches && (
        <TCell
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            gap: "4px",
            flexWrap: "wrap",
          }}
        >
          <TableButton
            sx={{
              display: "flex",
              justifyContent: "center",
              "&:hover": {
                borderColor: "common.digitaRed",
                svg: { color: "common.digitaRed" },
              },
            }}
            onClick={deleteClickHandler}
          >
            <Delete sx={{ color: "common.panelGrey" }} />
          </TableButton>
        </TCell>
      )}
    </TableRow>
  );
}

export default TableItem;
