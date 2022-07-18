import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import * as React from 'react';
import {  ProductContentStyle ,
  ProductTextStyle,
  SubmitButton,reviewsRating
} from "../../../../../Styles/Product";
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import { useInput } from '@mui/base';

import {Typography,Grid ,Box,Checkbox ,Rating,Avatar,Divider,Button} from '@mui/material';
import avatar from '../../../../../Assets/Images/Product/avatar.png';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const StyledInputElement = styled('input')(
  ({ theme }) => `
 
@media screen and (max-width: 650px) {
  
    width: 90%;
    display: block;
  
}
width :90%;
  margin-top:0;
  font-size: 14px;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;

  color: #333;
  background-color: #eaeaea;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 12px;
  vertical-align: middle;
 
    line-height: 1.5;
    resize: vertical;

 

    &:focus {
      outline: 1px solid #F03637;
    }
`,
);

const StyledTextareaElement = styled('textarea', {
  shouldForwardProp: (prop) =>
    !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
})(
  ({ theme }) => `
  @media screen and (max-width: 650px) {
  
    width: 90%;
    display: block;
  
}
  margin-top:0;
  width: 100%;
  font-size: 14px;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
height:100px;
  color: #333;
  background-color: #eaeaea;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 12px;
  vertical-align: middle;
  min-height: 150px;
    line-height: 1.5;
    resize: vertical;

 

    &:focus {
      outline: 1px solid #F03637;
    }
`,
);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement, Textarea: StyledTextareaElement }}
      {...props}
      ref={ref}
    />
  );
});

const Reviews = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  
   
    return(
      <Box sx={{ display: "flex", justifyContent: "center" }} id="review">
      <Box sx={ProductContentStyle}>
  
           
 <Box>
         
 <Box> 
         <Avatar alt="avatar" src={avatar} sx={{ float:"left",width:"80px" ,height:"80px",marginRight:"10px" ,
         diplay:{xs:"none",sm:"inline-block",md:"inline-block",lg:"inline-block",}}} />
         </Box>



      <Box sx={{marginRight:"10px"}}> 
         <Typography variant="body2" component="p" >
     <span className="userName">Peter Giroud </span>    <time> – September 17, 2019</time>
        </Typography>
      
           </Box>
           <Rating name="read-only" defaultValue={5} size="small" readOnly sx={{float:"Right",marginTop:"-10px"}}/>

          <Box sx={{width:"95%",marginRight:"10px",marginTop:"-20px"}}>
          <Typography variant="body2" component="p" sx={ProductTextStyle}>
      Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est
        </Typography>
          </Box>
 </Box>
           
           <Divider sx={{padding:"3px",width:"100%",}} />

           <Typography variant="body2" component="p" sx={ProductTextStyle}>
           Add a review   </Typography>
           
           <Typography variant="body2" component="p" sx={ProductTextStyle}>
           Your email address will not be published. Required fields are marked      <Typography
                  component={"span"}
                  sx={{ color: "#f03637", marginLeft: "2px" }}
                >
                  *
                </Typography>
              </Typography>

              <Box>
       
                 <Typography variant="body2" component="p" sx={ProductTextStyle}>
                 Your rating 
                 <Typography
                  component={"span"}
                  sx={{ color: "#f03637", marginLeft: "2px" }}
                >
                  *
                </Typography>
              </Typography>
             
              <Typography variant="body2" component="p" sx={{margitTop:"0",color:"#777",}}>
              {/* <Rating name="customized-10" defaultValue={0} max={1}  sx={reviewsRating}/> | */}
              
              <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        defaultValue={0} max={1}  sx={reviewsRating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /> |
                <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        defaultValue={0} max={2}  sx={reviewsRating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /> |
                <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        defaultValue={0} max={3}  sx={reviewsRating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /> |
                <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        defaultValue={0} max={4}  sx={reviewsRating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /> |
                <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        defaultValue={0} max={5}  sx={reviewsRating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

           
              </Typography>
                </Box>


                <Box>
                <Typography variant="body2" component="p" sx={ProductTextStyle}>
                 Your review 
                 <Typography
                  component={"span"}
                  sx={{ color: "#f03637", marginLeft: "2px" }}
                >
                  *
                </Typography>
              </Typography>
               <Grid item xs={12} md={12}>
              <CustomInput aria-label="Demo input" multiline  />
              </Grid>
                </Box>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography variant="body2" component="p" sx={ProductTextStyle}>
                Name
                 <Typography
                  component={"span"}
                  sx={{ color: "#f03637", marginLeft: "2px" }}
                >
                  *
                </Typography>
              </Typography>
                <CustomInput aria-label="Demo input" className="input" />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="body2" component="p" sx={ProductTextStyle}>
                Email 
                 <Typography
                  component={"span"}
                  sx={{ color: "#f03637", marginLeft: "2px" }}
                >
                  *
                </Typography>
              </Typography>
                <CustomInput aria-label="Demo input"  />
                </Grid>
                
</Grid>
<Typography variant="body2" component="p" sx={ProductTextStyle}>
<Checkbox {...label}  className="Checkbox"/>
   </Typography>
              

                <Typography variant="body2" component="p" sx={ProductTextStyle}>
                Save my name, email, and website in this browser for the next time I comment.
              </Typography>
              <Typography variant="body2" component="p" sx={ProductTextStyle}>
              Please enter an answer in digits:
              </Typography>
              <Typography variant="body2" component="p" sx={ProductTextStyle}>
              4 − three =     <CustomInput aria-label="Demo input" className="answer"  />
              </Typography>
              <Button variant="contained" sx={SubmitButton}>SUBMIT</Button>

             
 
      </Box>
      </Box>
    )
   };
   
   export default Reviews;
   