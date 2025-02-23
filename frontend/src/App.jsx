
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import {BrowserRouter as  Router} from "react-router-dom"
  import "./App.css";
  import  Navbar from "./components/Navbar";
  import  Hero from "./components/Hero";
  import  WorkoutSessions from "./components/WorkoutSessions";
  import  Gallery from "./components/Gallery";
  import  Pricing from "./components/Pricing";
  import  Contact from "./components/Contact";
  import  BMIcalculator from "./components/BMIcalculator";
  import  Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMIcalculator/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>

      
      
    
      
      </Router>
  )
}

export default App