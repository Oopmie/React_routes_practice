import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2/Page2'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/Page1' index element = {<Page1/>}/>
          <Route path='/Page2' element = {<Page2/>}/>
          <Route path='/Home' element={<Page1 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
