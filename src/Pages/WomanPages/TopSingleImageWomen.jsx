import React from "react"

import Grid from '@mui/material/Grid';


  function TopSingleImageWoman() {

    
    const SingleImage=[
      {image:"/assets/WomanBannerImage/Banner1.jpeg"}
  ]
    return (
      <Grid container  columns={{ xs: 12 }} >

    {SingleImage.map((item) => (
        
        <Grid  size={{xs:12}}  sx={{width: "100vw", height:{xs:"20vh",md:"40vh"},margin: "70px 30px"}} >
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

  export default TopSingleImageWoman;