import React, { useState } from "react"
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

function OfferWomenData(){


    const[images]=useState([{

        title: "Buy 2 at 40% Off",
        image:"/Assets/WomensImages/Offerimage1.jpeg",
    },
    {

        title:"Buy 1 Get 1 Free",
        image:"/Assets/WomensImages/Offerimage2.jpeg",
    },
    {

        title:"Buy 2 at 40% Off ",
        image:"/Assets/WomensImages/Offerimage3.jpeg",
    },
    {

        title:"Buy 2 at 50% Off",
        image:"/Assets/WomensImages/Offerimage4.jpeg",
    },
    {

        title:"Buy 1 Get 1 Free",
        image:"/Assets/WomensImages/Offerimage5.jpeg",
    },
    {

        title:"Buy 2 at 50% Off",
        image:"/Assets/WomensImages/Offerimage6.jpeg",
    }
    ])

    return(

        <Grid   container  columns={{xs:12 }} sx={{mb:{xs:1,md:5}}}>

<Grid  item size={{xs:12}}  sx={{margin:"8px 0px"}}>
<Typography   sx={{textAlign:"center",fontSize:{xs:"20px",md:"30px"},}} >
  Brand Offer
</Typography>
 </Grid>

                {
                    images.map((item)=>(
<Grid  item size={{xs:3,md:2}} sx={{height:{xs:"10vh",md:"30vh"},margin:{xs:"20px 30px",md:"35px 32px"},width:{xs:"25vw",md:"12vw"}}}   >
<img    src={item.image}   alt="not found"  style={{width:"100%",borderRadius:"15px",height: "100%",
  objectfit: "cover"}}/>
<Typography   sx={{textAlign:"center",fontSize:{xs:"8px",md:"18px"}}} >
   {item.title}
</Typography>


</Grid>
                    ))
                }
        </Grid>
    )
}



export default OfferWomenData;