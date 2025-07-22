import React from "react";
import LandingPageWoman from "./WomanPages/LandingPage";
import Grid from '@mui/material/Grid';
import LandingPageWomen from "./WomenPages/LandingPage";
import ShoeBagPage from "./ShoesBags/LandingPage";
import Beauty from "./Beauty/LandingPage";
import FotterPage from "../Footter/fotterpage";

function LandingPage(){


    return(

        <Grid  container    columns={{xs:12,md:12}}  >

<Grid  item size={{xs:12,md:12}} >
    <LandingPageWomen    />

<LandingPageWoman  />
<ShoeBagPage   />
< Beauty />
<FotterPage  />


        </Grid>

        </Grid>

    )
}

export default LandingPage;