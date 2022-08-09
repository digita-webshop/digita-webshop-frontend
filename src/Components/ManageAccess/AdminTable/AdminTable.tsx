import { Close } from "@mui/icons-material";
import {
  Box,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { THCell } from "../../../Styles/Orders";
import { POutlinedButton, PTextField } from "../../../Styles/panelCommon";
import { TCell, TCheckBox } from "../../../Styles/Reviews";

const dummyAdmins = [
  {
    id: "1",
    name: "amirhossein",
    lastName: "malekian",
    username: "amir",
    image: "https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg",
  },
  {
    id: "2",
    name: "monire",
    lastName: "aghayi",
    username: "monire",
    image: "https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg",
  },
  {
    id: "3",
    name: "siavash",
    lastName: "khani",
    username: "siavash",
    image: "https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg",
  },
];
function AdminTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <THCell colSpan={7}>
            <TCheckBox sx={{ marginRight: "10px" }} />
            select all
          </THCell>
          <THCell colSpan={1} align={"right"}>
            <Box sx={{ width: { xs: "100%", md: "80%" }, marginLeft: "auto" }}>
              <PTextField placeholder="Search... " />
            </Box>
          </THCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dummyAdmins.map(({ id, name, lastName, username, image }) => (
          <TableRow key={id}>
            <TCell colSpan={7}>
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <TCheckBox />
                <Box
                  sx={{
                    img: {
                      width: "40px",
                      borderRadius: "50%",
                      border: "2px solid #eee",
                    },
                  }}
                >
                  <img src={image} alt="admin" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontWeight: 600 }}
                  >{`${name} ${lastName}`}</Typography>
                  <Typography sx={{ fontSize: "15px" }}>{username}</Typography>
                </Box>
              </Box>
            </TCell>
            <TCell align="right">
              <POutlinedButton
                variant="contained"
                sx={{ width: "25%", padding: "0px", fontSize: "14px" }}
              >
                <Close fontSize={"small"} />
                remove
              </POutlinedButton>
            </TCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AdminTable;
