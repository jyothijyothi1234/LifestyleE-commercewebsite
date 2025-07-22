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
<Grid  container  columns={{xs:12, md: 12 }} sx={{bgcolor:"ButtonShadow",alignItems:"center",padding:{xs:"10px 5px",md:"20px 10px"},boxSizing:"border-box",zIndex:1000,position:"fixed",width:"100%",top:0,left:0,right:0, flexWrap: "nowrap",}}>
<Grid  item size={{xs:1,md: 2}} >
<NavLink   to="/"  style={{textDecoration:"none"} }> 

<Typography   sx={{fontWeight:"bold", fontSize:{xs:"8px",md:"30px"},display:"flex",justifyContent:"center",color:"black",pb:{xs:1,md:0}}}>
 Lifestyle
</Typography>
</NavLink>

</Grid>

<Grid item size={{xs: 2,md:3}}  sx={{display:"flex",}}>

<Grid  size={{xs:7,md: 3}}  >
<NavLink    to="/women" style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) }   > 
<Typography    sx={{fontWeight:"bold",fontSize:{xs:"4px",md:"18px"},padding:{xs:"10px 2px 10px 4px",md:"6px 0px"}}}>
  Women
</Typography>
</NavLink>
</Grid>
<Grid  item size={{xs: 2,md:2}}  >
  <NavLink   to="/men" style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) } >
  <Typography   sx={{fontWeight:"bold",fontSize:{xs:"4px",md:"18px"},padding:{xs:"10px 10px 6px 0px",md:"6px 1px 6px 0px"}}}>
 Men
</Typography>
  </NavLink>


</Grid>
<Grid  item size={{xs:10,md:4}}  >

  <NavLink to="/shoes&bags"  style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) }  >

  <Typography   sx={{fontWeight:"bold",fontSize:{xs:"4px",md:"18px"},padding:{xs:"10px 5px 10px 5px",md:"6px 0px"}}}>
Shoes & Bags
</Typography>
  </NavLink>
</Grid>
<Grid  item size={{xs:2,md:3}}  >

  <NavLink   to="/beauty"    style={({isActive})=>({textDecoration:"none",color:isActive?"red":"black"}) }  >
  <Typography   sx={{fontWeight:"bold",fontSize:{xs:"4px",md:"18px"},padding:{xs:"10px 0px 0px 15px",md:"6px 4px 6px 0px"},display:"flex",justifyContent:"end"}}>
 Beauty
</Typography>
  </NavLink>

</Grid>

</Grid>



<Grid item size={{xs:3,md: 3}} sx={{ border: "2px solid black", margin: "0px 20px", borderRadius: "7px", 


maxWidth: { xs: "120px", md: "350px" },
    flexShrink: 1,
    overflow: "hidden",
}}>
  <Box sx={{ position: "relative",
}}>
    
    <SearchIcon
      sx={{
        position: "absolute",
        top: "30%",
        left: {xs:"0px",md:"10px"},
        height:{xs:"12px",md:"25px"}
      }}
    />

    <TextField
      fullWidth
      placeholder="Search"
value={searchValue}
      onChange={ChangingInputValue}
      sx={{
          
ml:{xs:3,md:5},
          width: {
            xs: '80px',  
            md: '338px',  
          },
          height: {
            xs: '23px',   
            md: '56px',   
          },
          '& .MuiInputBase-input': {
            padding: { xs: "3px 8px", md: "17px" }, 
            fontSize: { xs: "12px", md: "16px" },
          },
      }}
    />
  </Box>
</Grid>


<Grid item size={{xs:4,md: 3}} sx={{display:"flex",alignItems:"center"}}  >

<Grid  item size={{xs:12}}  sx={{display:"flex",alignItems:"center",gap:{xs:5,md:7}}}>
  <Grid item  size={{xs:2,md: 3}}  >
    
  <Button variant="contained"    onClick={handling}
  sx={{ minWidth: { xs: "40px", md: "80px" },
  padding: { xs: "2px 4px", md: "6px 12px" },
  height: { xs: "20px", md: "36px" }}}
  
  
  >
      <Typography    sx={{fontSize:{xs:"5px",md:"15px"}}}>
    MORE
    </Typography>
    </Button>
  </Grid>

<Grid item size={{xs:1,md: 12}}  sx={{display:"flex",height:{xs:"30px",md:"40px"},paddingTop:{xs:"7px",md:"7px"},bgcolor:{xs:'none',md:'#FFB900'},border:{xs:"2px solid none",md:"2px solid #FFB900"},justifyContent:"center", 
    }}> 

<Link   style={{textDecoration:"none"}} >
  
<Typography    sx={{fontSize:{xs:"5px",md:"15px"},color:"black"}}  onClick={handleOpenSignIn}>
Sign In 
</Typography>
</Link>

<SignIn open={openSignIn} onClose={handleCloseSignIn} />

<Typography   sx={{padding:{xs:"0px",md:"1px 3px 0px 3px"}}}>
    /
</Typography> 

<Link  style={{textDecoration:"none"}} >

<Typography   sx={{fontSize:{xs:"5px",md:"15px"},color:"black"}}  onClick={handleOpenSignIn}>
 Sign Up
</Typography>
</Link>

<SignIn open={openSignIn} onClose={handleCloseSignIn} />

</Grid>

</Grid>

<Grid  item size={{xs:2,md: 5}} sx={{mr:{xs:2,md:0}}} >
<Grid  item size={{xs:3,md: 10}}   sx={{display:"flex",justifyContent:"center",marginLeft:{xs:"0px",md:"10px"},}} >

  <StyledRating
        name="customized-color"
        max={1}
        defaultValue={0}
        icon={<FavoriteIcon fontSize="inherit"  />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: 'black',height:{xs:"7px",md:"30px"},ml:{xs:2,md:0} }} />}
      />
</Grid> 

<Grid item  size={{xs:3,md: 12}}   >
<Typography    sx={{textAlign:"end",color:"black",fontSize:{xs:"5px",md:"16px"},}}>
 favourites
</Typography>
</Grid> 

</Grid> 



<Grid  item size={{xs:2,md: 5}}   >

<Grid  item size={{xs:3,md: 10}}   sx={{display:"flex",justifyContent:"center",marginLeft:{xs:"6px",md:"15px"},}} >
<ShoppingBagIcon    sx={{height:{xs:"7px",md:"30px"}}} />
</Grid>

<Grid  item size={{xs:3,md: 12}}    sx={{display:"flex"}} >
<Typography    sx={{textAlign:"end",fontSize:{xs:"5px",md:"16px"},paddingRight:{xs:"0px",md:"10px"},pl:{xs:0,md:3}}}>
 Basket
</Typography>

<Typography    sx={{color: click ? "red" : "black",display:hide?"flex":"none",fontSize:{xs:"10px",md:"16px"},}}>
{cart}
</Typography>
</Grid>
</Grid>

</Grid> 
</Grid> 

    )
}

export default NavBar;