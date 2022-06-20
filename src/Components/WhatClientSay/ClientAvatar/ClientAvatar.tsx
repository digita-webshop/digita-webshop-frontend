import React from "react";
import {Box, Grid, Rating, Typography} from "@mui/material";
import { AvatarProps} from "../ClientCard/Types/Item";

type Props = {
    user: AvatarProps
}

function ClientAvatar({user}: Props) {
    return (
        <>
            <Box sx={{mt: 3, "& img": {width: 70, height: 70}}}>
                <Grid container spacing={1}>
                    <Grid item>
                        <img src={user.profileImg} alt="profile"/>
                    </Grid>
                    <Grid item>
                        <Grid
                            sx={{

                                ml: '6px',
                            }}
                            container
                            direction="column"
                            spacing={0}
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Grid item>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        textTransform: "uppercase",
                                        fontWeight: "600",
                                    }}
                                >
                                    {user.username}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        fontWeight: "400",
                                        mb: 1,
                                    }}
                                >
                                    {user.role}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Rating size="small" name="read-only" value={user.rate} readOnly/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default ClientAvatar;
