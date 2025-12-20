import { Dialog, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function SignIn({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <Box
        sx={{
          boxSizing: "border-box",
          bgcolor: "white",
          height: { xs: "33vh", md: "57vh" },
          width: { xs: "50vw", md: "45vw" },
          border: "1px solid black",
          borderRadius: "4px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: 3,
              pt: 2,
              pb: 1,
            }}
          >
            <IconButton onClick={onClose}>
              <ClearIcon />
            </IconButton>
          </Grid>

          <Box
            sx={{ width: { xs: "30vw", md: "45vw" }, pl: { xs: 5, md: 14 } }}
          >
            <Grid item xs={12} md={12}>
              <Typography sx={{ fontSize: { xs: "18px", md: "35px" } }}>
                Sign up or Sign in
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "14px" },
                  pt: 1,
                  pb: 1,
                  color: "#dcdcdc",
                }}
              >
                Enjoy the convenience of a single account across all
                participating brands
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "20px" },
                  fontStyle: "bold",
                  paddingBottom: "2px",
                }}
              >
                Mobile Number
              </Typography>{" "}
            </Grid>

            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "32vw" },
                  border: "2px solid black",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "9px", md: "15px" },
                    fontStyle: "bold",
                    position: "absolute",
                    top: "30%",
                    left: "5px",
                  }}
                >
                  +91
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Enter your mobile number"
                  sx={{
                    paddingLeft: "40px",
                    height: "60%",
                    width: { xs: "77%", md: "92%" },
                    "& .MuiInputBase-input": {
                      // padding: { xs: "3px 8px", md: "17px" },
                      fontSize: { xs: "9px", md: "16px" },
                    },
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} sx={{ display: "flex" }}>
              <Typography
                sx={{
                  fontSize: { xs: "5px", md: "14px" },
                  pr: { xs: 1, md: 1 },
                  pt: { xs: 1, md: 1 },
                  pb: 2,
                }}
              >
                By creating your account you agree to our
              </Typography>

              <NavLink to="/terms&condition" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "5px", md: "14px" },
                    color: "#FFB900",
                    pt: { xs: 1, md: 2 },
                    pb: 2,
                  }}
                >
                  Terms and Conditions
                </Typography>
              </NavLink>
            </Grid>
          </Box>
        </Grid>

        <Box
          item
          xs={12}
          sx={{
            width: "60%",
            border: "1px solid #dcdcdc",
            ml: { xs: 5, md: 17 },
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: { xs: 10, md: 13 },
            mt: 3,
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{ width: { xs: "19vw", md: "16vw" }, height: "8vh" }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFB900",
                width: { xs: "80%", md: "100%" },
                height: { xs: "35%", md: "100%" },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "12px", md: "15px" }, color: "white" }}
              >
                Continue
              </Typography>
            </Button>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
}

export default SignIn;
