import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Beginner = () => {
  useEffect(() => {
    document.title = 'Reguler/Beginner'; // Set the title when the component mounts
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
    title="Beginner"
    description="Computer vision offers junior coders a captivating journey into the world of visual recognition and artificial intelligence. It combines creativity, problem-solving, and real-world applications, empowering junior coders to develop solutions that can revolutionize industries. As they explore computer vision, junior coders embark on a path that not only enhances their technical skills but also fuels their curiosity and passion for building intelligent systems that can perceive and interpret the visual world. Computer vision is not just about coding; it's about enabling machines to see and understand, bringing technology one step closer to mimicking human perception."


    // images for upper section
    imgup1="https://img.freepik.com/free-vector/creative-thinking-concept-illustration_114360-3507.jpg?size=626&ext=jpg "
    imgup2="https://img.freepik.com/free-vector/computer-graphics-advices-tips-watching-digital-design-masterclass-online-course-helpful-information-painting-exam-preparation_335657-3446.jpg?size=626&ext=jpg"
    imgup3="https://img.freepik.com/premium-vector/college-choice-abstract-concept-vector-illustration_107173-20625.jpg?size=626&ext=jpg"
    imgup4="https://img.freepik.com/free-vector/telecommuting-concept-illustration_52683-36117.jpg?size=626&ext=jpg "
    imgup5="https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-alumni_23-2148572901.jpg?size=626&ext=jpg"
    imgup6="https://img.freepik.com/premium-photo/online-education-concept-vector-illustration-cartoon-design-student-girl-studying-home_934652-7260.jpg?size=626&ext=jpg "


    // images for lower section
    imgdown1="https://img.freepik.com/free-vector/creative-thinking-concept-illustration_114360-3507.jpg?size=626&ext=jpg"
    imgdown2="https://img.freepik.com/free-vector/computer-graphics-advices-tips-watching-digital-design-masterclass-online-course-helpful-information-painting-exam-preparation_335657-3446.jpg?size=626&ext=jpg"
    imgdown3="https://img.freepik.com/premium-vector/college-choice-abstract-concept-vector-illustration_107173-20625.jpg?size=626&ext=jpg"
    imgdown4="https://img.freepik.com/free-vector/telecommuting-concept-illustration_52683-36117.jpg?size=626&ext=jpg"
    imgdown5="https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-alumni_23-2148572901.jpg?size=626&ext=jpg"
    imgdown6="https://img.freepik.com/premium-photo/online-education-concept-vector-illustration-cartoon-design-student-girl-studying-home_934652-7260.jpg?size=626&ext=jpg"
    />
    
    </main>
    </Layout>
  )
}

export default Beginner
