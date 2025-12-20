import React, { useContext, memo } from "react";
import { Typography, Button } from "@mui/material";
import { FinalDataContext } from "../../MainComponent/SearchContext";
import Grid from '@mui/material/GridLegacy';

export function SingleBanner({ singleimage }) {
  return (

    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%", 
          height: { xs: "20vh", md: "40vh" }, 
          my: { xs: 2, md: 6 }, 
        }}
      >
        <img
          src={singleimage}
          alt="banner not found"
          style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
}



function TotalImagesBeauty() {
  // const { searchValue, setSearchValue }=useContext(SearchContext)
  const { filtersData, show, setCart, cart, setClick, setHide, imagesP } =
    useContext(FinalDataContext);

  const SingleImage = [{ image: "/Assets/BeautyBannerImages/Banner2.jpeg" }];

  const AddToCart = () => {
    setCart(cart + 1);
    setClick(true);
    setHide(true);
  };

  return (
    <Grid container spacing={2} sx={{ pb: 10 }}>
      <Grid item xs={12} sx={{ mt: 2, mb: 1 }}>
        <Typography
  sx={{
    textAlign: "center",
    fontSize: { xs: 18, md: 30 },
    fontWeight: "bold",
  }}        >
          Beauty Products
        </Typography>
      </Grid>

      {show
        ? filtersData.map((item, index) => (
            <Grid
              size={{ xs: 2 }}
              key={index}
              sx={{
                height: { xs: "10vh", md: "30vh" },
                margin: { xs: "20px 30px", md: "35px 32px" },
                width: { xs: "25vw", md: "12vw" },
              }}            >
              <img
                src={item.image}
                alt="not found"
                style={{ height: "100%", width: "100%", borderRadius: "15px" }}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "10px", md: "18px" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "10px", md: "18px" },
                }}
              >
                {item.price}
              </Typography>
            </Grid>
          ))
        : imagesP.map((item, index) => (
            <Grid
              size={{ xs: 3, md: 2 }}
              key={index}
              sx={{
                height: { xs: "10vh", md: "30vh" },
                mt: { xs: 8, md: 13 },
                ml: 12,
              }}
            >
              <img
                src={item.image}
                alt="not found"
                style={{ height: "100%", width: "100%", borderRadius: "15px" }}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "10px", md: "18px" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "10px", md: "18px" },
                }}
              >
                {item.price}
              </Typography>
              <Button
                variant="contained"
                onClick={AddToCart}
                sx={{ mb: 1, ml: { xs: 1, md: 8 } }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "6px", md: "13px" },
                  }}
                >
                  {item.button}
                </Typography>
              </Button>{" "}
            </Grid>
          ))}

      <Grid size={{ xs: 12 }} sx={{ mt: 50 }}>
        {!show &&
          SingleImage.map((item, index) => (
            <SingleBanner key={index} singleimage={item.image} />
          ))}
      </Grid>
    </Grid>
  );
}
export default memo(TotalImagesBeauty);
