import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <>
      <Navbar/>
      <Recipe/>
      <Footer/>
    </>
  )
}

export default App;
