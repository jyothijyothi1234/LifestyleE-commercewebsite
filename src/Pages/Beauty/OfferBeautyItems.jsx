import React, { useState, memo } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";

function OfferBeautyData() {
  const [images] = useState([
    { title: "Buy 2 at 40% Off", image: "/Assets/BeautyImages/Offerimage1.jpeg" },
    { title: "Buy 1 Get 1 Free", image: "/Assets/BeautyImages/Offerimage2.jpeg" },
    { title: "Buy 2 at 40% Off", image: "/Assets/BeautyImages/Offerimage3.jpeg" },
    { title: "Buy 2 at 50% Off", image: "/Assets/BeautyImages/Offerimage4.jpeg" },
    { title: "Buy 1 Get 1 Free", image: "/Assets/BeautyImages/Image12.jpeg" },
    { title: "Buy 2 at 50% Off", image: "/Assets/BeautyImages/Offerimage6.jpeg" },
  ]);

  return (
    <Grid container spacing={2} sx={{ pb: 10 }}>
      {/* TITLE */}
      <Grid item xs={12} sx={{ mt: 2, mb: 1 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 18, md: 30 },
            fontWeight: "bold",
          }}
        >
          Brand Offer
        </Typography>
      </Grid>

      {/* IMAGES */}
      {images.map((item, index) => (
        <Grid
          item
          key={index}
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
            style={{
              width: "100%",
              borderRadius: "15px",
              height: "100%",
              objectfit: "cover",
            }}
          />

          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
              fontSize: { xs: 12, md: 16 },
            }}
          >
            {item.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(OfferBeautyData);

