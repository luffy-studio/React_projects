import React from 'react'
import {Blog, Footer ,Possibility, Feature, WhatGPT3 ,Header} from './containers';
import { Brand,CTA,Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div className="APP">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>    
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>   
      
        
    </div>
    
  )
}

export default App
