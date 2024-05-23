import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import FormContact from './components/formContact/FormContact';
import AdminPerson from './components/adminPerson/AdminPerson';
import AddPerson from './components/adminPerson/AddPerson';
import Question from './components/question/Question';
import QuestionContact from './views/QuestionContact';
import QaAdmin from './components/qaadmin/QaAdmin';
import Calendar from './components/calendary/Calendary';
import Article from './components/article/Article';
import Symptoms from './components/symptoms/Symptoms'

function App() {


  return (
    <>
      {/* <Recipe/> */}
      {/* <FormContact/> */}
       {/*<AdminPerson/>*/} 
      {/* <Question/> */}
      {/*<QuestionContact/>*/}
      <QaAdmin/>
     <Calendar/> 
      <Article/>
      <Symptoms/>

    </>
  )
}

export default App;
