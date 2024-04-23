import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';


const MobileApp = () => {
  useEffect(() => {
    document.title = 'Specialized/MobileApp'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card title="Mobile App Development"
                description= "Mobile app development is a rewarding journey for junior coders. It combines creativity, problem-solving, and real-world applications, providing valuable skills and insights into the world of software development. As junior coders explore this exciting field, they not only gain proficiency in app development but also nurture their passion for creating innovative solutions that can positively impact society. Mobile app development is not just about writing code; it's about building a digital world where imagination knows no bounds."
                  // images for upper section
                  imgup1="https://img.freepik.com/free-vector/mobile-apps-concept-illustration_114360-680.jpg?size=626&ext=jpg" 
                  imgup2="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg?size=626&ext=jpg" 
                  imgup3="https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?size=626&ext=jpg" 
                  imgup4="https://img.freepik.com/free-vector/app-testing-optimization-ux-designer-developer-smartphone-interface-female-cartoon-character-programming-mobile-phone-application_335657-2665.jpg?size=626&ext=jpg" 
                  imgup5="https://img.freepik.com/premium-photo/flat-illustration-customer-support_891428-719.jpg?size=626&ext=jpg" 
                  imgup6="https://img.freepik.com/premium-vector/app-development-concept-modern-flat-design-developer-places-buttons-layout_9209-6727.jpg?size=626&ext=jpg" 
  
  
                  // images for lower section
                  imgdown1="https://img.freepik.com/free-vector/mobile-apps-concept-illustration_114360-680.jpg?size=626&ext=jpg"  
                  imgdown2="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg?size=626&ext=jpg" 
                  imgdown3="https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?size=626&ext=jpg"  
                  imgdown4="https://img.freepik.com/free-vector/app-testing-optimization-ux-designer-developer-smartphone-interface-female-cartoon-character-programming-mobile-phone-application_335657-2665.jpg?size=626&ext=jpg"  
                  imgdown5="https://img.freepik.com/premium-photo/flat-illustration-customer-support_891428-719.jpg?size=626&ext=jpg"  
                  imgdown6="https://img.freepik.com/premium-vector/app-development-concept-modern-flat-design-developer-places-buttons-layout_9209-6727.jpg?size=626&ext=jpg"  
                
                
                />
        </main>
    </Layout>
  )
}

export default MobileApp
