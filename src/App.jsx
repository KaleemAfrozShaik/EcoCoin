import React, { useState } from 'react';
import './App.css'
// import Footer from './components/Footer/Footer'
// import Hero2 from './components/Footer/Hero2'
// import Hero3 from './components/Footer/Hero3'
// import Gallery from './components/Footer/Gallery';
import CarbonFootprintCalculator from './components/Footer/CarbonFootPrintCalculator';
import RedeemPage from './components/Footer/RedeemPage';
const App = () => {
  // const [mode,setMode]=useState('light');
  // const toggleMode =()=>{
  //   setMode((prevMode)=>(prevMode === 'light' ? 'dark' : 'light'));
  // }
  // const color=(prevMode)=>{
  //     return(
  //       prevMode === 'light' ? red : blue
  //     )
  // }
  return (
    <div>
      {/* <Footer mode={mode} toggleMode={toggleMode} style={color}/>  */}
      {/* <Hero2/> */}
      {/* <Hero3/> */}
      {/* <Gallery/> */}
      {/* <CarbonFootprintCalculator/> */}
      <RedeemPage/>
    </div>
  )
}

export default App