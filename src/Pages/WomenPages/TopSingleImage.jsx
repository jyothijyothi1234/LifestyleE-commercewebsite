import React,{memo} from "react"

import Grid from '@mui/material/Grid';


  function TopSingleImageWomen() {

    
    const SingleImage=[
      {image:"/Assets/WomenBannerImage/Banner.jpeg"}
  ]
    return (
      <Grid container  columns={{ xs: 12 }} >

        
    {SingleImage.map((item) => (
        
        <Grid item size={{xs:12}}  sx={{width: {xs:"100vw"}, height:{xs:"10vh",md:"40vh"} ,margin: {xs:"30px 30px",md:"50px 30px"}}} >
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

  export default memo(TopSingleImageWomen);