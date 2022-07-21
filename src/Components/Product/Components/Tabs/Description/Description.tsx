import {Typography ,Box } from '@mui/material';
import {  ProductContentStyle ,ProductTextStyle} from "../../../../../Styles/Product";






const Description = () => {
    return(
        <Box sx={{ display: "flex", justifyContent: "center" }}>
         <Box sx={ProductContentStyle}>
       
    
      
       
<Typography variant="body2" component="p" sx={ProductTextStyle}>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
 Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
  sapien libero hendrerit est, sed commodo augue nisi non neque.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
    lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
 </Typography>

<Typography variant="body2" component="p" sx={ProductTextStyle}>
Description Heading 01
          </Typography>
          <Typography variant="body2" component="p" sx={ProductTextStyle}>
                <ul className="descriptionList">
                        <li>Attribute Sets for quick product creation of different item types</li>
                        <li>Approve, Edit and Delete Product Reviews and Tags</li>
                        <li>Media Manager with automatic image resizing and watermarking</li>
                        <li>Search Results rewrites and redirects</li>
                        <li>Batch Import and Export of catalog</li>
                        <li>Batch Updates to products in admin panel</li>
                </ul>



             </Typography>
        
        <Typography variant="body2" component="p" sx={ProductTextStyle}>
        Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus,
         in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et 
         malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, 
         ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis,
          a dapibus enim lorem nec augue. Nunc facilisis sagittis ullamcorper.
        </Typography>
 
             <Typography variant="body2"  component="p" sx={ProductTextStyle}>
             Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus,
              in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus,
               ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis,
                a dapibus enim lorem nec augue. Nunc facilisis sagittis ullamcorper.
             </Typography>
      </Box>
      </Box>
    )
   };
   
   export default Description;
   