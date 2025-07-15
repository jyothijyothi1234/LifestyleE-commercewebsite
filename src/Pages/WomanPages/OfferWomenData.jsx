import React, { useState } from "react"
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

function OfferWomanData(){


    const[images,setImages]=useState([{

        title: "Buy 2 at 40% Off",     
        image:"/assets/WomansImages/offerimage1.jpeg",
        
    },
    {

        title:"Bodycon Party",
        image:"/assets/WomansImages/offerimage2.jpeg",
      
    },
    {

        title:"Buy 2 at 40% Off",
        image:"/assets/WomansImages/offerimage3.jpeg",
       
    },
    {

        title:"Buy 2 at 50% Off ",
        image:"/assets/WomansImages/offerimage4.jpeg",
      
    },
    {

        title:"Buy 1 Get 1 Free",
        image:"/assets/WomansImages/offerimage5.jpeg",
       
    },
    {

        title:"Buy 2 at 50% Off"
        ,
        image:"/assets/WomansImages/offerimage6.jpeg",
        
    },
   
   
    ])

    return(

        <Grid   container  columns={{ xs: 12 }}  sx={{marginBottom:"20px"}} >

<Grid   size={{xs:12}}  sx={{margin:"8px 0px"}}>
<Typography   sx={{textAlign:"center",fontSize:"30px"}} >
Brand Offer

</Typography>
 </Grid>

                {
                    images.map((item)=>(
<Grid   size={{xs:2}} sx={{height:"30vh",margin:"35px 32px",width:"12vw"}}   >
<img    src={item.image}   alt="not found"  style={{height:"100%",width:"100%",borderRadius:"15px"}}/>
<Typography   sx={{textAlign:"center",fontSize:"18px"}} >
   {item.title}
</Typography>

<Typography   sx={{textAlign:"center",fontSize:"18px"}} >
   {item.price}
</Typography>
</Grid>
                    ))
                }
        </Grid>
    )
}



export default OfferWomanData;