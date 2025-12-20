import React, { memo } from "react";

import Grid from '@mui/material/GridLegacy';

function TopSingleImageBeauty() {
  const SingleImage = [{ image: "/Assets/BeautyBannerImages/Banner1.jpeg" }];
  return (
    <Grid container    spacing={2} >
      {SingleImage.map((item, index) => (
        <Grid
          key={index}
          item  xs={12}  
          sx={{
            width: "100vw",
            height: { xs: "10vh", md: "40vh" },
            margin: { xs: "30px 30px", md: "50px 30px" },
          }}
        >
          <img
            src={item.image}
            alt="not found"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(TopSingleImageBeauty);
