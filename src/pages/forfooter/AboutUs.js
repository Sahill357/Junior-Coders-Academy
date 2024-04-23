import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import { useEffect } from 'react';
 const OnlineClasses = () => {
  useEffect(() => {
    document.title = 'About Us'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
   return (
     <div>
        <Layout>
        <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
            <main>
          <div>
  {/*======== About Section ========*/}
  <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-smoke2.jpg">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">About Us</h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active">About Us</li>
        </ul>
      </div>
    </div>
  </div>
  {/*======== / About Section ========*/}
  
  
  
   {/*======== About Section ========*/}
   <section className="about-section space">
            <div className="container">
              <div className="row align-items-center gy-30">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                  <div className="img-box-2">
                    <img src="assets/img/normal/medium.jpg" alt="photo" className="big-img" />
                    <img src="assets/img/normal/medium2.jpg" alt="photo" className="small-img" />
                  </div>
                </div>
                <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
                  <div className="text-center text-lg-start">
                    <span className="sub-title">About Junior Coders</span>
                    <h2 className="sec-title big-title">Special Care For Your Children</h2>
                    <p className="fs-md mb-30"> <b>
                      "Building young minds at Junior Coders Academy is a blend of passion, guidance, and innovation. We foster creativity through lines of code, ignite curiosity with the magic of technology, and empower our young coders to shape the future with their digital dreams. Together, we're not just teaching code; we're nurturing the next generation of tech visionaries.". </b> </p>
                    <div className="call-media">
                      <div className="media-icon"><i className="fas fa-phone-alt" /></div>
                      <div className="media-body">
                        <span className="media-label">Call Anytime 24/7</span>
                        <p className="media-info"><a href="+91 9822112848" className="text-inherit">+91 9822112848</a></p>
                      </div>
                    </div>
                    {/* <a href="contact.html" className="vs-btn wave-btn style-1">Contact Us</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-mockup shapePulse d-none d-hd-block" data-bottom="40%" data-left="6%">
              <img src="assets/img/icon/dog.png" alt="shapes" />
              </div>
            <div className="shape-mockup rotate d-none d-md-block" data-bottom="40%" data-right="6%">
              {/* <img src="assets/img/icon/star.png" alt="shapes" /> */}
              </div>
          </section>
          {/*======== / About Section ========*/}
</div>

            </main>
        </Layout>
       
     </div>
   )
 }
 
 export default OnlineClasses
 
