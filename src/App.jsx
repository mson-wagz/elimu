import React from 'react';
import LandingPage from './LandingPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Category from './Category'; // Ensure this component is implemented
// import Courses from './Courses'; // Ensure this component is implemented
// import AboutUs from './AboutUs'; // Ensure this component is implemented
// import Contact from './Contact'; // Ensure this component is implemented
// import Login from './Login'; // Ensure this component is implemented
// import SignUp from './SignUp'; // Ensure this component is implemented
// import AppRoutes from './router';

const App = () => {
  return (
    
    <LandingPage/>
    
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/category" element={<Category />} />
    //     <Route path="/student/courses" element={<Courses />} />
    //     <Route path="/aboutus" element={<AboutUs />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<SignUp />} />
    //     {/* Nested routes for categories */}
    //     <Route path="/category/grade-1-6" element={<Category />} />
    //     <Route path="/category/jssc" element={<Category />} />
    //     <Route path="/category/ssc" element={<Category />} />
    //     <Route path="/category/higher-learning" element={<Category />} />
    //     {/* Nested routes for courses */}
    //     <Route path="/courses/popular" element={<Courses />} />
    //     <Route path="/courses/new" element={<Courses />} />
    //     <Route path="/courses/free" element={<Courses />} />
    //     <Route path="/courses/premium" element={<Courses />} />
    //   </Routes>
    // </Router>
  );
};

export default App;