import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import FormContact from './components/formContact/FormContact';
import AdminPerson from './components/adminPerson/AdminPerson';
import AddPerson from './components/adminPerson/AddPerson';
import Question from './components/question/Question';
import QuestionContact from './views/QuestionContact';
import QaAdmin from './components/qaadmin/QaAdmin';
import Calendar from './components/calendary/calendary';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login_user from './components/login/Login_user';

function App() {


  return (
    <>
      <Navbar />
      {/* <Recipe/> */}
      {/* <FormContact/> */}
       {/*<AdminPerson/>*/} 
      {/* <Question/> */}
      {/*<QuestionContact/>*/}
      {/*<QaAdmin/>*/} 
      <Calendar/> 
      < Login_user />
      <Footer />

    </>
  )
}

export default App;
