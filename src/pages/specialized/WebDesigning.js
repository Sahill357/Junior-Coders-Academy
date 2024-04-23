import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';

const WebDesigning = () => {
  useEffect(() => {
    document.title = 'Specialized/WebDesigning'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card title="Web Designing"
                description="Web designing is a dynamic and rewarding journey for junior coders, offering a fusion of technology and artistry. It empowers young minds to shape the digital landscape, craft engaging user experiences, and communicate ideas effectively through websites. As junior coders explore the world of web designing, they not only gain technical skills but also cultivate an appreciation for the aesthetic and functional aspects of digital communication. Web designing is not just about creating websites; it's about designing the digital experiences that shape our interconnected world."
                
                  // images for upper section
                  imgup1="https://img.freepik.com/free-vector/design-team-concept-illustration_114360-5148.jpg?size=626&ext=jpg" 
                  imgup2="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?size=626&ext=jpg" 
                  imgup3="https://img.freepik.com/free-vector/video-game-developer-concept-illustration_114360-6106.jpg?size=626&ext=jpg" 
                  imgup4="https://img.freepik.com/free-vector/insert-block-concept-illustration_114360-4291.jpg?size=626&ext=jpg" 
                  imgup5="https://img.freepik.com/free-vector/ui-ux-team-concept-illustration_114360-10982.jpg?size=626&ext=jpg" 
                  imgup6="https://img.freepik.com/free-vector/select-house-concept-illustration_114360-4448.jpg?size=626&ext=jpg" 
  
  
                  // images for lower section
                  imgdown1="https://img.freepik.com/free-vector/design-team-concept-illustration_114360-5148.jpg?size=626&ext=jpg"  
                  imgdown2="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?size=626&ext=jpg" 
                  imgdown3="https://img.freepik.com/free-vector/video-game-developer-concept-illustration_114360-6106.jpg?size=626&ext=jpg"  
                  imgdown4="https://img.freepik.com/free-vector/insert-block-concept-illustration_114360-4291.jpg?size=626&ext=jpg"  
                  imgdown5="https://img.freepik.com/free-vector/ui-ux-team-concept-illustration_114360-10982.jpg?size=626&ext=jpg"  
                  imgdown6="https://img.freepik.com/free-vector/select-house-concept-illustration_114360-4448.jpg?size=626&ext=jpg"  
                
                />
        </main>
    </Layout>
  )
}

export default WebDesigning
