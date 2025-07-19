import React from "react";
import LandingPageWoman from "./WomanPages/LandingPage";
import Grid from '@mui/material/Grid';
import LandingPageWomen from "./WomenPages/LandingPage";
import ShoeBagPage from "./ShoesBags/LandingPage";
import Beauty from "./Beauty/LandingPage"
function LandingPage(){


    return(

        <Grid  container  sx={{height:"auto"}} >

<Grid  size={{xs:12}} >
    <LandingPageWomen   />

<LandingPageWoman  />
<ShoeBagPage   />
< Beauty />

        </Grid>

        </Grid>

    )
}

export default LandingPage;