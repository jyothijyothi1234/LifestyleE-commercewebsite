import React, { useState, memo } from "react";
import Grid from "@mui/material/GridLegacy";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OfferWomenData from "./OfferWomenData";
import TopSingleImageWomen from "./TopSingleImage";
import TotalImagesWomen from "./TotalImages";
function LandingPageWomen() {
  const [data] = useState([
    {
      image: "/Assets/WomenBannerImage/BannerImage1.jpeg",
    },
    {
      image: "/Assets/WomenBannerImage/BannerImage2.jpeg",
    },
    {
      image: "/Assets/WomenBannerImage/BannerImage3.jpeg",
    },
  ]);

  // console.log(data)

  const [storedData, setStoredData] = useState(0);

  const RightHand = () => {
    setStoredData(storedData === data.length - 1 ? 0 : storedData + 1);
  };

  const LeftHand = () => {
    setStoredData(storedData === 0 ? data.length - 1 : storedData - 1);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", mt: { xs: 10, md: 16 } }}>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <ArrowBackIosNewIcon
            onClick={LeftHand}
            sx={{
              width: { xs: "10px", md: "50px" },
              height: { xs: "10px", md: "50px" },
              border: "2px solid black",
              bgcolor: "white",
              borderRadius: "35px",
              padding: { xs: "6px 6px", md: "10px 10px" },
            }}
          />
        </Grid>

        <Grid
          item
          xs={10}
          sx={{
            width: "80vw",
            height: { xs: "10vh", md: "35vh" },
            margin: "0px 10px",
          }}
        >
          <img
            src={data[storedData]?.image}
            alt="not found"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>

        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ArrowForwardIosIcon
            onClick={RightHand}
            sx={{
              width: { xs: "10px", md: "50px" },
              height: { xs: "10px", md: "50px" },
              border: "2px solid black",
              bgcolor: "white",
              borderRadius: "35px",
              padding: { xs: "6px 6px", md: "10px 10px" },
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TopSingleImageWomen />
        <TotalImagesWomen />
        <OfferWomenData />
      </Grid>
    </Grid>
  );
}

export default memo(LandingPageWomen);
