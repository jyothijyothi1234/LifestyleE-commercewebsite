import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { SearchContext, FinalDataContext } from "./MainComponent/SearchContext";
import SignIn from "./Pages/SignPage/Signin";

function NavBar() {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": { color: "#ff6d75" },
    "& .MuiRating-iconHover": { color: "#ff3d47" },
  });

  const {
    setFiltersData,
    imagesW,
    setShow,
    cart,
    setCart,
    click,
    hide,
    setHide,
    imagesM,
    imagesP,
    imagesB,
  } = useContext(FinalDataContext);

  const { searchValue, setSearchValue } = useContext(SearchContext);

  const [openSignIn, setOpenSignIn] = useState(false);

  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const handleSearch = (e) => setSearchValue(e.target.value);

  const filteredData = [
    ...imagesW,
    ...imagesM,
    ...imagesB,
    ...imagesP,
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.price.toLowerCase().includes(searchValue)
  );

  const handleFilter = () => {
    setFiltersData(filteredData);
    setShow(true);
    setHide(true);
    setCart("");
    setSearchValue("");
  };

  return (
    <Grid
      container
      sx={{
        bgcolor: "ButtonShadow",
        position: "fixed",
        top: 0,
        left:0,
        width: "100%",
        zIndex: 1000,
        px: { xs: 1, md: 3 },
        py: { xs: 1, md: 2 },
        flexWrap: { xs: "wrap", md: "nowrap" },
        alignItems: "center",
      }}
    >
      {/* LOGO */}
      <Grid item xs={6} md={2}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 14, md: 30 },
              textAlign: "center",
              color: "black",
              whiteSpace: "nowrap",
            }}
          >
            Lifestyle
          </Typography>
        </NavLink>
      </Grid>

      {/* MENU */}
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: { xs: 1, md: 0 },
        }}
      >
        {["women", "men", "shoes&bags", "beauty"].map((path) => (
          <NavLink
            key={path}
            to={`/${path}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "red" : "black",
            })}
          >
            <Typography sx={{ fontSize: { xs: 8, md: 18 }, fontWeight: "bold" }}>
              {path.replace("&", " & ").toUpperCase()}
            </Typography>
          </NavLink>
        ))}
      </Grid>

      {/* SEARCH */}
      <Grid item xs={12} md={3} sx={{ mt: { xs: 1, md: 0 } }}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <SearchIcon
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
          <TextField
            fullWidth
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch}
            sx={{
              "& .MuiInputBase-input": {
                pl: "40px",
                fontSize: { xs: 12, md: 16 },
              },
            }}
          />
        </Box>
      </Grid>

      {/* ACTIONS */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: { xs: 1, md: 0 },
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={handleFilter}
          sx={{ bgcolor: "purple" }}
        >
          MORE
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 12, cursor: "pointer" }}
            onClick={handleOpenSignIn}
          >
            Sign In / Sign Up
          </Typography>
          <SignIn open={openSignIn} onClose={handleCloseSignIn} />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <StyledRating
            max={1}
            icon={<FavoriteIcon />}
            emptyIcon={<FavoriteBorderIcon />}
          />
          <Typography sx={{ fontSize: 12 }}>Favourites</Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <ShoppingBagIcon />
          <Typography sx={{ fontSize: 12 }}>
            Basket{" "}
            <span style={{ color: click ? "red" : "black" }}>
              {hide && cart}
            </span>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NavBar;
