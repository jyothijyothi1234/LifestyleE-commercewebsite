import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { NavLink,Link } from 'react-router-dom'; 
import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {SearchContext,FinalDataContext} from "./MainComponent/SearchContext";
import SignIn from "./Pages/SignPage/Signin"


function NavBar(){
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


const { setFiltersData, imagesW, setShow,cart,setCart,click,hide,setHide,imagesM,imagesP,imagesB} = useContext(FinalDataContext);
const { searchValue, setSearchValue }=useContext(SearchContext)

const ChangingInputValue=(e)=>{
  setSearchValue(e.target.value)

}


const WomenFinalData= imagesW.filter((item)=>item.title.toLowerCase().toString().includes(searchValue.trim())||item.price.toLowerCase().toString().includes(searchValue.trim()))
const MenFinalData= imagesM.filter((item)=>item.title.toLowerCase().toString().includes(searchValue.trim())||item.price.toLowerCase().toString().includes(searchValue.trim()))
const ShoesBags= imagesB.filter((item)=>item.title.toLowerCase().toString().includes(searchValue.trim())||item.price.toLowerCase().toString().includes(searchValue.trim()))
const BeautyData=imagesP.filter((item)=>item.title.toLowerCase().toString().includes(searchValue.trim())||item.price.toLowerCase().toString().includes(searchValue.trim()))

const TotalFilteredData=[...WomenFinalData,...MenFinalData,...ShoesBags,...BeautyData]


const handling=()=>{

 setFiltersData (TotalFilteredData)

  setShow(true)
 setSearchValue("")
 setHide(true)
 setCart("")
}

const[openSignIn,setOpenSignIn]=useState(false);
// const[closeSignIn,setCloseSignIn]=useState(true);


const handleOpenSignIn=()=>{

  setOpenSignIn(true)
}


const handleCloseSignIn=()=>{
  setOpenSignIn(false)
  
}



return(
<Grid  container   sx={{bgcolor:"ButtonShadow",alignItems:"center",padding:"20px 10px",boxSizing:"border-box",zIndex:1000,position:"fixed",width:"100%",top:0,left:0,right:0,}}>
<Grid  size={{xs: 2}} >
<NavLink   to="/"  style={{textDecoration:"none"} }> 

<Typography   sx={{fontWeight:"bold",fontSize:"30px",display:"flex",justifyContent:"center",color:"black"}}>
 Lifestyle
</Typography>
</NavLink>

</Grid>

<Grid  size={{xs: 3}}  sx={{display:"flex"}}>

<Grid  size={{xs: 3}}  >
<NavLink    to="/women" style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) }   > 
<Typography    sx={{fontWeight:"bold",fontSize:"18px",padding:"6px 0px"}}>
  Women
</Typography>
</NavLink>
</Grid>
<Grid  size={{xs: 2}}  >
  <NavLink   to="/men" style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) } >
  <Typography   sx={{fontWeight:"bold",fontSize:"18px",padding:"6px 1px 6px 0px"}}>
 Men
</Typography>
  </NavLink>


</Grid>
<Grid  size={{xs: 4}}  >

  <NavLink to="/shoes&bags"  style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) }  >

  <Typography   sx={{fontWeight:"bold",fontSize:"18px",padding:"6px 0px"}}>
Shoes & Bags
</Typography>
  </NavLink>
</Grid>
<Grid  size={{xs: 3}}  >

  <NavLink   to="/beauty"    style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) }  >
  <Typography   sx={{fontWeight:"bold",fontSize:"18px",padding:"6px 4px 6px 0px",display:"flex",justifyContent:"end"}}>
 Beauty
</Typography>
  </NavLink>

</Grid>

</Grid>



<Grid size={{xs: 3}} sx={{ border: "2px solid black", margin: "0px 20px", borderRadius: "7px", }}>
  <Box sx={{ position: "relative", width: "90%"
}}>
    
    <SearchIcon
      sx={{
        position: "absolute",
        top: "30%",
        left: "10px",
      }}
    />

    <TextField
      fullWidth
      placeholder="Search"
value={searchValue}
      onChange={ChangingInputValue}
      sx={{
          paddingLeft: "40px", 
          height:"60%",

      }}
    />
  </Box>
</Grid>


<Grid  size={{xs: 3}} sx={{display:"flex",alignItems:"center"}}  >

<Grid   size={{xs: 12}}  sx={{display:"flex",alignItems:"center",gap:7}}>
  <Grid   size={{xs: 3}}   >
    
  <Button variant="contained"    onClick={handling} >
      <Typography    sx={{fontSize:"15px"}}>
    MORE
    </Typography>
    </Button>
  </Grid>

<Grid  size={{xs: 12}}  sx={{display:"flex",height:"40px",paddingTop:"7px",bgcolor:'#FFB900',border:"2px solid #FFB900",justifyContent:"center"}}> 

<Link   style={{textDecoration:"none"}} >
  
<Typography    sx={{fontSize:"15px",color:"black"}}  onClick={handleOpenSignIn}>
Sign In 
</Typography>
</Link>

<SignIn open={openSignIn} onClose={handleCloseSignIn} />

<Typography   sx={{padding:"1px 3px 0px 3px"}}>
    /
</Typography> 

<Link  style={{textDecoration:"none"}} >

<Typography   sx={{fontSize:"15px",color:"black"}}  onClick={handleOpenSignIn}>
 Sign Up
</Typography>
</Link>

<SignIn open={openSignIn} onClose={handleCloseSignIn} />

</Grid>

</Grid>

<Grid  size={{xs: 5}}  >
<Grid  size={{xs: 10}}   sx={{display:"flex",justifyContent:"center",marginLeft:"10px",}} >

  <StyledRating
        name="customized-color"
        max={1}
        defaultValue={0}
        icon={<FavoriteIcon fontSize="inherit"  />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: 'black' }} />}
      />
</Grid> 

<Grid  size={{xs: 12}}    >
<Typography    sx={{textAlign:"end",color:"black"}}>
 favourites
</Typography>
</Grid> 

</Grid> 



<Grid  size={{xs: 5}}  >

<Grid  size={{xs: 10}}   sx={{display:"flex",justifyContent:"center",marginLeft:"15px",}} >
<ShoppingBagIcon    />
</Grid>

<Grid  size={{xs: 12}}    sx={{display:"flex"}} >
<Typography    sx={{textAlign:"end",fontSize:"16px",paddingRight:"10px",pl:3}}>
 Basket
</Typography>

<Typography    sx={{color: click ? "red" : "black",display:hide?"flex":"none",fontSize:"16px"}}>
{cart}
</Typography>
</Grid>
</Grid>

</Grid> 
</Grid> 

    )
}

export default NavBar;