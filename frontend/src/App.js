import React from 'react';
import Login from "./jess"
import HomePage from "../src/pages/BlogHome"
import Navbar from "./components/NavBar"
import CreateBlog from './pages/CreateBlog';
import Protected from './pages/Protected';
import { AuthContextProvider } from './components/AuthContext';
import Account from './pages/Account';
import Signin from './pages/SignIn';
import Avatar from './pages/Avatar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegPage from './pages/RegPage'
import AllBlogs from './pages/ShowAllBlogs'
import ShowMyBlogs from './pages/ShowMyBlogs';
import UpdateUser from './pages/UpdateUser';
import EditMyBlogs from './pages/EditMyBlogs';
import Comments from './pages/Comments'

import MoreBlogInfo from './pages/MoreBlogInfo';
import ShowProfile from './pages/ShowProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <div>
        <AuthContextProvider>
        <Navbar />
        <Routes>
        <Route
            path='/CreateBlog'
            element={<CreateBlog />}
          />      
          <Route
            path='/EditMyBlogs/:id'
            element={<EditMyBlogs />}
          />  
          <Route
            path='/MoreBlogInfo/:id'
            element={<MoreBlogInfo />}
          />    

          <Route
            path='/Comments'
            element={<Comments />}
          />   

       
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route 
            path ='/Login'
            element = {<Login />}
          />
          <Route 
            path ='/RegPage'
            element = {<RegPage />}
          />
          <Route 
            path ='/UpdateUser'
            element = {<UpdateUser />}
          />
          <Route 
            path ='/Avatar'
            element = {<Avatar />}
          />
          <Route 
            path ='/ShowAllBLogs'
            element = {<AllBlogs />}
          />
          <Route 
            path ='/ShowMyBlogs'
            element = {<ShowMyBlogs />}
          />

<Route 
            path ='/ShowProfile'
            element = {<ShowProfile  />}
          />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />   
 

 
        </Routes>
        </AuthContextProvider>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App