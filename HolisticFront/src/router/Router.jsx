import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Error404View from '../views/Error404View';
import HomeView from '../views/HomeView';
import FAQView from '../views/FAQView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import BlogView from '../views/BlogView';
import ExpertView from '../views/ExpertView';
import PoliticView from '../views/PoliticView';
import WhoIAmView from '../views/WhoIAmView';
import RecipeView from '../views/RecipeView';
import SportView from '../views/SportView';
import AdminUserView from '../views/AdminUserView';
import AdminVideoView from '../views/AdminVideoView';
import AdminRecipeView from '../views/AdminRecipeView';
import AdminFAQView from '../views/AdminFAQView';

import LayoutPublic from '../layouts/LayoutPublic';
import LayoutUser from '../layouts/LayoutUser';
import LayoutAdmin from '../layouts/LayoutAdmin';

import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

import { AuthProvider } from '../utils/AuthProvider';

const RouterComponent = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LayoutPublic />}>
            <Route index element={<HomeView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
            <Route path="blog" element={<BlogView />} />
            <Route path="faq" element={<FAQView />} />
            <Route path="experts" element={<ExpertView />} />
            <Route path="about" element={<WhoIAmView />} />
            <Route path="privacy_policy" element={<PoliticView />} />
            <Route path="error" element={<Error404View />} />
          </Route>
          <Route path="/user/*" element={
            <AuthProvider>
              <LayoutUser />
            </AuthProvider>
          }>
            <Route path="recipes" element={<PrivateRoute><RecipeView /></PrivateRoute>} />
            <Route path="exercise" element={<PrivateRoute><SportView /></PrivateRoute>} />
          </Route>
          <Route path="/admin/*" element={
            <AuthProvider>
              <LayoutAdmin />
            </AuthProvider>
          }>
            <Route path="manage_users" element={<AdminRoute><AdminUserView /></AdminRoute>} />
            <Route path="manage_videos" element={<AdminRoute><AdminVideoView /></AdminRoute>} />
            <Route path="manage_recipes" element={<AdminRoute><AdminRecipeView /></AdminRoute>} />
            <Route path="manage_faq" element={<AdminRoute><AdminFAQView /></AdminRoute>} />
          </Route>
        </Routes>
      </Router>
    );
  };
  
  export default RouterComponent;
