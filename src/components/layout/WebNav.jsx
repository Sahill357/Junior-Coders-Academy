import React from "react";
import { Link } from "react-router-dom";
import   { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
 

const WebNav = () => {
  
  <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
     
    <header className="vs-header">
      {/*header-top-wrapper start*/}
      <div className="header-top-area d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fal fa-clock" />
                    9 am - 9 pm - Mon - Sat
                  </li>
                  <li>
                    <i className="fal fa-phone" />
                    <span href="tel:+25625921589">+91 9822112848</span>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    Pulse Hospital 1st Floor, Near VIP Hall, Aurangabad (MH) 431001
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-skype" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*header-top-wrapper end*/}
      {/*vs-main-menu-wrapper start*/}
      <div className="sticky-wrapper">
        <div className="sticky-active">
          <div className="header-menu-area">
            <div className="container position-relative">
              <div className="row gx-20 align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/Hero"  exact="true" activeclassname="active">
                      {/* <img src="assets/img/logo.svg" alt="logo" /> */}
                       <div className="logoname" >junior </div> <span className="logoname2">Coders</span> 
                     
                      
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                    <ul>
                      <li className="">
                      <Link to='/Hero'>
                             Home
                                </Link>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#"> Courses</a>
                        <ul className="sub-menu">
                           <li className="menu-item-has-children">
                           <Link to="/Regular"  exact="true" activeclassname="active">
                           Regular
                        </Link>
                            <ul className="sub-menu">
                              <li>
                              <Link to="/Beginner"  exact="true" activeclassname="active">
                          Beginner
                        </Link>
                              </li>
                              <li>
                              <Link to="/Intermediate"  exact="true" activeclassname="active">
                         Intermediate
                        </Link>
                              </li>
                              <li>
                              <Link to="/Advanced"  exact="true" activeclassname="active">
                         Advanced
                        </Link>
                              </li>
                             
                            
                            </ul>
                          </li>
                          
                          <li className="menu-item-has-children">
                          <Link to="/Weekend"  exact="true" activeclassname="active">
                          Weekend
                        </Link>
                            <ul className="sub-menu">
                              <li>
                              <Link to="/Beg"  exact="true" activeclassname="active">
                              Beginner
                        </Link>
                              </li>
                              <li>
                              <Link to="/Inter"  exact="true" activeclassname="active">
                             Intermediate
                        </Link>
                              </li>
                              <li>
                              <Link to="/AD"  exact="true" activeclassname="active">
                              Advanced
                        </Link>
                              </li>
                            </ul>
                          </li>


                          
                          <li className="menu-item-has-children">
                             <Link  to="/Cto"  exact="true" activeclassname="active">
                          Specialized
                        </Link>
                            

                            <ul className="sub-menu">
                            <li>

                            <Link to="/AiAlgoritm"  exact="true" activeclassname="active">
                          AI & Algorithm
                        </Link>
                              </li>
                              <li>
                              <Link to="/FunCoding"  exact="true" activeclassname="active">
                        Fun Coding & Algorithm   
                        </Link>
                              </li>
                              <li>
                              <Link to="/MobileApp"  exact="true" activeclassname="active">
                          Mobile App Development
                        </Link>
                              </li>
                              <li>
                              <Link to="/ComputerVision"  exact="true" activeclassname="active">
                          Computer Vision 
                        </Link>
                              </li>
                              <li>
                              <Link to="/Robotics"  exact="true" activeclassname="active">
                        Robotics
                        </Link>
                              </li>
                              <li>
                              <Link to="/WebDesigning"  exact="true" activeclassname="active">
                        Web Designing
                        </Link>
                              </li>
                              <li>
                              <Link to="/Hardware"  exact="true" activeclassname="active">
                          Hardware
                        </Link>
                              </li>
                              <li>
                              <Link to="/IOT"  exact="true" activeclassname="active">
                          IoT
                        </Link>
                              </li>
                            </ul>
                          </li>


                          {/* <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                          <a href="event-details.html">Event Details</a>
                          </li>
                          <li>
                            <a href="service.html">Services</a>
                          </li>

                          <li>
                          <a href="event.html">Event</a>
                          </li>

                          <li>
                            <a href="error.html">Error Page</a>
                          </li> */}
                        </ul>
                      </li>



                      <li>
                        {/* Routing for About Page  */}
                        <Link to="/About"  exact="true" activeclassname="active">
                          About
                        </Link>
                        {/* Routing for About Page  */}

                        {/* <Link to="/Hero"  exact="true" activeclassname="active">
                          {" "}
                        </Link> */}
                      </li>


                      
                      {/* <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu"> */}
                          {/* <li className="menu-item-has-children">
                            <a href="shop.html">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-with-sidebar.html">
                                  Shop Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li> */}
                          {/* <li>
                          <Link to="/Team_Details"  exact="true" activeclassname="active">
                              Team Details
                            </Link>
                          </li>
                          <li>
                          <Link to="/Service_Details"  exact="true" activeclassname="active">
                              Service Details
                            </Link>
                          </li> */}

                          {/* <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                          <a href="event-details.html">Event Details</a>
                          </li>
                          <li>
                            <a href="service.html">Services</a>
                          </li>

                          <li>
                          <a href="event.html">Event</a>
                          </li>

                          <li>
                            <a href="error.html">Error Page</a>
                          </li> */}
                        {/* </ul>
                      </li> */}

                      {/* <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        {/* Routing for Contact Page  */}
                        <Link to="/Contact"  exact="true" activeclassname="active">
                          Contact
                          {/* <a href="contact.html">Contact</a> */}
                          {/* Routing for Contact Page  */}
                        </Link>
                      </li>
                    </ul>
                  </nav>


                  <button
                    type="button"
                    className="vs-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars" /> Menu
                  </button>
                </div>

 
 
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                   
                    <Link to="/JoinNow" className="vs-btn wave-btn" >
                      Join Now
                       
                    </Link>
 {/* <button type="button" className="searchBoxToggler icon-btn">
                      <i className="far fa-search" />
                    </button> */}
                    {/* <button type="button" className="sideMenuToggler icon-btn">
                      <i className="fal fa-bars" />
                    </button> */}
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
      {/*vs-main-menu-wrapper end*/}
    </header>
    
  );
};

export default WebNav;
