import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';
const Intermediate = () => {
  useEffect(() => {
    document.title = 'Reguler/Intermediate'; // Set the title when the component mounts
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
        title="Intermediate"
        description="Computer vision offers junior coders a captivating journey into the world of visual recognition and artificial intelligence. It combines creativity, problem-solving, and real-world applications, empowering junior coders to develop solutions that can revolutionize industries. As they explore computer vision, junior coders embark on a path that not only enhances their technical skills but also fuels their curiosity and passion for building intelligent systems that can perceive and interpret the visual world. Computer vision is not just about coding; it's about enabling machines to see and understand, bringing technology one step closer to mimicking human perception."


        // images for upper section
        imgup1="https://img.freepik.com/free-vector/advanced-computer-skills-concept-illustration_335657-5557.jpg?size=626&ext=jpg "
        imgup2="https://img.freepik.com/free-vector/florist-concept-illustration_114360-3139.jpg?size=626&ext=jpg"
        imgup3="https://img.freepik.com/free-vector/organic-flat-contact-us-illustration_52683-60703.jpg?size=626&ext=jpg "
        imgup4="https://img.freepik.com/free-vector/organic-flat-about-me-concept-illustrated_23-2148890398.jpg?size=626&ext=jpg "
        imgup5="https://img.freepik.com/free-vector/hand-drawn-step-illustration_23-2150117686.jpg?size=626&ext=jpg "
        imgup6="https://img.freepik.com/free-vector/creativity-concept-illustration_114360-2160.jpg?size=626&ext=jpg "


        // images for lower section
        imgdown1="https://img.freepik.com/free-vector/advanced-computer-skills-concept-illustration_335657-5557.jpg?size=626&ext=jpg"
        imgdown2="https://img.freepik.com/free-vector/florist-concept-illustration_114360-3139.jpg?size=626&ext=jpg"
        imgdown3="https://img.freepik.com/free-vector/organic-flat-contact-us-illustration_52683-60703.jpg?size=626&ext=jpg"
        imgdown4="https://img.freepik.com/free-vector/organic-flat-about-me-concept-illustrated_23-2148890398.jpg?size=626&ext=jpg"
        imgdown5="https://img.freepik.com/free-vector/hand-drawn-step-illustration_23-2150117686.jpg?size=626&ext=jpg"
        imgdown6="https://img.freepik.com/free-vector/creativity-concept-illustration_114360-2160.jpg?size=626&ext=jpg"/>
      </main>
    </Layout>
  )
}

export default Intermediate
