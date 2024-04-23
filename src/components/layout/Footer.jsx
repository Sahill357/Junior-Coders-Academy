import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
  return (
    
    <div>
      {/*==============================
	Footer Area
	==============================*/}
      <footer
        className="footer-wrapper footer-layout3"
        data-bg-src={`./assets/img/bg/forfooter2.jpg`}
      >
        <div className="widget-area">
          <div className="container">
            {/* <img src="./assets/img/bg/forfooter2.jpg" /> */}
            <div className="row justify-content-between">
              {/* About Widget*/}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget">
                  <div className="vs-widget-about">
                    <div className="about-logo">
                      <Link to="/Hero"  >
                       {/* <img src="assets/img/logo-white.svg" alt="Knirpse" /> */}
                       
                        {/* <h3>Junior Coders</h3> */}
                        <div className="footerlogo" >junior  </div> <span className="footerlogo2">Coders</span> 
                        
                      </Link>
                    </div>
                    <p className="about-text">
                    <b> Social Media Handle of jr.Coders </b>
                    </p>
                    <div className="multi-social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Widget*/}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget widget_nav_menu">
                  <h4 className="widget_title">Details Info</h4>
                  <ul className="menu">
                    <li>
                    <Link to="/OnlineClasses"  exact="true" activeclassname="active">
                          Online Classes
                        </Link>
                    </li>
                    <li>
                    <Link to="/Appointment"     exact="true" activeclassname="active">
                    Appointment
                    </Link>
                    </li>
                    <li>
                    <Link to="/AboutUs"    exact="true" activeclassname="active">
                    About Us
                    </Link>
                    </li>
                    <li>
                    <Link to="/OurTeam"  exact="true" activeclassname="active">
                          Our Team
                        </Link>
                    </li>
                    <li>
                      {/* <a href="event.html">Upcoming Events</a> */}
                    </li>
                  </ul>
                </div>
              </div>
               {/* Footer Widget   */}
               {/* <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s" 
              >
                <div className="widget footer-widget">
                  <h4 className="widget_title">News Feed</h4>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/blog-thumb-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="#">
                            <i className="fal fa-calendar-alt" /> 25th March,
                            2023
                          </a>
                        </div>
                        <h4 className="post-title">
                          <Link to="/UsersGuide" >
                          How to Keep Children Safe Online
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="#">
                          <img
                            src="assets/img/blog/blog-thumb-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-alt" /> 25th March,
                            2023
                          </a>
                        </div>
                        <h4 className="post-title">
                          <Link to="/PrepareChild"  >
                            How to prepare child for examination
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   */}
               {/* Footer Widget  */}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="vs-widget-contact">
                    <p className="footer-info">
                      <Link to="/AdrsInfo">
                      <i className="fas fa-map-marker-alt" />
                      Pulse Hospital 1st Floor, Near VIP Hall, Aurangabad (MH) 431001
                      </Link>
                    </p>
                    <p className="footer-info">
  <i className="fas fa-envelope" />
  <a
    href="#"
    onClick={() => {
      window.location.href = "mailto:info@juniorcoderacademy.com";
    }}
  >
    info@juniorcoderacademy.com
  </a>
</p>

                    <p className="footer-info">
                      <i className="fas fa-phone-alt" />
                      {/* <a href="+91 9822112848">+91 9822112848</a> */}
                      <a href="#">+91 9822112848</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <p className="copyright">
              © Copyright 2023. All Rights Reserved by{" "}
              {/* <a href="https://themeforest.net/user/vecuro_themes"></a>. */}Junior Coders
            </p>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-hd-block"
          data-top="7%"
          data-left="5%"
        >
          {/* <img src="assets/img/icon/f-i-3-1.png" alt="shapes" /> */}
        </div>
        <div
          className="shape-mockup movingX-reverse d-none d-hd-block"
          data-top="62%"
          data-left="10%"
        >
          {/* <img src="assets/img/icon/f-i-3-2.png" alt="shapes" /> */}
        </div>
        <div
          className="shape-mockup rotate d-none d-hd-block"
          data-top="69%"
          data-left="32%"
        >
          {/* <img src="assets/img/icon/f-i-3-3.png" alt="shapes" /> */}
        </div>
        <div
          className="shape-mockup movingX d-none d-hd-block"
          data-top="3%"
          data-left="46%"
        >
          {/* <img src="assets/img/icon/f-i-3-4.png" alt="shapes" /> */}
        </div>
        <div
          className="shape-mockup movingX-reverse d-none d-hd-block"
          data-top="18%"
          data-right="3%"
        >
          {/* <img src="assets/img/icon/f-i-3-5.png" alt="shapes" /> */}
        </div>
        <div
          className="shape-mockup movingX d-none d-hd-block"
          data-top="62%"
          data-right="6%"
        >
          {/* <img src="assets/img/icon/f-i-3-6.png" alt="shapes" /> */}
        </div>
      </footer>
      <footer
        className="footer-wrapper footer-layout1 d-none"
        data-bg-src="assets/img/bg/footer-3.png"
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              {/* About Widget*/}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget">
                  <div className="vs-widget-about">
                    <div className="about-logo">
                      <a href="index.html">
                        <img src="assets/img/logo.svg" alt="Knirpse" />
                      </a>
                    </div>
                    <p className="about-text">
                      Eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum ultrice gravida isus commodo viverra.
                    </p>
                    <div className="multi-social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Widget*/}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget widget_nav_menu">
                  <h4 className="widget_title">Details Info</h4>
                  <ul className="menu">
                    <li>
                      <a href="classes.html">Online Class</a>
                    </li>
                    <li>
                      <a href="contact.html">Appointment</a>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="event.html">Upcoming Events</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Widget */}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget">
                  <h4 className="widget_title">News Feed</h4>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/blog-thumb-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-alt" /> 25th March,
                            2023
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a href="blog-details.html">
                            User’s Pepare Using Story Guide Yes
                          </a>
                        </h4>
                      </div>
                    </div>

                    
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="#">
                          <img
                            src="assets/img/blog/blog-thumb-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="#">
                            <i className="fal fa-calendar-alt" /> 25th March,
                            2023
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a href="blog-details.html">
                            How to prepare child for examination
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Widget */}
              <div
                className="col-xl-auto col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="vs-widget-contact">
                    <p className="footer-info">
                      <i className="fas fa-map-marker-alt" />
                      Pulse Hospital 2nd Floor, Aurangabad (MH) 431001
                    </p>
                    <p className="footer-info">
                      <i className="fas fa-envelope" />
                      <a href="dualsysrnd@gmail.com">
                      dualsysrnd@gmail.com
                      </a>
                    </p>
                    <p className="footer-info">
                      <i className="fas fa-phone-alt" />
                      <a href="tel:+25631562156236">+256 (3156) 2156 236</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-hd-block" 
          data-top="7%"
          data-left="5%"
        >
          <img src="assets/img/icon/sun-3.png" alt="shapes" />
        </div>
        <div
          className="shape-mockup movingX d-none d-hd-block"
          data-bottom="56%"
          data-left="33%"
        >
          <img src="assets/img/icon/butterfly.png" alt="shapes" />
        </div>
        <div
          className="shape-mockup moving d-none d-hd-block"
          data-top="49%"
          data-right="30%"
        >
          <img src="assets/img/icon/butterfly-sm.png" alt="shapes" />
        </div>
        <div className="footer-copyright">
          <div className="container">
            <p className="copyright">
              © Copyright 2023 Jr.Coders. All Rights Reserved by{" "}
              <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
