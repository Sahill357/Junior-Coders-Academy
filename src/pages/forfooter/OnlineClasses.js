import React from 'react'
import Layout from '../../components/Layout';
import LoadScripts from '../../scripts/loadScripts';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
 const OnlineClasses = () => {
  useEffect(() => {
    document.title = 'Online Classes'; // Set the title when the component mounts
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
        <h1 className="breadcumb-title">Online Classes</h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active">Online Classes</li>
        </ul>
      </div>
    </div>
  </div>
  {/*======== / About Section ========*/}
  {/*======== Classes Section ========*/}
  <section className="classes-section bg-smoke-two space-top space-extra-bottom">
    <div className="container">
      <div className="row ">
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">  AI & Algorithm</a></h2>
              <p className="class-text">AI uses algorithms as its tools. Imagine AI as a smart chef (the computer) in a kitchen. The chef follows different recipes (algorithms) to cook various dishes (solve different problems). </p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Romeza Xara</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/AiAlgoritm"  className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/premium-photo/man-sits-desk-with-computer-web-page-it_745528-1478.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">   Fun Coding , Algorithm & Games</a></h2>
              <p className="class-text">  You use special instructions to tell the computer what to do, making it a fun way to be creative and solve puzzles.  </p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Rose Xara</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/FunCoding"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}

   {/* Single Class */}
   <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">     Mobile App Development</a></h2>
              <p className="class-text">Mobile app development is like crafting your own special tools and games for your phone or tablet.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Julia Jelly</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/MobileApp"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}

           {/* Single Class */}
           <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/free-vector/eye-tracking-technology-abstract-concept-illustration_335657-3697.jpg?w=740&t=st=1694765057~exp=1694765657~hmac=d7b5f105ac5a86ea8e137d5003fa61c5ffe52ccd3052d8bce5174e8a51294ec3" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">     Computer Vision</a></h2>
              <p className="class-text">Junior coders can learn computer vision to create games where you control characters with your gestures or make apps that identify colors.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Julia Jelly</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/Computervision"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149227347.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">     Robotics</a></h2>
              <p className="class-text">Robotics is like bringing your toys to life! It's all about creating machines (robots) that can move, sense, and do things on their own. You can make robots that dance, play music.
</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Julia Jelly</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/Robotics"  className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2766.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">   Web Designing</a></h2>
              <p className="class-text">Web designing is an exciting and integral part of the digital world. In today's fast-paced technological landscape, the ability to create visually appealing and user-friendly websites.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Romeza Xara</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/WebDesigning"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/free-vector/printed-circuit-board-concept-illustration_114360-5139.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">  Hardware</a></h2>
              <p className="class-text">In today's digital age, coding isn't limited to just software development. Understanding hardware is becoming increasingly important for coders as well. </p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Romeza Xara</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/Hardware"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="https://img.freepik.com/premium-vector/iot-internet-things-devices-connectivity-concepts-network-flat-style-with-people_194782-1655.jpg?size=626&ext=jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">  IoT</a></h2>
              <p className="class-text">One of the world’s leading tech curriculum for kids. Kids learn logic, structure, sequence and algorithmic thinking to create websites and apps.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="author" />
                  </div>
                  <div className="info">
                    <h3 className="author-name text-title"><a href="team-details.html">Romeza Xara</a></h3>
                    <span className="author-desig">Teacher</span>
                  </div>
                </div>
                {/* <span className="class-fee">$29.99</span> */}
              </div>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <Link to="/IOT"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======== / Classes Section ========*/}
  
  {/*======== CTA Section ========*/}
  <section className="cta-section space-shape-plus" data-bg-src="assets/img/bg/cta-4.jpg" data-opacity={8} data-overlay="custom">
    <div className="container text-center z-index-common">
      <div className="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span className="sub-title text-white">Join Our New Session</span>
        <h2 className="sec-title text-white">Call To Enroll Your Child <a className="d-block text-inherit" href="tel:+25621582222">256 2158 2222</a></h2>
      </div>
      <Link to="/LearnMore" className="vs-btn wave-btn">Learn More</Link>
    </div>
    <div className="section-before style-2"><img src="assets/img/shape/main-shape-before-2.png" alt="shape" /></div>
    <div className="section-after style-2"><img src="assets/img/shape/main-shape-after-smoke.png" alt="shape" /></div>
  </section>
  {/*======== / CTA Section ========*/}
  {/*======== Testimonial Section ========*/}
  <section className="testimonial-section bg-smoke space-top space-bottom-page">
    <div className="container">
      <div className="row gy-30 gx-0 align-items-center">
        <div className="col-lg-4">
          <div className="title-area text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
            <span className="sub-title">Testimonial</span>
            <h2 className="sec-title">Parent Say About Junior Coders</h2>
          </div>
          <div className="rating-box">
            <h2 className="number h1">4.7</h2>
            <div className="total-rating">
              <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
              </div>
              <h5 className="rating-count">(<span className="count">450</span> Reviews) From Google</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="testi-grid-wrapper ml-40">
            <div className="row vs-carousel" id="testi2" data-slide-show={2}>
              {/* Slider item */}
              <div className="col-md-6">
                <div className="testi-grid">
                  <div className="testi-text">
                    <p>everage total linkage rather markets. ransition enabled niches whereas cross media bene world class diverse error free paradigms. maintain inexpensive good effort could makes good happen.</p>
                    <i className="fa-regular fa-quote-left" />
                  </div>
                  <div className="testi-author">
                    <div className="avater">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="avator" />
                    </div>
                    <div className="media-body">
                      <h5 className="name">Jerzzy Lamot</h5>
                      <span className="desig">Brother</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider item */}
              <div className="col-md-6">
                <div className="testi-grid">
                  <div className="testi-text">
                    <p>everage total linkage rather markets. ransition enabled niches whereas cross media bene world class diverse error free paradigms. maintain inexpensive good effort could makes good happen.</p>
                    <i className="fa-regular fa-quote-left" />
                  </div>
                  <div className="testi-author">
                    <div className="avater">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="avator" />
                    </div>
                    <div className="media-body">
                      <h5 className="name">David Smith</h5>
                      <span className="desig">Parent</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider item */}
              <div className="col-md-6">
                <div className="testi-grid">
                  <div className="testi-text">
                    <p>everage total linkage rather markets. ransition enabled niches whereas cross media bene world class diverse error free paradigms. maintain inexpensive good effort could makes good happen.</p>
                    <i className="fa-regular fa-quote-left" />
                  </div>
                  <div className="testi-author">
                    <div className="avater">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="avator" />
                    </div>
                    <div className="media-body">
                      <h5 className="name">John Doe</h5>
                      <span className="desig">Gurdian</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider item */}
              <div className="col-md-6">
                <div className="testi-grid">
                  <div className="testi-text">
                    <p>everage total linkage rather markets. ransition enabled niches whereas cross media bene world class diverse error free paradigms. maintain inexpensive good effort could makes good happen.</p>
                    <i className="fa-regular fa-quote-left" />
                  </div>
                  <div className="testi-author">
                    <div className="avater">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"  alt="avator" />
                    </div>
                    <div className="media-body">
                      <h5 className="name">Justin Doe</h5>
                      <span className="desig">Parent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg id="clipShape" xmlns="http://www.w3.org/2000/svg" width="58.124" height="38.113" viewBox="0 0 58.124 38.113">
              <clipPath id="testiAfterShape">
                <path id="testiAfter" d="M1043.75,573s12,13.75-10,37c-.5-.25,10.25,3,56.25-37Z" transform="translate(-1033.213 -572.5)" fill="none" stroke="#707070" strokeWidth={1} />
              </clipPath>
            </svg>
            <div className="vs-icon-box testi-2 d-none d-xl-block">
              <button data-slick-prev="#testi2" className="icon-btn style-3 arrow-left mb-15"><i className="far fa-arrow-left" /></button>
              <button data-slick-next="#testi2" className="icon-btn style-3 arrow-right"><i className="far fa-arrow-right" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======== / Testimonial Section ========*/}
</div>

            </main>
        </Layout>
       
     </div>
   )
 }
 
 export default OnlineClasses
 
