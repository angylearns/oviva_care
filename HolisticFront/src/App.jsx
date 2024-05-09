import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Navbar_admin from './components/navbar/Navbar_admin';

function App() {


  return (
    <>
      <Navbar/>
      <Navbar_admin />
      <Recipe/>
      <Footer/>
    </>
  )
}

export default App;
