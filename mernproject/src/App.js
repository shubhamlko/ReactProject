import Navbar from './Component/LoginRegister/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Filter from "./Component/FilterExample/Filter";
import Home from "./Component/Home";
import TourPlan from "./Component/DataBindExample/TourPlan";
import FormBasic from "./Component/Form/FormBasic";
import Main from "./Component/LoginRegister/Main";
import HomeLoginRegister from "./Component/LoginRegister/pages/Home"
import Login from "./Component/LoginRegister/auth/Login";
import Signup from "./Component/LoginRegister/auth/Signup";
import Dashboard from "./Component/LoginRegister/pages/Dashboard";
import {useState} from 'react'
import BlogMain from './Component/BlogsExample/BlogMain';
import CategoryPage from './Component/BlogsExample/CategoryPage';
import TagPage from './Component/BlogsExample/TagPage';
import BlogPage from './Component/BlogsExample/BlogPage';

function App() {

  const [isLoggedIn , setIsLoggedIn] =  useState(false);
  return (
   <>
   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/databinding" element={<TourPlan />}/>
          <Route path="/filter-example" element={ <Filter />}/>
          <Route path="/form-basic" element={<FormBasic />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/LoginRegister" element={<Main isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}  />}/>
          <Route path="/loginHome" element={<HomeLoginRegister/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/register" element={ <Signup  setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/blogs" element={<BlogMain />}/>
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/tag/:tag" element={<TagPage/>} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
    
 
     
      
   </>
  );
}

export default App;
