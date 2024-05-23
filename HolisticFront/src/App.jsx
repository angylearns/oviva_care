import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login_user from './components/login/Login_user';
import Register from './components/register/Register';
import Hero from './components/hero/Hero'
import FormContact from './components/formContact/FormContact';
import AdminPerson from './components/adminPerson/AdminPerson';
import AddPerson from './components/adminPerson/AddPerson';
import Question from './components/question/Question';
import QuestionContact from './views/QuestionContact';

function App() {


  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Register />
      {/* <Login_user /> */}
      {/* <Recipe/> */}
      <Footer />
    </>
  )
}

export default App;
