

import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
 

// pages
import Contact from '../pages/Contact';
import About from '../pages/About';
import Footer from '../components/layout/Footer';



import Regular from '../pages/CTOspecialized/Regular';
import Beginner from '../pages/Regular/Beginner';
import Intermediate from '../pages/Regular/Intermediate';
import Advanced from '../pages/Regular/Advanced';


import Weekend from '../pages/CTOspecialized/Weekend';
import Beg from '../pages/Weekend/Beg';
import Inter from '../pages/Weekend/Inter';
import AD from '../pages/Weekend/AD';

import Home from '../pages/Home';
import Hero from '../containers/Hero';




import Cto from '../pages/CTOspecialized/Cto';
import Card from '../components/Card';
import AiAlgoritm from '../pages/specialized/AiAlgoritm';
import FunCoding from '../pages/specialized/FunCoding';
import MobileApp from '../pages/specialized/MobileApp';
import ComputerVision from '../pages/specialized/ComputerVision';
import Robotics from '../pages/specialized/Robotics';
import Webdesigning from '../pages/specialized/WebDesigning';
import Hardware from '../pages/specialized/Hardware';
import IOT from '../pages/specialized/IOT';
import OnlineClasses from '../pages/forfooter/OnlineClasses'
import Appointment from '../pages/forfooter/Appointment'
import AboutUs from '../pages/forfooter/AboutUs'
import OurTeam from '../pages/forfooter/OurTeam'
import JoinNow from '../pages/joinnow/JoinNow'
import LearnMore from '../pages/learnmore/LearnMore'
import AdrsInfo from '../pages/forfooter/AdrsInfo'
 
import Classes from '../pages/forfooter/Classes'
 

const App = () => {
  return (
    <Router>
      <>
 <Routes>
          <Route  exact="true" path="/" element={<Home />} />
          <Route  exact="true" path="/OurTeam" element={<OurTeam />} />
          <Route  exact="true" path="/OnlineClasses" element={<OnlineClasses />} />
          <Route  exact="true" path="/Appointment" element={<Appointment />} />
          <Route  exact="true" path="/AboutUs" element={<AboutUs />} />
          <Route  exact="true" path="/JoinNow" element={<JoinNow />} />
          <Route  exact="true" path="/LearnMore" element={<LearnMore />} />
          <Route  exact="true" path="/AdrsInfo" element={<AdrsInfo />} />
          
          <Route  exact="true" path="/Classes" element={<Classes />} />
      <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Regular" element={<Regular />} />
          <Route path="/Beginner" element={<Beginner />} />
          
          <Route path="/Intermediate" element={<Intermediate />} />
          <Route path="/Advanced" element={<Advanced />} />
          <Route path="/Weekend" element={<Weekend />} />
          <Route path="/Beg" element={<Beg />} />
          <Route path="/Inter" element={<Inter />} />
          <Route path="/AD" element={<AD />} />
          <Route path="/Cto" element={<Cto />} />
          <Route path="/AiAlgoritm" element={<AiAlgoritm />} />
          <Route path="/FunCoding" element={<FunCoding />} />
          <Route path="/MobileApp" element={<MobileApp />} />
          <Route path="/ComputerVision" element={<ComputerVision />} />
          <Route path="/Robotics" element={<Robotics />} />
          <Route path="/Webdesigning" element={<Webdesigning />} />
          <Route path="/Hardware" element={<Hardware />} />
          <Route path="/IOT" element={<IOT />} />
          <Route path="/Card" element={<Card />} />
       </Routes>

 
      </>
      <Footer />
    </Router>
  )
}

export default App
