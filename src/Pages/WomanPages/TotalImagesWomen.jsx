import React, { useContext, memo } from "react";
import { Typography, Button } from "@mui/material";
import Grid from '@mui/material/GridLegacy';
import { FinalDataContext } from "../../MainComponent/SearchContext";
import Box from '@mui/material/Box';

export function SingleBanner({ singleimage }) {
  return (
    <Box
    sx={{
      width: "100%",
      height: { xs: "10vh", md: "40vh" },
    }}
  >

     
        <img
          src={singleimage}
          alt="not found"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      </Box>

  );
}

function TotalImagesWoman() {
  // const { searchValue, setSearchValue }=useContext(SearchContext)
  const { filtersData, imagesM, show, setCart, cart, setClick, setHide } =
    useContext(FinalDataContext);

  const SingleImage = [{ image: "/Assets/WomanBannerImage/Banner2.jpeg" }];

  const AddToCart = () => {
    setCart(cart + 1);
    setClick(true);
    setHide(true);
  };

  return (
    <Grid container  spacing={2}>
      <Grid item  xs={ 12 }>
        <Typography
          sx={{ textAlign: "center", fontSize: { xs: "20px", md: "30px" } }}
        >
          Men Wear
        </Typography>
      </Grid>

      {show
        ? filtersData.map((item, index) => (
            <Grid
            item xs={2}
              key={index}
              sx={{ height: { xs: "10vh", md: "30vh" }, mt: 15, ml: 12 }}
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
            </Grid>
          ))
        : imagesM.map((item, index) => (
            <Grid
              item  xs={3}  md={2}
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

      <Grid item xs={12} sx={{ mt: 10 }}>
        {!show &&
          SingleImage.map((item, index) => (
            <SingleBanner key={index} singleimage={item.image} />
          ))}
      </Grid>
    </Grid>
  );
}
export default memo(TotalImagesWoman);
