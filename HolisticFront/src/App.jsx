import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login_user from './components/login/Login_user';
import Register from './components/register/Register';

import Navbar_admin from './components/navbar/Navbar_admin';

function App() {


  return (
    <>
      <Navbar />
      <Register />
      <Login_user />
      {/* <Recipe/> */}
      <Footer />
    </>
  )
}

export default App;
