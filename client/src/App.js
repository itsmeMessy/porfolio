import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/form/page/Home/Home'
import Navbar from './components/form/Navbar/Navbar'
import Framework from './components/form/page/Framework/Framework'
import Project from './components/form/page/Project/Project'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element ={<Home />} />
          <Route path = "/framework" element = {<Framework />} />
          <Route path = "/projects" element = {<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
