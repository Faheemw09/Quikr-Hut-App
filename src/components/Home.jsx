import React from 'react'
import Footer from '../landingpages/Footer'
import Landingpagebelowtop from '../landingpages/Landingpagebelowtop'
import Landingpage from '../landingpages/Landingpagetop'
import Landingproduct from '../landingpages/Landingproduct'
import Navbar from './Navbar'
import ProductDisplay from './ProductDisplay'

import Images from '../landingpages/Images'
const Home = () => {
  return (
    <div style={{fontfamily: 'Open Sans'}}>
        <Navbar/>
        <Landingpage/>
   <Landingpagebelowtop/>
   <br/>
   <br/>
   
  <Images/>
   <br/>

   <br/>
   <br/>
   <br/>
   
   <Landingproduct/>
  
   <Footer/>
    </div>
  )
}

export default Home