import React, { useState } from "react"
import { Typography } from "@mui/material";

import Grid from '@mui/material/Grid';


  function TopSingleImageWomen() {

    
    const SingleImage=[
      {image:"/assets/WomenBannerImage/Banner.jpeg"}
  ]
    return (
      <Grid container  columns={{ xs: 12 }} >

        
    {SingleImage.map((item, index) => (
        
        <Grid  size={{xs:12}}  sx={{width: {xs:"100vw"}, height:{xs:"20vh",md:"40vh"} ,margin: "70px 30px"}} >
          <img
            src={ item.image}
            alt="not found"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </Grid>
    )
  )
}
      </Grid>
    );
  }

  export default TopSingleImageWomen;