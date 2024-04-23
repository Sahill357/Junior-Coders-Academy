import React from 'react'
 
import Layout from '../../components/Layout'
import LoadScripts from '../../scripts/loadScripts';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Classes = () => {
  useEffect(() => {
    document.title = 'Classes'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
    LoadScripts();
  return (
    <>
    <Layout>
    <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
 <div>
  {/*======== About Section ========*/}
  <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-smoke2.jpg">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Classes</h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active">Classes</li>
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
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">AI & Algorithm</a></h2>
              <p className="class-text">    junior coders can embark on a rewarding journey by delving into these domains.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
              <Link to="/AiAlgoritm"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Fun Coding </a></h2>
              <p className="class-text">As junior coders embark on this adventure,  and bringing imagination to life.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
              <Link to="/FunCoding"  className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Mobile App Development</a></h2>
              <p className="class-text">Mobile app development is not just about writing code; it's about building a digital world</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Computer Vision</a></h2>
              <p className="class-text">Computer vision offers junior coders a   journey of visual recognition and artificial intelligence.</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
              <Link to="/ComputerVision"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Robotics</a></h2>
              <p className="class-text">Robotics offers junior coders an exciting journey filled with creativity</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
              <Link to="/Robotics"   className="vs-btn style-1">Read More</Link>
            </div>
          </div>
        </div>
        {/* Single Class */}
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Web Designing</a></h2>
              <p className="class-text">  designing is not   about creating websites; it's about designing the digital experiences</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Hardware</a></h2>
              <p className="class-text">It empowers young minds to demystify the inner workings of computers and devices</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
        {/* Single Class */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="class-box">
            <div className="class-img">
              <a href="class-details.html">
                <img src="\assets\img\class\original1.jpg" alt="class" />
              </a>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">IoT</a></h2>
              <p className="class-text">It empowers young minds to understand the digital interconnectivity of everyday objects</p>
              <div className="class-profile">
                <div className="profile">
                  <div className="avator">
                    <img src="\assets\img\blog\auth1.jpg" alt="author" />
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
        {/* Single Class */}
        
      </div>
    </div>
  </section>
  {/*======== / Classes Section ========*/}
 {/*======== CTA Section ========*/}
 <section className="cta-section bg-smoke-blue space">
          <div className="container text-center">
            <div
              className="title-area mb-35 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <span className="sub-title">Join Our New Session</span>
              <h2 className="sec-title">
                Call To Enroll Your Child <br />{" "}
                <a className="text-inherit" href="tel:+25621582222">
                  256 2158 2222
                </a>
              </h2>
            </div>
            {/* <a href="about.html" className="vs-btn wave-btn">
              Learn More
            </a> */}
              <Link to="/LearnMore"   className="vs-btn wave-btn style-1">
                      Learn More
                    </Link>
          </div>
          <div className="section-after style-2">
            <img src="assets/img/shape/main-shape-after.png" alt="shape" />
          </div>
          <div
            className="shape-mockup d-none d-hd-block"
            data-top="0%"
            data-left="0%"
          >
            <img src="assets/img/icon/rainbow-cloud.png" alt="shapes" />
          </div>
          <div
            className="shape-mockup shapePulse d-none d-hd-block"
            data-top="40%"
            data-right="14%"
          >
            <img src="assets/img/icon/butterfly-4.png" alt="shapes" />
          </div>
        </section>
        {/*======== / CTA Section ========*/}
    {/*======== Testimonial Section ========*/}
    <section className="testimonial-section space-top-shape2-plus space-bottom-shape-plus">
            <div className="container">
              <div className="row gy-30 align-items-center">
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="text-center text-lg-start">
                    <span className="sub-title">Parent Testimonial</span>
                    <h2 className="sec-title">Positive Parents Review Of Us</h2>
                    <p className="mb-30"> <b>"We wanted to take a moment to share our heartfelt review of Junior Coders Academy—an institution that has had an immeasurable impact on our child's life and, in turn, our entire family."</b></p>
                    <a href="#" className="vs-btn wave-btn style-1">View All Reviews</a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="testi-slider-area">
                    <div className="row testi-slider vs-carousel" id="testi1" data-slide-show={2}>
                      {/* Single Item */}
                      <div className="col-md-6">
                        <div className="testi-box">
                          <div className="testi-avater">
                            <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg" alt="testimonial" />
                            <i className="fa-solid fa-quote-left" />
                          </div>
                          <h4 className="testi-title">They Are Amazing</h4>
                          <p className="testi-text">everaged total linkage rather than holisticlis markets. ransition enabled niches whereas cross media benefits world..</p>
                          <div className="testi-author">
                            <h5 className="name">Jerzzy Lamot</h5>
                            <span className="desig">Parent</span>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="col-md-6">
                        <div className="testi-box">
                          <div className="testi-avater">
                            <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg" alt="testimonial" />
                            <i className="fa-solid fa-quote-left" />
                          </div>
                          <h4 className="testi-title">They Are Like Family</h4>
                          <p className="testi-text">everaged total linkage rather than holisticlis markets. ransition enabled niches whereas cross media benefits world..</p>
                          <div className="testi-author">
                            <h5 className="name">Jone David</h5>
                            <span className="desig">Gurdian</span>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      {/* <div className="col-md-6">
                <div className="testi-box">
                  <div className="testi-avater">
                    <img src="assets/img/testimonial/avator-3.jpg" alt="testimonial" />
                    <i className="fa-solid fa-quote-left" />
                  </div>
                  <h4 className="testi-title">My Child Enjoyed</h4>
                  <p className="testi-text">everaged total linkage rather than holisticlis markets. ransition enabled niches whereas cross media benefits world..</p>
                  <div className="testi-author">
                    <h5 className="name">Mark Jone</h5>
                    <span className="desig">Brother</span>
                  </div>
                </div>
              </div> */}
                    </div> {/* / Slider End */}
                    <div className="vs-icon-box testi-1 d-none d-xl-block">
                      <button data-slick-prev="#testi1" className="icon-btn style-3 arrow-left mb-15"><i className="far fa-arrow-left" /></button>
                      <button data-slick-next="#testi1" className="icon-btn style-3 arrow-right"><i className="far fa-arrow-right" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*======== / Testimonial Section ========*/}
</div>


    </Layout>
      
    </>
  )
}

export default Classes
