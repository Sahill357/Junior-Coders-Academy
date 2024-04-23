import React, { useEffect } from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
 
const Hardware = () => {
  useEffect(() => {
    document.title = 'Specialized/Hardware'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card  title="Hardware  "
                description="Hardware exploration is a dynamic journey for junior coders, offering a unique blend of hands-on learning, problem-solving, and technical understanding. It empowers young minds to demystify the inner workings of computers and devices, enabling them to build, modify, and innovate. As junior coders delve into the world of hardware, they not only develop technical proficiency but also nurture a curiosity for the physical components that power our digital world. Hardware exploration is not just about understanding technology; it's about embracing the tangible aspects of the digital age and becoming creators in the world of electronics and computing." 
                
                   // images for upper section
                   imgup1="https://img.freepik.com/free-vector/hard-drive-concept-illustration_114360-9821.jpg?size=626&ext=jpg" 
                   imgup2="https://img.freepik.com/free-vector/settings-concept-illustration_114360-3056.jpg?size=626&ext=jpg" 
                   imgup3="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149373425.jpg?size=626&ext=jpg" 
                   imgup4="https://img.freepik.com/free-vector/control-panel-concept-illustration_114360-530.jpg?size=626&ext=jpg" 
                   imgup5="https://img.freepik.com/free-vector/chat-concept-illustration_114360-87.jpg?size=626&ext=jpg" 
                   imgup6="https://img.freepik.com/free-vector/more-music-concept-illustration_114360-1055.jpg?size=626&ext=jpg" 
   
   
                   // images for lower section
                   imgdown1="https://img.freepik.com/free-vector/hard-drive-concept-illustration_114360-9821.jpg?size=626&ext=jpg"  
                   imgdown2="https://img.freepik.com/free-vector/settings-concept-illustration_114360-3056.jpg?size=626&ext=jpg" 
                   imgdown3="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149373425.jpg?size=626&ext=jpg"  
                   imgdown4="https://img.freepik.com/free-vector/control-panel-concept-illustration_114360-530.jpg?size=626&ext=jpg"  
                   imgdown5="https://img.freepik.com/free-vector/chat-concept-illustration_114360-87.jpg?size=626&ext=jpg"  
                   imgdown6="https://img.freepik.com/free-vector/more-music-concept-illustration_114360-1055.jpg?size=626&ext=jpg"  
                 
                
                />
        </main>
    </Layout>
  )
}

export default Hardware
