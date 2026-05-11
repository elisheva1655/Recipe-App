import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { LikedPage } from './pages/LikedPage';
import {PageNotFound} from './pages/PageNotFound';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/favorites" element={<LikedPage/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
