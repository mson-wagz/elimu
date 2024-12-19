import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Category from './Category'; 
import Courses from './Courses'; 
import AboutUs from './AboutUs'; 
import Contact from './Contact'; 
import Login from './Login'; 
import SignUp from './SignUp'; 

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/student/courses" element={<Courses />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
          {/* Nested routes for categories */}
                <Route path="/category/grade-1-6" element={<Category />} />
                <Route path="/category/jssc" element={<Category />} />
                <Route path="/category/ssc" element={<Category />} />
                <Route path="/category/higher-learning" element={<Category />} />
          {/* Nested routes for courses */}
                <Route path="/courses/popular" element={<Courses />} />
                <Route path="/courses/new" element={<Courses />} />
                <Route path="/courses/free" element={<Courses />} />
                <Route path="/courses/premium" element={<Courses />} />
        </Routes>
      </Router>
    )
}
export default AppRoutes