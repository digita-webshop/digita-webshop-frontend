import { Fragment, useEffect, useState } from "react";
import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import avatar from "../../../../../../Assets/Images/Product/avatar.png";
import { getReadableDate } from "../../../../../../Services/Utils/getReadableDate";
import { useGetUserMutation } from "../../../../../../features/user/userApi";
import { useLocation } from "react-router-dom";

interface Props {
  id: string;
  userId: string;
  rating: number;
  description: string;
  createdAt: string;
}

function Review({ id, userId, rating, description, createdAt }: Props) {
  const [user, setUser] = useState<any>();
  const { pathname } = useLocation();

  const readableDate = getReadableDate(createdAt);
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser(userId).unwrap();
        setUser(res.data);
      } catch (err: any) {
        if (err.status === 404) {
          setUser({ userName: "deleted account" });
        }
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <Fragment>
      <Box sx={{ display: "flex", gap: "15px" }} my={2} id={`review-${id}`}>
        <Box>
          <Avatar
            alt="avatar"
            src={user?.image || avatar}
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
              <span className="userName">{user?.userName} </span>
              <time> {`– ${readableDate}`}</time>
            </Typography>
            {pathname.includes("product") && (
              <Rating
                name="read-only"
                defaultValue={rating}
                size="small"
                readOnly
              />
            )}
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
    </Fragment>
  );
}

export default Review;
