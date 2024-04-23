import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';

const Robotics = () => {
  useEffect(() => {
    document.title = 'Specialized/Robotics'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card title="Robotics"
                description="Robotics offers junior coders an exciting journey filled with creativity, problem-solving, and innovation. It is a field that combines technology and hands-on experience, enabling young minds to design and build intelligent machines that can solve real-world problems. As junior coders explore robotics, they not only develop technical proficiency but also cultivate a passion for innovation and a desire to shape the future of automation and technology. Robotics is not just about building robots; it's about nurturing a mindset of curiosity and discovery that can lead to groundbreaking advancements in science and engineering." 
                
                 // images for upper section
                 imgup1="https://img.freepik.com/free-vector/deconstructed-robot-concept-illustration_114360-6357.jpg?size=626&ext=jpg" 
                 imgup2="https://img.freepik.com/free-vector/robotic-mechanical-hand-engineering-cybernetic-arm-electronic-machine-control-system-industrial-technology-technician-with-construction-vector-isolated-concept-metaphor-illustration_335657-1348.jpg?size=626&ext=jpg" 
                 imgup3="https://img.freepik.com/free-vector/robotics-concept-illustration_114360-2454.jpg?size=626&ext=jpg" 
                 imgup4="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-2685.jpg?size=626&ext=jpg" 
                 imgup5="https://img.freepik.com/free-vector/people-creating-robot-concept-illustration_114360-11502.jpg?size=626&ext=jpg" 
                 imgup6="https://img.freepik.com/free-vector/deconstructed-robot-concept-illustration_114360-4399.jpg?size=626&ext=jpg" 
 
 
                 // images for lower section
                 imgdown1="https://img.freepik.com/free-vector/deconstructed-robot-concept-illustration_114360-6357.jpg?size=626&ext=jpg"  
                 imgdown2="https://img.freepik.com/free-vector/robotic-mechanical-hand-engineering-cybernetic-arm-electronic-machine-control-system-industrial-technology-technician-with-construction-vector-isolated-concept-metaphor-illustration_335657-1348.jpg?size=626&ext=jpg" 
                 imgdown3="https://img.freepik.com/free-vector/robotics-concept-illustration_114360-2454.jpg?size=626&ext=jpg"  
                 imgdown4="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-2685.jpg?size=626&ext=jpg"  
                 imgdown5="https://img.freepik.com/free-vector/people-creating-robot-concept-illustration_114360-11502.jpg?size=626&ext=jpg"  
                 imgdown6="https://img.freepik.com/free-vector/deconstructed-robot-concept-illustration_114360-4399.jpg?size=626&ext=jpg"  
               
                />
        </main>
    </Layout>
  )
}

export default Robotics
