import { useState, useEffect } from "react";
import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import avatar from "../../../../../../Assets/Images/Product/avatar.png";
import { useGetUserMutation } from "../../../../../../features/auth/authApi";
interface Props {
  userId: string;
  rating: number;
  description: string;
}
function ReviewsList({ userId, rating, description }: Props) {
  const [username, setUsername] = useState("");
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(userId).unwrap();
        console.log(response);
        setUsername(response.data.userName);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", gap: "15px" }} my={2}>
        <Box>
          <Avatar
            alt="avatar"
            src={avatar}
            sx={{
              width: "60px",
              height: "60px",
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="p"
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              <span className="userName">{username} </span>
              <time> – September 17, 2019</time>
            </Typography>
            <Rating
              name="read-only"
              defaultValue={rating}
              size="small"
              readOnly
            />
          </Box>

          <Box sx={{ width: "100%", marginTop: "10px " }}>
            <Typography
              component="p"
              sx={{
                color: "common.digitaGrey",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ padding: "3px", width: "100%" }} />
    </>
  );
}

export default ReviewsList;
