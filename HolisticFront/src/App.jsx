import './App.css'
import VideoList from './components/video/VideoList';

import UsersVideos from './components/video/UsersVideos';
import UsersRecipe from './components/recipe/UsersRecipe';

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
import QaAdmin from './components/qaadmin/QaAdmin';
import Calendar from './components/calendary/Calendary';
import Article from './components/article/Article';
import Symptoms from './components/symptoms/Symptoms';
import Experts from './components/experts/Experts';

import Cuestionario from './components/cuestionario/Cuestionario.jsx';
import Pretest from './components/pretestcuestionario/pretest.jsx'
function App() {
  return (
    <>
      {/* <Recipe/> */}
      {/* <VideoList/> */}
      {/* <UsersVideos/> */}
      {/* <UsersRecipe/> */}
      <Navbar />
      {/* <Hero /> */}
      {/* <Register /> */}
      {/* <Login_user /> */}
      <Recipe/>
      <Footer />
      {/* <Cuestionario /> */}
      {/* <Pretest /> */}
      {/* <FormContact/> */}
       {/*<AdminPerson/>*/} 
      {/* <Question/> */}
      {/*<QuestionContact/>*/}
      {/* <QaAdmin/> */}
     {/* <Calendar/>  */}
      {/* <Article/> */}
      {/* <Symptoms/> */}
      {/* <Experts/> */}

    </>
  )
}

export default App;
