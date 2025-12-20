import React, { useState, memo } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";

function OfferWomanData() {
  const [images] = useState([
    {
      title: "Buy 2 at 40% Off",
      image: "/Assets/WomansImages/Offerimage1.jpeg",
    },
    {
      title: "Buy 1 Get 1 Free",
      image: "/Assets/WomansImages/Offerimage2.jpeg",
    },
    {
      title: "Buy 2 at 40% Off",
      image: "/Assets/WomansImages/Offerimage3.jpeg",
    },
    {
      title: "Buy 2 at 50% Off ",
      image: "/Assets/WomansImages/Offerimage4.jpeg",
    },
    {
      title: "Buy 1 Get 1 Free",
      image: "/Assets/WomansImages/Offerimage5.jpeg",
    },
    {
      title: "Buy 2 at 50% Off",
      image: "/Assets/WomansImages/Offerimage6.jpeg",
    },
  ]);

  return (
    <Grid container spacing={2} sx={{ mb: { xs: 1, md: 5 } }}>
      <Grid item xs={12} sx={{ margin: "8px 0px" }}>
        <Typography
          sx={{ textAlign: "center", fontSize: { xs: "20px", md: "30px" } }}
        >
          Brand Offer
        </Typography>
      </Grid>

      {images.map((item) => (
        <Grid
          item
          xs={3}
          md={2}
          sx={{
            height: { xs: "10vh", md: "30vh" },
            margin: { xs: "20px 30px", md: "35px 32px" },
            width: { xs: "25vw", md: "12vw" },
          }}
        >
          <img
            src={item.image}
            alt="not found"
            style={{ height: "100%", width: "100%", borderRadius: "15px" }}
          />
          <Typography
            sx={{ textAlign: "center", fontSize: { xs: "8px", md: "18px" } }}
          >
            {item.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(OfferWomanData);
