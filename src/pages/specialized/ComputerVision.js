import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import Card from '../../components/Card'
import { useEffect } from 'react';
const ComputerVision = () => {
  useEffect(() => {
    document.title = 'Specialized/ComputerVision'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
            <Card title="Computer Vision"
                description="Computer vision offers junior coders a captivating journey into the world of visual recognition and artificial intelligence. It combines creativity, problem-solving, and real-world applications, empowering junior coders to develop solutions that can revolutionize industries. As they explore computer vision, junior coders embark on a path that not only enhances their technical skills but also fuels their curiosity and passion for building intelligent systems that can perceive and interpret the visual world. Computer vision is not just about coding; it's about enabling machines to see and understand, bringing technology one step closer to mimicking human perception."
 

                // images for upper section
                imgup1="https://img.freepik.com/free-vector/man-working-with-laptop-cartoon-character-freelancer-using-computer-freelance-business-remote-job-distant-work-time-management-home-office_335657-2089.jpg?size=626&ext=jpg "
                imgup2="https://img.freepik.com/free-vector/air-conditioning-refrigeration-services-abstract-concept_335657-3181.jpg?size=626&ext=jpg"
                imgup3="https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-1897.jpg?size=626&ext=jpg "
                imgup4="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?size=626&ext=jpg "
                imgup5="https://img.freepik.com/free-vector/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character_335657-2579.jpg?size=626&ext=jpg "
                imgup6="https://img.freepik.com/free-vector/problem-solving-creative-decision-difficult-task-lateral-thinking-man-assembling-puzzle-cartoon-character-right-choice-missing-item_335657-2108.jpg?size=626&ext=jpg "


                // images for lower section
                imgdown1="https://img.freepik.com/free-vector/man-working-with-laptop-cartoon-character-freelancer-using-computer-freelance-business-remote-job-distant-work-time-management-home-office_335657-2089.jpg?size=626&ext=jpg"
                imgdown2="https://img.freepik.com/free-vector/air-conditioning-refrigeration-services-abstract-concept_335657-3181.jpg?size=626&ext=jpg"
                imgdown3="https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-1897.jpg?size=626&ext=jpg"
                imgdown4="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?size=626&ext=jpg"
                imgdown5="https://img.freepik.com/free-vector/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character_335657-2579.jpg?size=626&ext=jpg"
                imgdown6="https://img.freepik.com/free-vector/problem-solving-creative-decision-difficult-task-lateral-thinking-man-assembling-puzzle-cartoon-character-right-choice-missing-item_335657-2108.jpg?size=626&ext=jpg"



  />
        </main>
    </Layout>
  )
}

export default ComputerVision
