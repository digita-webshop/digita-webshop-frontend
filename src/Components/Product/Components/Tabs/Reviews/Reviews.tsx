import { styled } from '@mui/material/styles';

import {  ProductContentStyle ,
  ProductTextStyle,
  SubmitButton,reviewsRating
} from "../../../../../Styles/Product";

import {Typography ,Box,Checkbox ,Rating,Avatar,Divider,Button} from '@mui/material';
import avatar from '../../../../../Assets/Images/Product/avatar.png';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
const Reviews = () => {
   
    return(
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={ProductContentStyle}>
  
           <Box >
        
        <Box>
        <Typography variant="body2" component="p" sx={{float:"left"}}>
     <span className="userName">Peter Giroud </span>    <span> – September 17, 2019</span>
        </Typography>
           <Avatar alt="avatar" src={avatar} sx={{float:"left", width:"100px" ,height:"100px"}} />
        </Box>
           <Rating name="read-only" defaultValue={5} size="small" readOnly sx={{float:"Right"}}/>
      <Typography variant="body2" component="p" sx={ProductTextStyle}>
      Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est
        </Typography>
           </Box>
           <Divider sx={{padding:"30px",width:"100%",}} />
           <Typography variant="body2" component="p" sx={ProductTextStyle}>
           Add a review   </Typography>
           <Typography variant="body2" component="p" sx={ProductTextStyle}>
           Your email address will not be published. Required fields are marked *
              </Typography>

              <Box>
       
                 <Typography variant="body2" component="p" sx={ProductTextStyle}>
                 Your rating 
              </Typography>
             
              <Typography variant="body2" component="p" sx={ProductTextStyle}>
              <Rating name="size-medium" defaultValue={1}  sx={reviewsRating}/> |
              <Rating name="size-medium" defaultValue={2}  sx={reviewsRating}/> |
              <Rating name="size-medium" defaultValue={3}  sx={reviewsRating}/> |
              <Rating name="size-medium" defaultValue={4} sx={reviewsRating}/> |
              <Rating name="size-medium" defaultValue={5}  sx={reviewsRating}/> 
              </Typography>
                </Box>





                <Checkbox {...label} />

                <Typography variant="body2" component="p" sx={ProductTextStyle}>
                Save my name, email, and website in this browser for the next time I comment.
              </Typography>
              <Typography variant="body2" component="p" sx={ProductTextStyle}>
              Please enter an answer in digits:
              </Typography>
              <Typography variant="body2" component="p" sx={ProductTextStyle}>
              4 − three =
              </Typography>
              <Button variant="contained" sx={SubmitButton}>SUBMIT</Button>

             
 
      </Box>
      </Box>
    )
   };
   
   export default Reviews;
   