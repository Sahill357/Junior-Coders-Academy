import React from 'react'
import Layout from '../components/Layout'
import LoadScripts from '../scripts/loadScripts';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About'; // Set the title when the component mounts
    return () => {
      document.title = ''; // Reset the title when the component unmounts
    };
  }, []);
  LoadScripts();

  return (
    <>

      <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <div id="About">  
          {/*======== About Section ========*/}
          <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-1.jpg">
            <div className="container">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">About  </h1>
                <ul className="breadcumb-menu">
                  <li><a href="#">Home</a></li>
                  <li className="active">About  </li>
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
              {/* <img src="assets/img/icon/dog.png" alt="shapes" /> */}
              </div>
            <div className="shape-mockup rotate d-none d-md-block" data-bottom="40%" data-right="6%">
              {/* <img src="assets/img/icon/star.png" alt="shapes" /> */}
              </div>
          </section>
          {/*======== / About Section ========*/}
          {/*======== Counter Section ========*/}
          <section className="counter-section space-double" data-bg-src="assets/img/bg/counter.jpg" data-overlay="title" data-opacity={8}>
            <div className="container">
              <div className="row gy-30 justify-content-between">
                {/* Single Item */}
                <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="counter-box">
                    <div className="counter-icon">
                      <img src="assets/img/icon/counter-1.png" alt="icon" />
                    </div>
                    <div className="counter-info">
                      <h2 className="counter-number">45</h2>
                      <p className="counter-text">Qualified Teachers</p>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="counter-box">
                    <div className="counter-icon">
                      <img src="assets/img/icon/counter-2.png" alt="icon" />
                    </div>
                    <div className="counter-info">
                      <h2 className="counter-number">
                        <span className="counter">20</span>
                      </h2>
                      <p className="counter-text">Years of Experience</p>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="counter-box">
                    <div className="counter-icon">
                      <img src="assets/img/icon/counter-3.png" alt="icon" />
                    </div>
                    <div className="counter-info">
                      <h2 className="counter-number">
                        <span className="counter">565</span>
                      </h2>
                      <p className="counter-text">Students Enrolled</p>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="counter-box">
                    <div className="counter-icon">
                      <img src="assets/img/icon/counter-4.png" alt="icon" />
                    </div>
                    <div className="counter-info">
                      <h2 className="counter-number">
                        <span className="counter">15</span>
                      </h2>
                      <p className="counter-text">Groups of Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-before style-2"><img src="assets/img/shape/counter-before-1.png" alt="shape" /></div>
            <div className="section-after style-2"><img src="assets/img/shape/counter-after-1.png" alt="shape" /></div>
            <div className="shape-mockup z-index-3 shapePulse d-none d-hd-block" data-bottom="23%" data-left="7%">
              {/* <img src="assets/img/icon/egg.png" alt="shapes" /> */}
            </div>
            <div className="shape-mockup z-index-3 d-none d-hd-block" data-bottom="-9%" data-right="7%"><img src="assets/img/shape/line-3.png" alt="shapes" /></div>
          </section>
          {/*======== / Counter Section ========*/}
        {/*======== Process Section ========*/}
<section className="process-section space-top space-bottom-shape2-plus">
  <div className="container">
    <div className="row mb-20 text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
      <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
        <div className="title-area">
          <span className="sub-title">Work Process</span>
          <h2 className="sec-title">How We Manage Our Kids Education</h2>
        </div>
      </div>
    </div>
    <div className="process-area">
      <div className="row gy-60 justify-content-between">
        {/* Single Item */}
        <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
          <div className="process-box-body">
            <span className="process-number">01</span>
            <div className="process-content">
              <div className="process-icon">
                <img src="assets/img/icon/process2-1.png" alt="icon" />
              </div>
              <h5 className="process-name"><Link to="/OurTeam"  >See Our Team Now</Link></h5>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
          <div className="process-box-body">
            <span className="process-number">02</span>
            <div className="process-content">
              <div className="process-icon">
                <img src="assets/img/icon/process2-2.png" alt="icon" />
              </div>
              <h5 className="process-name"><Link to="/Appointment"  >Appointment With Us</Link></h5>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
          <div className="process-box-body">
            <span className="process-number">03</span>
            <div className="process-content">
              <div className="process-icon">
                <img src="assets/img/icon/process2-3.png" alt="icon" />
              </div>
              <h5 className="process-name"><Link to="/Classes"  >Start Learning Your Kids</Link></h5>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
          <div className="process-box-body">
            <span className="process-number">04</span>
            <div className="process-content">
              <div className="process-icon">
                <img src="assets/img/icon/process2-4.png" alt="icon" />
              </div>
              <h5 className="process-name"><Link to="/Contact"  >Get The Establish Kids</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="process-line"><img src="assets/img/shape/dashed-line-1.png" alt="shape" /></div>
    </div>
  </div>
</section>
{/*======== / Process Section ========*/}

          {/*======== Team Section ========*/}
          <section className="team-section bg-smoke space-extra-top space-bottom-shape-min">
            <div className="container">
              <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                  <div className="title-area">
                    <span className="sub-title">Our Expert Staff</span>
                    <h2 className="sec-title">Most Dedicated Staff For Your Child</h2>
                  </div>
                </div>
              </div>
              <div className="row  vs-carousel" data-slide-show={3} data-lg-slide-show={2} data-arrows="true">
                {/* Single Team */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-card">
                    <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg" alt="team" />
                      <div className="team-content">
                        <p className="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                        <div className="multi-social">
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                          <a href="#"><i className="fab fa-twitter" /></a>
                          <a href="#"><i className="fab fa-pinterest-p" /></a>
                          <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                      </div>
                    </div>
                    <button className="icon-btn expand-btn"><i className="fas fa-share-alt" /></button>
                    <div className="team-info">
                      <h4 className="team-title"><a href="team-details.html">Bableo Dablo</a></h4>
                      <span className="team-desig">Kids Specialist</span>
                    </div>
                  </div>
                </div>
                {/* Single Team */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-card">
                    <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg" alt="team" />
                      <div className="team-content">
                        <p className="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                        <div className="multi-social">
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                          <a href="#"><i className="fab fa-twitter" /></a>
                          <a href="#"><i className="fab fa-pinterest-p" /></a>
                          <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                      </div>
                    </div>
                    <button className="icon-btn expand-btn"><i className="fas fa-share-alt" /></button>
                    <div className="team-info">
                      <h4 className="team-title"><a href="team-details.html">Rose Marry</a></h4>
                      <span className="team-desig">Drawing Teacher</span>
                    </div>
                  </div>
                </div>
                {/* Single Team */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-card">
                    <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
                      <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg" alt="team" />
                      <div className="team-content">
                        <p className="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                        <div className="multi-social">
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                          <a href="#"><i className="fab fa-twitter" /></a>
                          <a href="#"><i className="fab fa-pinterest-p" /></a>
                          <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                      </div>
                    </div>
                    <button className="icon-btn expand-btn"><i className="fas fa-share-alt" /></button>
                    <div className="team-info">
                      <h4 className="team-title"><a href="team-details.html">Jabian Joe</a></h4>
                      <span className="team-desig">Kids Teacher</span>
                    </div>
                  </div>
                </div>
                {/* Single Team */}
                {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-card">
            <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
              <img src="assets/img/team/t-4.jpg" alt="team" />
              <div className="team-content">
                <p className="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                <div className="multi-social">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <button className="icon-btn expand-btn"><i className="fas fa-share-alt" /></button>
            <div className="team-info">
              <h4 className="team-title"><a href="team-details.html">Sonia Khan</a></h4>
              <span className="team-desig">Kids Specialist</span>
            </div>
          </div>
        </div> */}
              </div>
            </div>
            <div className="shape-before"><img src="assets/img/shape/before-shape-5.png" alt="shape" /></div>
            <div className="shape-after"><img src="assets/img/shape/after-shape-5.png" alt="shape" /></div>
            <div className="shape-mockup movingX d-none d-hd-block" data-top="12%" data-left="6%">
              {/* <img src="assets/img/icon/doll-1.png" alt="shapes" /> */}
              </div>
            <div className="shape-mockup movingX d-none d-hd-block" data-bottom="9%" data-left="5%">
              {/* <img src="assets/img/icon/shoe-1.png" alt="shapes" />    */}
              </div>
            <div className="shape-mockup shapePulse d-none d-hd-block" data-top="12%" data-right="5%">
              {/* <img src="assets/img/icon/dog-2.png" alt="shapes" /> */}
              </div>
            <div className="shape-mockup movingX d-none d-hd-block" data-bottom="12%" data-right="3%">
              {/* <img src="assets/img/icon/plane-1.png" alt="shapes" /> */}
              </div>
          </section>
          {/*======== / Team Section ========*/}
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

export default About;

