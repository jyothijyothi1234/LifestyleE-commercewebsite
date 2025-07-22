import React, { useState } from "react"
import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopSingleImageBeauty  from "./TopSingleImage";
import TotalImagesBeauty  from "./TotalImages";
import OfferBeautyData  from "./OfferBeautyItems";
function LandingPageBeauty(){


    const[data]=useState([{
image:"/Assets/BeautyBannerImages/BannerImage1.jpeg"

    },
    {
        image:"/Assets/BeautyBannerImages/BannerImage2.jpeg"
        
            },
            {
                image:"/Assets/BeautyBannerImages/BannerImage3.jpeg"
                
                    }
                    ,
                    {
                        image:"/Assets/BeautyBannerImages/BannerImage4.jpeg"
                        
                            }
                
                ])



                    const[storedData,setStoredData]=useState(0)

                    const RightHand=()=>{
                        setStoredData(storedData===data.length-1?0:storedData+1)
                    }

                    const LeftHand=()=>{
                        setStoredData(storedData===0?data.length-1:storedData-1)
                    }
    return(
<Grid  container    columns={{xs:12,md:12}}  >

<Grid   size={{xs:12}}  sx={{display:"flex"}}>
    <Grid  size={{xs:1}}  sx={{display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
<ArrowBackIosNewIcon    onClick={LeftHand}   sx={{width:{xs:"10px",md:"50px"},height:{xs:"10px",md:"50px"},border:"2px solid black",bgcolor:"white",borderRadius:"35px",padding:{xs:"6px 6px",md:"10px 10px"}}} />
    </Grid>

<Grid  size={{xs:10}} sx={{width:"80vw",minHeight:{xs:"10vh",md:"35vh"},margin:"0px 10px"}}  >
    
    <img   src={data[storedData]?.image}   alt="not found" style={{width:"100%",height:"100%"}}  />
</Grid>



<Grid  size={{xs:1}}  sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}  >
<ArrowForwardIosIcon    onClick={RightHand}  sx={{width:{xs:"10px",md:"50px"},height:{xs:"10px",md:"50px"},border:"2px solid black",bgcolor:"white",borderRadius:"35px",padding:{xs:"6px 6px",md:"10px 10px"}}}  />
    </Grid> 
    </Grid> 

    <Grid    size={{xs:12}}  >
    
<TopSingleImageBeauty />
<TotalImagesBeauty />
<OfferBeautyData   />


    </Grid>

</Grid>

    )
}

export default LandingPageBeauty;