import React, { useState } from "react"
import { Typography } from "@mui/material";

import Grid from '@mui/material/Grid';


  function DownSingleShoeImages() {

    
    const SingleImage=[
      {image:"/assets/Shoe&BagBannerImages/BannerShoe1.jpeg"},
      { image:"/assets/Shoe&BagBannerImages/BannerShoe2.jpeg"}

  ]
    return (
      <Grid container  columns={{ xs: 12 }} >

    {SingleImage.map((item, index) => (
        
        <Grid  size={{xs:12}}  sx={{width: "100vw", height: "40vh",margin: "70px 30px"}} >
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

  export default DownSingleShoeImages;