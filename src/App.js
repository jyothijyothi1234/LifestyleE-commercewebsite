import React, { lazy, useState,Suspense,Profiler } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundaries from "./ErrorBoundaries";
import {Pagefound} from "./Pages/Pagefound";
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




function onRender (

  id,
  Phase,
  ActualDuration,
  BaseDuration,
  startTime,
  currentTime,
  interaction


){

  console.log("id:",id)
  console.log("  Phase:",  Phase)
  console.log("ActualDuration:",ActualDuration)
  console.log("BaseDuration:",BaseDuration)
  console.log(" startTime:", startTime)
  console.log(" currentTime:", currentTime)
  console.log("interaction:",interaction)


}
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
 <Profiler  id="NavBar"  onRender={onRender}>

      <NavBar   />
      </Profiler>

<Routes>
  <Route   path="/"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

  <ErrorBoundaries  >

    <Profiler  id="landingpage"  onRender={onRender}>
  <LandingPage  />
  </Profiler>
  </ErrorBoundaries>
  </Suspense>
  } />
  <Route   path="/women"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

   <ErrorBoundaries  >
   <Profiler  id="TotalImagesWomen"  onRender={onRender}>

  <TotalImagesWomen     />
  </Profiler>

  </ErrorBoundaries>
  </Suspense>
  }  />
  <Route    path="/men"  element={ 
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

   <ErrorBoundaries  >
   <Profiler  id="TotalImagesWoman"  onRender={onRender}>

  <TotalImagesWoman />
  </Profiler>
  </ErrorBoundaries>
  </Suspense>
  } />
  <Route     path="/shoes&bags"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

  <ErrorBoundaries  >
  <Profiler  id="LandingPageShoeBag"  onRender={onRender}>

  <LandingPageShoeBag />
  </Profiler>
</ErrorBoundaries>
</Suspense>
} />
  <Route    path="/beauty"  element={
          <Suspense   fallback={<div><h1>"Loading!!!!"</h1></div>}>

  <ErrorBoundaries  >
  <Profiler  id="TotalImagesBeauty"  onRender={onRender}>

  <TotalImagesBeauty />
  </Profiler>

  </ErrorBoundaries>
  </Suspense>
  } />
  <Route   path="*"  element={
    <Profiler  id="Pagefound"  onRender={onRender}>

  <Pagefound  />
  </Profiler>

  }  />

</Routes>

</FinalDataContext.Provider>
</SearchContext.Provider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
