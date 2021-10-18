import React, { useEffect } from 'react'
import './App.scss'
import Banner from "./components/Banner/Banner";
import Banner2Section from './components/Banner2Section/Banner2Section.jsx';
import Banner3Section from './components/Banner3Section/Banner3Section';
import CardSection from './components/CardSection/CardSection';
import Footer from './components/Footer/Footer';
import FormSection from './components/FormSection/FormSection';
import Iframe from './components/Iframe/Iframe';
import Navbar from './components/Navbar/Navbar.jsx'
import ServicesSection from './components/ServicesSection/ServicesSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import WorkSection from './components/WorkSection/WorkSection';
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <CardSection/>
      <ServicesSection/>
      <Banner2Section/>
      <WorkSection/>
      <Banner3Section/>
      <FormSection/>
      <TestimonialSection/>
      <Iframe/>
      <Footer/>
    </div>
  );
}

export default App;
