import {Grid,  Dialog, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React from "react"
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink } from 'react-router-dom'; 
import Button from '@mui/material/Button';


function SignIn({ open, onClose }){

    return(
       <Dialog open={open} onClose={onClose} maxWidth="md">

        <Box   sx={{ boxSizing: 'border-box',bgcolor:"white",height:"57vh",width:"45vw",border:"1px solid black",borderRadius:"4px"}} >
        <Grid   container  columns={{ xs: 12 }}   >
        <Grid size={{xs:12}}  sx={{display:"flex",justifyContent:"flex-end",pr:3,pt:2,pb:1}}   >
        <IconButton onClick={onClose}>

       <ClearIcon    />
       </IconButton>

       </Grid>

<Box    sx={{width:"45vw",pl:14}}>
       <Grid size={{xs:12}}     >
       <Typography   sx={{fontSize:"35px"}} >
Sign up or Sign in

</Typography>
       </Grid>

       <Grid size={{xs:12}}    >
       <Typography   sx={{fontSize:"14px",pt:1,pb:1,color:"#dcdcdc"}} >
Enjoy the convenience of a single account across all participating brands

</Typography>
       </Grid>
       

       <Grid size={{xs:12}}   >
       
       <Typography   sx={{fontSize:"20px",fontStyle:"bold",paddingBottom:"2px"}} >
Mobile Number
</Typography>              </Grid>

              <Grid size={{xs:12}}    >

              <Box sx={{ position: "relative", width: "30vw",border:"2px solid black"
}}>
    

       <Typography   sx={{fontSize:"15px",fontStyle:"bold",position: "absolute",
        top: "30%",
        left: "5px",}} >
+91
</Typography>  
      
    <TextField
      fullWidth
      placeholder="Enter your mobile number"
      sx={{
          paddingLeft: "40px", 
          height:"60%",
          width:"92%",

      }}
    />
  </Box>


              </Grid>

              <Grid size={{xs:12}}  sx={{display:"flex"}}   >
       

              <Typography   sx={{fontSize:"14px",pr:1,pt:2,pb:2
        }} >
By creating your account you agree to our
</Typography>  

       <NavLink   to="/terms&condition" style={{textDecoration:"none"}}>

       <Typography   sx={{fontSize:"14px",color:'#FFB900',pt:2,pb:2
       }} >
Terms and Conditions
</Typography>

       </NavLink>
              </Grid>
              
              </Box>

              </Grid>

              <Box size={{xs:12}}   sx={{width:"60%",border:"1px solid #dcdcdc" ,ml:17}}  >

</Box>

              <Box   sx={{display:"flex",justifyContent:"flex-end",mr:13,mt:3}}>

              <Grid size={{xs:12}}   sx={{width:"16vw",height:"8vh"}}   >

<Button variant="contained"    sx={{ bgcolor: '#FFB900',width:"100%",height:"100%" }} >
<Typography    sx={{fontSize:"15px",color:"white"}}>
 Continue
</Typography>
</Button>
          </Grid>
              </Box>


        </Box>
  
        </Dialog>


    )
}



export default SignIn;