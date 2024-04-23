import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';

const IOT = () => {
  useEffect(() => {
    document.title = 'Specialized/IOT'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card title="IoT"
                description="Exploring IoT is an exciting journey for junior coders, offering hands-on learning, problem-solving challenges, and an opportunity to shape the future of connected technology. It empowers young minds to understand the digital interconnectivity of everyday objects, enabling them to create innovative solutions and address real-world problems. As junior coders delve into the world of IoT, they not only gain technical proficiency but also cultivate a passion for building intelligent systems that can improve our lives. IoT exploration is not just about connecting devices; it's about exploring the limitless possibilities of a hyper-connected world and becoming the architects of the future." 
                
                    // images for upper section
                    imgup1="https://img.freepik.com/free-vector/iot-development-illustration_335657-4712.jpg?size=626&ext=jpg" 
                    imgup2="https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-2723.jpg?size=626&ext=jpg" 
                    imgup3="https://img.freepik.com/free-vector/internet-things-concept-idea-smart-wireless-electronics-modern-global-technology-connection-devices-house-appliances-isolated-flat-vector-illustration_613284-2389.jpg?size=626&ext=jpg" 
                    imgup4="https://img.freepik.com/free-vector/intranet-concept-illustration_114360-9136.jpg?size=626&ext=jpg" 
                    imgup5="https://img.freepik.com/free-vector/software-integration-concept-illustration_114360-7447.jpg?size=626&ext=jpg" 
                    imgup6="https://img.freepik.com/premium-vector/iot-internet-things-devices-connectivity-concepts-network-flat-style-with-people_194782-1655.jpg?size=626&ext=jpg" 
    
    
                    // images for lower section
                    imgdown1="https://img.freepik.com/free-vector/iot-development-illustration_335657-4712.jpg?size=626&ext=jpg"  
                    imgdown2="https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-2723.jpg?size=626&ext=jpg" 
                    imgdown3="https://img.freepik.com/free-vector/internet-things-concept-idea-smart-wireless-electronics-modern-global-technology-connection-devices-house-appliances-isolated-flat-vector-illustration_613284-2389.jpg?size=626&ext=jpg"  
                    imgdown4="https://img.freepik.com/free-vector/intranet-concept-illustration_114360-9136.jpg?size=626&ext=jpg"  
                    imgdown5="https://img.freepik.com/free-vector/software-integration-concept-illustration_114360-7447.jpg?size=626&ext=jpg"  
                    imgdown6="https://img.freepik.com/premium-vector/iot-internet-things-devices-connectivity-concepts-network-flat-style-with-people_194782-1655.jpg?size=626&ext=jpg"  
                  
                
                />
        </main>
    </Layout>
  )
}

export default IOT
