import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Card, iconStyle, textStyle} from "./Styles";

function BlogCard({item}: any) {

    return (
        <Card>
            <Box>
                <img src={item.image} alt='profile-image'/>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{display: 'flex', alignItems: 'center', marginRight: '12px'}}>
                                <PermIdentityIcon sx={iconStyle}/>
                                <Typography sx={textStyle}>{item.username}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeIcon sx={iconStyle}/>
                                <Typography sx={textStyle}>{item.time}</Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sx={{paddingTop: '0!important'}}>
                        <Typography variant="h2" sx={{
                            lineHeight: '1.3',
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#333333'
                        }}>{item.title}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

export default BlogCard;
