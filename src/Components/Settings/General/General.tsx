import { FormEvent, ChangeEvent, useState, useRef } from "react";
import { CloudUpload } from "@mui/icons-material";
import {
  CircularProgress,
  Box,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import {
  PButton,
  PFormLabel,
  POutlinedButton,
  PStack,
  PTextField,
} from "../../../styles/panel";
import { IUser } from "../../../types/user";
import { errorMessage, successMessage } from "../../../utils/toastMessages";
import { useUpdateUserMutation } from "../../../redux/user/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/auth/authSlice";
import { uploadImage } from "../../../utils/uploadImage";

interface Props {
  user: IUser;
}

function General({ user }: Props) {
  const [enteredUserName, setEnteredUserName] = useState(user?.userName ?? "");
  const [enteredEmail, setEnteredEmail] = useState(user?.email ?? "");
  const [enteredPhone, setEnteredPhone] = useState(user?.phone ?? "");
  const [uploadedImage, setUploadedImage] = useState(user?.image ?? "");
  const [imgLoading, setImgLoading] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const ImageRef = useRef<HTMLInputElement>(null);

  const uploadImageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files![0];
    try {
      setImgLoading(true);
      const data = await uploadImage(file);
      setUploadedImage(data?.url);
      setImgLoading(false);
    } catch (err) {
      errorMessage("image upload failed");
      setImgLoading(false);
      console.log(err);
    }
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const newUser: any = {
      userName: enteredUserName,
      email: enteredEmail,
      image: uploadedImage ?? "",
    };
    if (enteredPhone && enteredPhone.length >= 10) {
      newUser.phone = enteredPhone;
    }
    if (enteredPhone && enteredPhone.length < 10) {
      setPhoneErrorMessage("your phone must contain at least 10 numbers");
      return;
    }

    try {
      await updateUser({
        user: newUser,
        id: user._id!,
        path: user.role!,
      }).unwrap();
      dispatch(
        setCredentials({
          user: { ...user, ...newUser },
          role: user.role!,
          email: null,
        })
      );
      successMessage("user information updated successfully");
      setPhoneErrorMessage("");
    } catch (err) {
      console.log(err);
      errorMessage("could not update user information");
      setPhoneErrorMessage("");
    }
  };
  return (
    <Grid container spacing={3} component={"form"} onSubmit={submitHandler}>
      <Grid
        container
        item
        xs={12}
        md={8}
        spacing={3}
        sx={{ zIndex: "1 !important" }}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>username</PFormLabel>
            <PTextField
              value={enteredUserName}
              onChange={(e) => setEnteredUserName(e.target.value)}
              placeholder="Type Here"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>email</PFormLabel>
            <PTextField
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>phone</PFormLabel>
            <PTextField
              value={enteredPhone}
              onChange={(e) => setEnteredPhone(e.target.value)}
              placeholder="+1234567890"
            />
          </FormControl>
          {phoneErrorMessage && (
            <Typography
              sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
            >
              {phoneErrorMessage}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              overflow: "hidden",
              img: {
                height: "135px",
                aspectRatio: "1",
                objectFit: "cover",
                borderRadius: "50%",
              },
              input: { visibility: "hidden", position: "absolute" },
            }}
          >
            <input type={"file"} ref={ImageRef} onChange={uploadImageHandler} />
            <img
              src={
                uploadedImage ||
                "data:image/png;base64,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"
              }
              alt="profile"
            />
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            {imgLoading ? (
              <PStack sx={{ margin: "0 !important" }}>
                <CircularProgress color="error" />
              </PStack>
            ) : (
              <POutlinedButton
                variant="contained"
                onClick={() => ImageRef!.current!.click()}
              >
                <CloudUpload sx={{ marginRight: "5px" }} /> upload
              </POutlinedButton>
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <PButton variant="contained" type="submit">
          save changes
        </PButton>
      </Grid>
    </Grid>
  );
}

export default General;
