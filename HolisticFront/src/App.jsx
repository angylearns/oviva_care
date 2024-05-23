import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login_user from './components/login/Login_user';
import Register from './components/register/Register';

import VideoList from './components/video/VideoList';

import UsersVideos from './components/video/UsersVideos';
import UsersRecipe from './components/recipe/UsersRecipe';

function App() {


  return (
    <>
    {/* <Register /> */}
      <Login_user />
    
      <Recipe/>
      <VideoList/>
      {/* <UsersVideos/> */}
      <UsersRecipe/>
    </>
  )
}

export default App;
