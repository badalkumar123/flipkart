import React from 'react'
import Header from './Component/Header'
import Topnav from './Component/Topnav'
import Product from './Container/Product'
import Slider from './Container/Slider'

export default function App() {
  return (
    <div>
     
      <Slider/>
     
      <Topnav/>
      <Product/>
      <Header/>
      
    </div>
  )
}
