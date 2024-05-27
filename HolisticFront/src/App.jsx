import './App.css'

import LoginView from './views/LoginView.jsx';
import RegisterView from './views/RegisterView.jsx';
import BlogView from './views/BlogView.jsx';
import RecipeView from './views/RecipeView.jsx';
import SportView from './views/SportView.jsx';
import ExpertView from './views/ExpertView.jsx';
import FAQView from './views/FAQView.jsx';
import PoliticView from './views/PoliticView.jsx';
import AdminUserView from './views/AdminUserView.jsx';
import AdminVideoView from './views/AdminVideoView.jsx';
import AdminRecipeView from './views/AdminRecipeView.jsx';
import AdminFAQView from './views/AdminFAQView.jsx';
import HomeView from './views/HomeView.jsx';
import WhoIAmView from './views/WhoIAmView.jsx';



function App() {
  return (
    <>
      {/* <Recipe/> */}
      {/* <VideoList/> */}
      {/* <UsersVideos/> */}
      {/* <UsersRecipe/> */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Register /> */}
      {/* <Login_user /> */}
      {/* <Recipe/> */}
      {/* <Footer /> */}
      {/* <Cuestionario /> */}
      {/* <Pretest /> */}
      {/* <FormContact/> */}
       {/* <AdminPerson/>  */}
      {/* <Question/> */}
      {/* <QuestionContact/> */}
      {/* <QaAdmin/> */}
     {/* <Calendar/>  */}
      {/* <Article/> */}
      {/* <Symptoms/> */}
      {/* <Experts/> */}

      <HomeView/>
      <RegisterView/>
      <LoginView/>
      <AdminUserView/>
      <AdminRecipeView/>
      <RecipeView/>
      <AdminVideoView/>
      <AdminFAQView/>
      <SportView/>
      <WhoIAmView/>
      <FAQView/>
      <BlogView/>
      <ExpertView/>
      <PoliticView/>
      
      </>

    
  )
}

export default App;
