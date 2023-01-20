import React from 'react'
import Footer from '../landingpages/Footer'
import Landingpagebelowtop from '../landingpages/Landingpagebelowtop'
import Landingpage from '../landingpages/Landingpagetop'


const Mainlandingpage = () => {
  return (
    <div style={{fontfamily: 'Open Sans'}}>
        
        <Landingpage/>
   <Landingpagebelowtop/>
   <Footer/>
    </div>
  )
}

export default Mainlandingpage