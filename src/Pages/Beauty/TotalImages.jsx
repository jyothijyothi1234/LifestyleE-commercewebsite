
import React, { useContext,memo } from "react";
import { Typography, Grid, Button } from "@mui/material";
import {  FinalDataContext } from "../../MainComponent/SearchContext"





export function SingleBanner({singleimage}) {
    return (
      <Grid container  columns={{ xs: 12 }}   >
        <Grid  size={{xs:12}}  sx={{width: "100vw",height:{xs:"10vh",md:"40vh"},margin:{xs:"10px 30px",md:"50px 30px"}}} >
          <img
            src={singleimage}
            alt="not found"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    );
  }




function TotalImagesBeauty(){
    
    // const { searchValue, setSearchValue }=useContext(SearchContext)
    const { filtersData,show,setCart,cart,setClick,setHide,imagesP,} = useContext(FinalDataContext);

    const SingleImage=[
       {image:"/Assets/BeautyBannerImages/Banner2.jpeg"}
]


    const AddToCart=()=>{

     setCart(cart+1)
      setClick(true)
      setHide(true)
    }



   return(

<Grid container columns={{ xs: 12 }} >


<Grid  size={{xs:12}} >
 <Typography sx={{ textAlign: "center", fontSize: {xs:"20px",md:"30px"} }}>
 Beauty Products
 </Typography>
</Grid>


     {show ? (
 filtersData.map((item, index) => (
   <Grid  size={{xs:2}} key={index}  sx={{ height: {xs:"10vh",md:"30vh"}, mt:15,ml:12 }} >
     <img src={item.image} alt="not found" style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
     <Typography sx={{ textAlign: "center", fontSize: {xs:"10px",md:"18px"} }}>{item.title}</Typography>
     <Typography sx={{ textAlign: "center",fontSize: {xs:"10px",md:"18px"} }}>{item.price}</Typography>
   </Grid>
 ))
)          
: (
  imagesP.map((item, index) => (
   <Grid  size={{xs:3,md:2}}key={index} sx={{ height: {xs:"10vh",md:"30vh"},mt:{xs:8,md:13},ml:12 }}>
     <img src={item.image} alt="not found" style={{ height: "100%", width: "100%", borderRadius: "15px" }} />
     <Typography sx={{ textAlign: "center", fontSize: {xs:"10px",md:"18px"} }}>{item.title}</Typography>
     <Typography sx={{ textAlign: "center",fontSize: {xs:"10px",md:"18px"}}}>{item.price}</Typography>
     <Button variant="contained" onClick={AddToCart} sx={{ mb: 1,  ml:{xs:1,md:8} }}>
      <Typography sx={{ textAlign: "center", fontSize: {xs:"6px",md:"13px" }}}>
        {item.button}
        </Typography>
        </Button>   </Grid>
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
export default memo(TotalImagesBeauty);