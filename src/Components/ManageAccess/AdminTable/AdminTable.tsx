import { Close } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { POutlinedButton, PTextField } from "../../../Styles/panelCommon";
import { TCheckBox } from "../../../Styles/Reviews";

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
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => () => {
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
      let allChecked = dummyAdmins.map((admin) => admin.id);
      setChecked(allChecked);
    } else {
      setChecked([]);
    }
  };
  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexBasis: { xs: "100%", sm: "60%" },
          }}
        >
          <TCheckBox onChange={handleToggleAll} />
          <Typography sx={{ color: "#ADB5BD", textTransform: "capitalize" }}>
            select all
          </Typography>
        </Box>
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "40%" },
            marginLeft: "auto",
            display: { xs: "none", sm: "block" },
          }}
        >
          <PTextField placeholder="Search... " />
        </Box>
      </Box>
      <Divider sx={{ marginY: "10px" }} />
      <Box>
        {dummyAdmins.map(({ id, name, lastName, username, image }) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              padding: "10px 0",
              borderBottom: "1px solid #cfdbe6",
            }}
          >
            <Box display={"flex"}>
              <TCheckBox
                sx={{ margin: "auto" }}
                onChange={handleToggle(id)}
                checked={checked.indexOf(id) !== -1}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
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
                  sx={{ fontWeight: 600, fontSize: { xs: "15px", sm: "16px" } }}
                >{`${name} ${lastName}`}</Typography>
                <Typography sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
                  {username}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              <POutlinedButton
                variant="contained"
                sx={{
                  width: "unset",
                  padding: { xs: "2px", sm: "0 6px" },
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                <Close fontSize={"small"} />
                remove
              </POutlinedButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AdminTable;
