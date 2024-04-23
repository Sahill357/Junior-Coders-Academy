import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';
const Inter = () => {
  useEffect(() => {
    document.title = 'Weekend/Intermediate'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
  LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
    <main>
    <Card
    title="Intermediate   "
    description="AI and algorithms are at the forefront of technological innovation, and junior coders can embark on a rewarding journey by delving into these domains. By understanding the fundamentals, honing programming skills, and gaining practical experience, junior coders can position themselves for exciting career opportunities and contribute to shaping the future of technology. The possibilities in AI and algorithms are limitless, and it's an exciting time for aspiring coders to be part of this transformative field."

    // images for upper section
    imgup1="https://img.freepik.com/premium-vector/concept-creativity_118813-2988.jpg?size=626&ext=jpg" 
    imgup2="https://img.freepik.com/free-vector/vlogger-social-media-illustration_52683-42412.jpg?size=626&ext=jpg" 
    imgup3="https://img.freepik.com/premium-vector/well-crafted-flat-illustration-business-launch_9206-2785.jpg?size=626&ext=jpg" 
    imgup4="https://img.freepik.com/free-vector/keyword-research-illustration_335657-4690.jpg?size=626&ext=jpg" 
    imgup5="https://img.freepik.com/free-vector/personal-growth-concept-illustration_114360-14321.jpg?size=626&ext=jpg" 
    imgup6="https://img.freepik.com/free-vector/collab-concept-illustration_114360-4194.jpg?size=626&ext=jpg" 


    // images for lower section
    imgdown1="https://img.freepik.com/premium-vector/concept-creativity_118813-2988.jpg?size=626&ext=jpg"  
    imgdown2="https://img.freepik.com/free-vector/vlogger-social-media-illustration_52683-42412.jpg?size=626&ext=jpg" 
    imgdown3="https://img.freepik.com/premium-vector/well-crafted-flat-illustration-business-launch_9206-2785.jpg?size=626&ext=jpg"  
    imgdown4="https://img.freepik.com/free-vector/keyword-research-illustration_335657-4690.jpg?size=626&ext=jpg"  
    imgdown5="https://img.freepik.com/free-vector/personal-growth-concept-illustration_114360-14321.jpg?size=626&ext=jpg"  
    imgdown6="https://img.freepik.com/free-vector/collab-concept-illustration_114360-4194.jpg?size=626&ext=jpg"  
    />
    </main>
    </Layout>
  )
}

export default Inter
