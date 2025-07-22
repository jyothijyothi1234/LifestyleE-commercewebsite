import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import NavBar from './Navbar';
import LandingPage from   "./Pages/LandingPage";
import TotalImagesWomen from './Pages/WomenPages/TotalImages';
import TotalImagesWoman from './Pages/WomanPages/TotalImagesWomen';
import { SearchContext, FinalDataContext }  from "./MainComponent/SearchContext";
import  imagesW  from './data/imagesW';
import imagesM from "./data/imagesM";
import imagesB from './data/imagesShoe&Bags';
import imagesP from "./data/imagesBeauty"
import LandingPageShoeBag  from "./Pages/ShoesBags/TotalShoeBagImages";
import TotalImagesBeauty from "./Pages/Beauty/TotalImages";
function App() {

  const[searchValue,setSearchValue]=useState("")
  const [filtersData, setFiltersData] = useState([]);
  const[show,setShow]=useState(false)
  const[cart,setCart]=useState(0)
  const[hide,setHide]=useState(false)
const [click,setClick]=useState(false)

  return (
    <div className="App"   sx={{height:{xs:"scroll",md:0}}}>

      <BrowserRouter>
 <SearchContext.Provider    value={{searchValue,setSearchValue}}>
 <FinalDataContext.Provider   value={{filtersData,setFiltersData,imagesW,setShow,show,cart,setCart,click,setClick,hide,setHide,imagesM,imagesB,imagesP,}} >

      <NavBar   />


<Routes>
  <Route   path="/"  element={<LandingPage  />} />
  <Route   path="/women"  element={<TotalImagesWomen     />}  />
  <Route    path="/men"  element={ <TotalImagesWoman />} />
  <Route     path="/shoes&bags"  element={<LandingPageShoeBag />} />
  <Route    path="/beauty"  element={<TotalImagesBeauty />} />
</Routes>

</FinalDataContext.Provider>
</SearchContext.Provider> 

      </BrowserRouter>

    </div>
  );
}

export default App;
