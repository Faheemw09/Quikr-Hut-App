

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostAdd from '../form/PostAdd'
import Home from './Home'
import { Productpage } from './Productpage'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/postadd" element={<PostAdd/>} />
    <Route path="/product" element={<Productpage/>} />


   
</Routes>


    </div>
  )
}

export default AllRoutes