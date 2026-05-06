import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/favorites" element={<RecipePage/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
