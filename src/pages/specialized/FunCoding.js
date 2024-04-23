import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';
const FunCoding = () => {
  useEffect(() => {
    document.title = 'Specialized/FunCoding'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card title="Fun Coding, Algorithm & Games" 
                  description="Fun coding, algorithms, and game offer junior coders an exciting journey filled with creativity, problem-solving, and the joy of building. These skills not only prepare them for potential careers in technology but also foster a lifelong passion for coding. As junior coders embark on this adventure, they discover that coding is not just about programming; it's about crafting digital worlds and bringing imagination to life.." 
                   // images for upper section
                   imgup1="https://img.freepik.com/premium-vector/engineering-class-isolated-cartoon-vector-illustration_107173-30398.jpg?size=626&ext=jpg" 
                   imgup2="https://img.freepik.com/free-vector/hand-drawn-flat-design-gamification-illustration_23-2149243334.jpg?size=626&ext=jpg" 
                   imgup3="https://img.freepik.com/free-vector/e-sport-team-abstract-concept-illustration-group-e-sport-gamers-pro-team-online-sport-league-gaming-championship-internet-browser-playing-together-collaboration_335657-1243.jpg?size=626&ext=jpg" 
                   imgup4="https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?size=626&ext=jpg" 
                   imgup5="https://img.freepik.com/free-vector/online-games-addiction-concept-illustration_114360-2014.jpg?size=626&ext=jpg" 
                   imgup6="https://img.freepik.com/premium-photo/social-media-marketing-agency-multiple-concept-designs_891428-568.jpg?size=626&ext=jpg" 
   
   
                   // images for lower section
                   imgdown1="https://img.freepik.com/premium-vector/engineering-class-isolated-cartoon-vector-illustration_107173-30398.jpg?size=626&ext=jpg"  
                   imgdown2="https://img.freepik.com/free-vector/hand-drawn-flat-design-gamification-illustration_23-2149243334.jpg?size=626&ext=jpg" 
                   imgdown3="https://img.freepik.com/free-vector/e-sport-team-abstract-concept-illustration-group-e-sport-gamers-pro-team-online-sport-league-gaming-championship-internet-browser-playing-together-collaboration_335657-1243.jpg?size=626&ext=jpg"  
                   imgdown4="https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?size=626&ext=jpg"  
                   imgdown5="https://img.freepik.com/free-vector/online-games-addiction-concept-illustration_114360-2014.jpg?size=626&ext=jpg"  
                   imgdown6="https://img.freepik.com/premium-photo/social-media-marketing-agency-multiple-concept-designs_891428-568.jpg?size=626&ext=jpg"  
                 
                  />
        </main>
    </Layout>
  )
}

export default FunCoding
