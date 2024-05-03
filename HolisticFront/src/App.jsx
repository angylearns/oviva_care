import { useState } from 'react'
import './App.css'
import Recipe from './components/recipe/Recipe';
import FormContact from './components/formContact/FormContact';
import AdminPerson from './components/adminPerson/AdminPerson';
import AddPerson from './components/adminPerson/AddPerson';

function App() {


  return (
    <>
      {/* <Recipe/> */}
      {/* <FormContact/> */}
      <AdminPerson/>
      <AddPerson/>
    </>
  )
}

export default App;
