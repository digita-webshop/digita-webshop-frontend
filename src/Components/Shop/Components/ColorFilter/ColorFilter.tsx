import { Box, List, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { filterColors } from "../../data";
import { FilterTitleWrapper } from "../../styles";
import ColorFilterCard from "./ColorFilterCard/ColorFilterCard";

interface Props {
  drawer: boolean;
  addQueryParams: (filter: string, name: string) => () => void;
}
function ColorFilter({ drawer, addQueryParams }: Props) {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Box
      sx={{
        padding: "20px",
        border: drawer ? "1px solid #e9e9e9" : "",
        marginTop: drawer ? "40px" : "20px",
      }}
    >
      <FilterTitleWrapper className={`${drawer && "underline"}`}>
        <Typography
          component={"h4"}
          variant="body1"
          color="primary"
          fontWeight={600}
        >
          COLOR
        </Typography>
      </FilterTitleWrapper>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: drawer ? "background.paper" : "#f7f7f7",
          marginTop: "6px",
          marginLeft: "12px",
        }}
      >
        {filterColors.map(({ id, color }) => {
          const labelId = `checkbox-list-label-${id}`;
          let colorQueryParams = searchParams.get("color");
          let isChecked = colorQueryParams?.includes(color);

          return (
            <ColorFilterCard
              key={id}
              isChecked={!!isChecked}
              labelId={labelId}
              color={color}
              addQueryParams={addQueryParams}
              drawer={drawer}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default ColorFilter;
