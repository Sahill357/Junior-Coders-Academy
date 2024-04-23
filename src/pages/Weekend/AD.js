import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';
const AD = () => {  
  useEffect(() => {
    document.title = 'Weekend/Advanced'; // Set the title when the component mounts
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
    
    title="Advanced  "
                description="AI and algorithms are at the forefront of technological innovation, and junior coders can embark on a rewarding journey by delving into these domains. By understanding the fundamentals, honing programming skills, and gaining practical experience, junior coders can position themselves for exciting career opportunities and contribute to shaping the future of technology. The possibilities in AI and algorithms are limitless, and it's an exciting time for aspiring coders to be part of this transformative field."

                // images for upper section
                imgup1="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-learning-from-home_52683-80252.jpg?size=626&ext=jpg" 
                imgup2="https://img.freepik.com/free-vector/organic-flat-about-me-concept-illustrated_23-2148890399.jpg?size=626&ext=jpg" 
                imgup3="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-943.jpg?size=626&ext=jpg" 
                imgup4="https://img.freepik.com/free-vector/hand-drawn-rebranding-illustration_23-2149531353.jpg?size=626&ext=jpg" 
                imgup5="https://img.freepik.com/free-vector/creativity-concept-illustration_114360-1176.jpg?size=626&ext=jpg" 
                imgup6="https://img.freepik.com/premium-vector/creative-business-idea-illustration_348773-191.jpg?size=626&ext=jpg" 


                // images for lower section
                imgdown1="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-learning-from-home_52683-80252.jpg?size=626&ext=jpg"  
                imgdown2="https://img.freepik.com/free-vector/organic-flat-about-me-concept-illustrated_23-2148890399.jpg?size=626&ext=jpg" 
                imgdown3="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-943.jpg?size=626&ext=jpg"  
                imgdown4="https://img.freepik.com/free-vector/hand-drawn-rebranding-illustration_23-2149531353.jpg?size=626&ext=jpg"  
                imgdown5="https://img.freepik.com/free-vector/creativity-concept-illustration_114360-1176.jpg?size=626&ext=jpg"  
                imgdown6="https://img.freepik.com/premium-vector/creative-business-idea-illustration_348773-191.jpg?size=626&ext=jpg"  />
    </main>
    </Layout>
  )
}

export default AD
