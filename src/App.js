import React, { lazy, useState,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundaries  from "./ErrorBoundaries";
import {Pagefound} from  "./Pages/Pagefound"
import NavBar from './Navbar';
import { SearchContext, FinalDataContext }  from "./MainComponent/SearchContext";
import  imagesW  from './data/imagesW';
import imagesM from "./data/imagesM";
import imagesB from './data/imagesShoe&Bags';
import imagesP from "./data/imagesBeauty"
const LandingPage=lazy(()=> import("./Pages/LandingPage") )
const TotalImagesWomen=lazy(()=> import('./Pages/WomenPages/TotalImages') )
const TotalImagesWoman=lazy(()=> import('./Pages/WomanPages/TotalImagesWomen') )
const LandingPageShoeBag=lazy(()=> import("./Pages/ShoesBags/TotalShoeBagImages") )
const TotalImagesBeauty=lazy(()=> import("./Pages/Beauty/TotalImages") )

function App() {

  const[searchValue,setSearchValue]=useState("")
  const [filtersData, setFiltersData] = useState([]);
  const[show,setShow]=useState(false)
  const[cart,setCart]=useState(0)
  const[hide,setHide]=useState(false)
const [click,setClick]=useState(false)

  return (
    <div className="App"  >
      <BrowserRouter>
 <SearchContext.Provider    value={{searchValue,setSearchValue}}>
 <FinalDataContext.Provider   value={{filtersData,setFiltersData,imagesW,setShow,show,cart,setCart,click,setClick,hide,setHide,imagesM,imagesB,imagesP,}} >
      <NavBar   />

<Routes>
  <Route   path="/"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

  <ErrorBoundaries  >
  <LandingPage  />
  </ErrorBoundaries>
  </Suspense>
  } />
  <Route   path="/women"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

   <ErrorBoundaries  >
  <TotalImagesWomen     />
  </ErrorBoundaries>
  </Suspense>
  }  />
  <Route    path="/men"  element={ 
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

   <ErrorBoundaries  >
  <TotalImagesWoman />
  </ErrorBoundaries>
  </Suspense>
  } />
  <Route     path="/shoes&bags"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

  <ErrorBoundaries  >
  <LandingPageShoeBag />

</ErrorBoundaries>
</Suspense>
} />
  <Route    path="/beauty"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

  <ErrorBoundaries  >
  <TotalImagesBeauty />
  </ErrorBoundaries>
  </Suspense>
  } />
  <Route   path="*"  element={<Pagefound  />}  />

</Routes>

</FinalDataContext.Provider>
</SearchContext.Provider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
