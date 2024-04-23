import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';

const AiAlgorithm = () => {
  useEffect(() => {
    document.title = 'Specialized/AiAlgoritm'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
           <Card title="AI & Algorithm"
                description="AI and algorithms are at the forefront of technological innovation, and junior coders can embark on a rewarding journey by delving into these domains. By understanding the fundamentals, honing programming skills, and gaining practical experience, junior coders can position themselves for exciting career opportunities and contribute to shaping the future of technology. The possibilities in AI and algorithms are limitless, and it's an exciting time for aspiring coders to be part of this transformative field."

                // images for upper section
                imgup1="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept-illustration-ai-machine-learning-artificial-intelligence-evolution-high-tech-cutting-edge-technology-cognitive-robotics_335657-483.jpg?w=740&t=st=1694586614~exp=1694587214~hmac=35dd342d1226a39e9bb1307f16ed0414aa8cddd621c0f36c90e057b9cc47efcd" 
                imgup2="https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149237081.jpg?size=626&ext=jpg" 
                imgup3="https://img.freepik.com/free-vector/deconstructed-robot-concept-illustration_114360-4193.jpg?size=626&ext=jpg" 
                imgup4="https://img.freepik.com/free-vector/hand-drawn-rebranding-illustration_23-2149531350.jpg?size=626&ext=jpg" 
                imgup5="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept-illustration_335657-3793.jpg?size=626&ext=jpg" 
                imgup6="https://img.freepik.com/free-vector/people-creating-robot-concept-illustration_114360-11502.jpg?size=626&ext=jpg" 


                // images for lower section
                imgdown1="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept-illustration-ai-machine-learning-artificial-intelligence-evolution-high-tech-cutting-edge-technology-cognitive-robotics_335657-483.jpg?w=740&t=st=1694586614~exp=1694587214~hmac=35dd342d1226a39e9bb1307f16ed0414aa8cddd621c0f36c90e057b9cc47efcd"  
                imgdown2="https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149237081.jpg?size=626&ext=jpg" 
                imgdown3="https://img.freepik.com/free-vector/deconstructed-robot-concept-illustration_114360-4193.jpg?size=626&ext=jpg"  
                imgdown4="https://img.freepik.com/free-vector/hand-drawn-rebranding-illustration_23-2149531350.jpg?size=626&ext=jpg"  
                imgdown5="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept-illustration_335657-3793.jpg?size=626&ext=jpg"  
                imgdown6="https://img.freepik.com/free-vector/people-creating-robot-concept-illustration_114360-11502.jpg?size=626&ext=jpg"  
              
                />     
        </main>
    </Layout>
  )
}

export default AiAlgorithm