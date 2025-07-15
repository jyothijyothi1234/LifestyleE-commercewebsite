import React, { useContext, useState } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { SearchContext, FinalDataContext } from "../../MainComponent/SearchContext"




export function SingleBanner({singleimage}) {
  return (
    <Grid container  columns={{ xs: 12 }} >
      <Grid  size={{xs:12}}  sx={{width: "100vw", height: "40vh",margin: "70px 30px"}} >
        <img
          src={singleimage}
          alt="not found"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      </Grid>
    </Grid>
  )
}

function TotalImagesShoeBag(){
    
     const { searchValue, setSearchValue }=useContext(SearchContext)
     const { filtersData,setFiltersData,imagesB,show,setCart,cart,click,setClick,hide,setHide, } = useContext(FinalDataContext);

     const SingleImage=[
        { image:"/assets/Shoe&BagBannerImages/BannerBag1.jpeg"}
    ]


     const AddToCart=()=>{

      setCart(cart+1)
       setClick(true)
       setHide(true)
     }



    return(

<Grid container columns={{ xs: 12 }}>


<Grid  size={{xs:12}} sx={{ margin: "10px 0px" }}>
  <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
    Brand Shoe&Bags
  </Typography>
</Grid>


      {show ? (
  filtersData.map((item, index) => (
    <Grid  size={{xs:2}} key={index}    sx={{ height: "30vh", mt:15,ml:12 }}>
      <img src={item.image} alt="not found" style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
      <Typography sx={{ textAlign: "center", fontSize: "18px" }}>{item.title}</Typography>
      <Typography sx={{ textAlign: "center", fontSize: "18px" }}>{item.price}</Typography>
    </Grid>
  ))
)          
: (
    imagesB.map((item, index) => (
    <Grid  size={{xs:2}} key={index}      sx={{ height: "30vh", mt:15,ml:12 }}>
      <img src={item.image} alt="not found" style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
      <Typography sx={{ textAlign: "center", fontSize: "18px" }}>{item.title}</Typography>
      <Typography sx={{ textAlign: "center", fontSize: "18px" }}>{item.price}</Typography>
      <Button variant="contained" onClick={AddToCart} sx={{ mb: 1, ml: 8 }}>{item.button}</Button>
    </Grid>
  ))
)}

<Grid  size={{xs:12}}   sx={{mt:10}}>


  {
  !show&&(
  
  SingleImage.map((item, index) => (
    <SingleBanner key={index} singleimage={item.image} />
  ))
  )
  

}
</Grid>

</Grid>
    

    );
  }
export default TotalImagesShoeBag;