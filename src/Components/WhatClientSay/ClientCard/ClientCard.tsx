import { Box } from "@mui/material";
import React from "react";
import { ReusableTypography } from "../../../Styles/WhatClientSay";
import ClientAvatar from "../ClientAvatar/ClientAvatar";

import iconTitle from "../../../Assets/Images/WhatClientSayAssets/icon-title.png";
import profileImg from "../../../Assets/Images/WhatClientSayAssets/testimonial-2.png";

function ClientCard(props: any) {
  return (
    <>
      <ReusableTypography
        fontWeight="400"
        smallSizeFontSize="17px"
        mediumSizeFontSize="24px"
        component="p"
        sx={{
          fontSize: 32,
          textAlign: "center",
        }}
      >
        “Excepteur sin occaecat cupidatat proident. It’s sunt in culpa qui
        officia deserunt mollit anim id est consectetur adipiscing eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut culpa qui officia
        deserunt mollit enim ad minim veniam”
      </ReusableTypography>

      <Box sx={{ display: "grid", placeItems: "center" }}>
        <ClientAvatar
          username="naomi hamilton"
          role="customer"
          rate={5}
          profileImg={profileImg}
        />
      </Box>
    </>
  );
}

export default ClientCard;
