import React from "react"

import Grid from '@mui/material/Grid';


  function TopSingleImageBeauty() {

    
    const SingleImage=[
      {image:"/Assets/BeautyBannerImages/Banner1.jpeg"}
  ]
    return (
      <Grid container  columns={{ xs: 12 }} >

    {SingleImage.map((item, index) => (
        
        <Grid   key={index} size={{xs:12}}  sx={{width: "100vw", height:{xs:"10vh",md:"40vh"},margin: {xs:"30px 30px",md:"50px 30px"}}} >
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

  export default TopSingleImageBeauty;