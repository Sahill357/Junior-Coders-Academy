 
import Layout from "../components/Layout";
import LoadScripts from "../scripts/loadScripts";
import Preloader from "../scripts/preLoader";
import { Link,NavLink } from "react-router-dom";
import   { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from "react";


const Hero = () => {
  useEffect(() => {
    document.title = 'Home'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  Preloader();
  LoadScripts();

  const [formData, setFormData] = useState({
    parentName: '',
    number: '',
    email: '',
    childName: '',
    childAge: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    const validationErrors = {};
  
    // Custom validation to prevent special characters and handle phone number, child age, and minimum child name length
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; //eslint-disable-line
  
    if (name === 'number' && !/^\d{10}$/.test(value)) {
      validationErrors[name] = 'Phone No should contain exactly 10 digits';
    } else if (name === 'childAge' && (!/^\d+$/.test(value) || Number(value) >= 100)) {
      validationErrors[name] = 'Age of Child should be a number below 100';
    } else if (name === 'childName') {
      if (value.trim().length < 3) {
        validationErrors[name] = 'Child Name should be at least 3 characters long';
      } else if (specialCharsRegex.test(value)) {
        validationErrors[name] = 'Special characters are not allowed';
      }
    } else if (specialCharsRegex.test(value)) {
      validationErrors[name] = 'Special characters are not allowed';
    } else {
      // Clear any existing error for this field
      delete validationErrors[name];
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Update the errors state
    setErrors({ ...errors, ...validationErrors });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate the form fields
    const validationErrors = {};
  
    if (!formData.parentName.trim()) {
      validationErrors.parentName = 'Guardian Name is required';
    } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(formData.parentName)) { //eslint-disable-line
      validationErrors.parentName = 'Special characters are not allowed';
    }
  
    if (!formData.number.trim() || !/^\d{10}$/.test(formData.number)) {
      validationErrors.number = 'Valid Number is required';
    }
  
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      validationErrors.email = 'Valid Email is required';
    }
  
    if (!formData.childName.trim()) {
      validationErrors.childName = 'Child Name is required';
    }
  
    if (!formData.childAge.trim() || !/^\d+$/.test(formData.childAge) || Number(formData.childAge) >= 100) {
      validationErrors.childAge = 'Valid Age is required';
    }
  
    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If there are no errors, you can perform your form submission logic here
      // For this example, we'll reset the form data and clear errors
      setFormData({
        parentName: '',
        number: '',
        email: '',
        childName: '',
        childAge: '',
        message: '',
      });
      setErrors({});
    }
  };
  
  const isValidEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  return (
    <>

      <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>

        <section className="vs-hero-wrapper position-relative">
          <div className="section-before">
            <img src="assets/img/shape/header-after.png" alt="shape" />
          </div>
          <div className="section-after d-none d-md-block">
            <img src="assets/img/shape/hero-after.png" alt="shape" />  
          </div>
          <div
            className="hero-slider1 vs-carousel"
            data-slide-show={1}
            data-md-slide-show={1}
            data-fade="true"
          >
            {/* Single Slide one*/}
            <div className="vs-hero-inner">
              <div
                className="vs-hero-bg"
                data-bg-src="assets/img/bg/AI.jpg"
              />
              <div
                className="hero-content"
                data-bg-src="assets/img/shape/hcontent-bg.png"
              >
                <img
                  className="con-before"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-before.png"
                  alt="shape"
                />
                <img
                  className="con-after"
                  data-ani="slideinright"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-after.png"
                  alt="shape"
                />
                <img
                  className="car"
                  data-ani="slidetopleft"
                  data-ani-delay="0.4s"
                  // src="assets/img/icon/car.png"
                  // alt="icon"
                />
                <div
                  className="hero-text"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span>Learn</span>
                  <i className="fas fa-circle" />
                  <span>Play</span>
                </div>
                <h1
                  className="hero-title text-title mb-30"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                Welcome To {" "}
                  <span className="focus text-theme"> Jr.Coders </span>  Empower With AI & Algorithm
                   
                </h1>
                <Link to="/Appointment"
                  href="contact.html"
                  className="vs-btn wave-btn"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  Book a visit
                </Link>
              </div>
            </div>
 {/* Single Slide one*/}




 {/* Single Slide two*/}
 <div className="vs-hero-inner">
              <div
                className="vs-hero-bg"
                data-bg-src="assets/img/bg/Pi7.jpg"
              />
              <div
                className="hero-content"
                data-bg-src="assets/img/shape/hcontent-bg.png"
              >
                <img
                  className="con-before"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-before.png"
                  alt="shape"
                />
                <img
                  className="con-after"
                  data-ani="slideinright"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-after.png"
                  alt="shape"
                />
                <img
                  className="car"
                  data-ani="slidetopleft"
                  data-ani-delay="0.4s"
                  // src="assets/img/icon/car.png"
                  // alt="icon"
                />
                <div
                  className="hero-text"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span>Learn</span>
                  <i className="fas fa-circle" />
                  <span>Play</span>
                </div>
                <h1
                  className="hero-title text-title mb-30"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                Making Apps{" "}
                  <span className="focus text-theme"> Better </span> Than a Using Apps

                   
                </h1>
                <Link to="/Appointment"
                  href="contact.html"
                  className="vs-btn wave-btn"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  Book a visit
                </Link>
              </div>
            </div>
 {/* Single Slide two*/}



 {/* Single Slide three*/}
 <div className="vs-hero-inner">
              <div
                className="vs-hero-bg"
                data-bg-src="assets/img/bg/thirdimg.jpg"
              />
              <div
                className="hero-content"
                data-bg-src="assets/img/shape/hcontent-bg.png"
              >
                <img
                  className="con-before"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-before.png"
                  alt="shape"
                />
                <img
                  className="con-after"
                  data-ani="slideinright"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-after.png"
                  alt="shape"
                />
                <img
                  className="car"
                  data-ani="slidetopleft"
                  data-ani-delay="0.4s"
                  // src="assets/img/icon/car.png"
                  // alt="icon"
                />
                <div
                  className="hero-text"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span>Learn</span>
                  <i className="fas fa-circle" />
                  <span>Play</span>
                </div>
                <h1
                  className="hero-title text-title mb-30"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                   Making Games {" "}
                  <span className="focus text-theme">Better  </span> Than Playing Games
                   
                </h1>
                <Link to="/Appointment"
                  href="contact.html"
                  className="vs-btn wave-btn"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  Book a visit
                </Link>
              </div>
            </div>
 {/* Single Slide three*/}

            
            {/* Single Slide two */}


            {/* <div className="vs-hero-inner">
              <div
                className="vs-hero-bg"
                data-bg-src="assets/img/bg/funcoding.jpg"
              />
              <div
                className="hero-content"
                data-bg-src="assets/img/shape/hcontent-bg.png"
              >
                <img
                  className="con-before"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-before.png"
                  alt="shape"
                />
                <img
                  className="con-after"
                  data-ani="slideinright"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-after.png"
                  alt="shape"
                />
                <img
                  className="car"
                  data-ani="slidetopleft"
                  data-ani-delay="0.4s"
                  src="assets/img/icon/car.png"
                  alt="icon"
                />
                <div
                  className="hero-text"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span>Child</span>
                  <i className="fas fa-circle" />
                  <span>Play</span>
                </div>
                <h1
                  className="hero-title text-title mb-30"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                  We Care of <span className="focus text-theme">Children</span>{" "}
                  start with us!
                </h1>
                <a
                  href="contact.html"
                  className="vs-btn wave-btn"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  Book a visit
                </a>
              </div>
            </div> */}
            {/* Single Slide two */}
            {/* Single Slide three*/}
            {/* <div className="vs-hero-inner">
              <div
                className="vs-hero-bg"
                data-bg-src="assets/img/bg/gaming.jpg"
              />
              <div
                className="hero-content"
                data-bg-src="assets/img/shape/hcontent-bg.png"
              >
                <img
                  className="con-before"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-before.png"
                  alt="shape"
                />
                <img
                  className="con-after"
                  data-ani="slideinright"
                  data-ani-delay="0.2s"
                  src="assets/img/shape/hero-con-after.png"
                  alt="shape"
                />
                <img
                  className="car"
                  data-ani="slidetopleft"
                  data-ani-delay="0.4s"
                  src="assets/img/icon/car.png"
                  alt="icon"
                />
                <div
                  className="hero-text"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span>Learn</span>
                  <i className="fas fa-circle" />
                  <span>Care</span>
                </div>
                <h1
                  className="hero-title text-title mb-30"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                  We Help to <span className="focus text-theme">Grow Up</span>{" "}
                  Your Children
                </h1>
                <a
                  href="contact.html"
                  className="vs-btn wave-btn"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  Book a visit
                </a>
              </div>
            </div> */}
          </div>
        </section>
 {/* Single Slide three*/}




        <div>
          {/*======== Service Section ========*/}
          <section className="service-section space">
            <div className="container">
              <div
                className="row text-center justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                  <div className="title-area">
                    <span className="sub-title">Service We Provide</span>
                    <h2 className="sec-title">
                      Providing Good Qualities For Your Loving Kids
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row gy-30">
                {/* Single item */}
                <div
                  className="col-lg-3 col-md-6 service-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-card-inner">
                    <div className="sr-icon">
                      <img src="assets/img/icon/mobile1.png" alt="icon" />
                    </div>
                    <h2 className="sr-title h4">
                      {/* <a href="service-details.html">App Development</a> */}
                      <Link to="/MobileApp"  >App Development</Link>
                    </h2>
                    <p className="sr-text">
                    Mobile app development is not just about writing code; it's about building a digital world where imagination knows no bounds.
                    </p>
                  </div>
                </div>
                {/* Single item */}
                <div
                  className="col-lg-3 col-md-6 service-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-card-inner">
                    <div className="sr-icon">
                      <img src="assets/img/icon/robo.png" alt="icon" />
                    </div>
                    <h2 className="sr-title h4">
                      {/* <a href="service-details.html">AI & Algorithm</a> */}
                      <Link to="/AiAlgoritm"  >  Ai & Algoritm</Link>
                    </h2>
                    <p className="sr-text">
                    The possibilities in AI and algorithms are limitless, and it's an exciting time for aspiring coders to be part of this transformative field.
                    </p>
                  </div>
                </div>
                {/* Single item */}
                <div
                  className="col-lg-3 col-md-6 service-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-card-inner">
                    <div className="sr-icon">
                      <img src="assets/img/icon/com.png" alt="icon" />
                    </div>
                    <h2 className="sr-title h4">
                      {/* <a href="service-details.html">Web Designing</a> */}
                      <Link to="/WebDesigning"  >  Web Designing</Link>
                    </h2>
                    <p className="sr-text">
                    Web designing is not just about creating websites; it's about designing the digital experiences that shape our interconnected world.
                    </p>
                  </div>
                </div>
                {/* Single item */}
                <div
                  className="col-lg-3 col-md-6 service-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-card-inner">
                    <div className="sr-icon">
                      <img src="assets/img/icon/iot.png" alt="icon" />
                    </div>
                    <h2 className="sr-title h4">
                      {/* <a href="service-details.html">IoT</a> */}
                      <Link to="/IOT"  >    IoT</Link>
                    </h2>
                    <p className="sr-text">
                    IoT connecting devices; it's about exploring possibilities of a hyper-connected world and becoming the architects of the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup z-index-3 d-none d-xl-block"
              data-top="-4%"
              data-left="4%"
            >
              <img src="assets/img/shape/service-line.png" alt="shapes" />
            </div>
            <div
              className="shape-mockup shapePulse z-index-negative d-none d-xl-block"
              data-top="27%"
              data-left="9%"
            >
              {/* <img src="assets/img/icon/lolypop.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup shapePulse rotate z-index-negative"
              data-top="19%"
              data-right="21%"
            >
              {/* <img src="assets/img/icon/star-sm.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup shapePulse rotate z-index-negative"
              data-bottom="20%"
              data-right="10%"
            >
              {/* <img src="assets/img/icon/star.png" alt="shapes" /> */}
            </div>
          </section>
          {/*======== / Service Section ========*/}

   

       
      
        
          {/*======== About Section ========*/}
          <section className="about-section bg-smoke space">
            <div className="container">
              <div className="row flex-column-reverse flex-lg-row align-items-center gy-30">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="text-center text-lg-start">
                    <span className="sub-title">More About Us</span>
                    <h2 className="sec-title big-title">
                      Special Care For Your Children
                    </h2>
                    <p className="fs-md mb-30">
                      <b>
                        {" "}
                        "Building young minds at Junior Coders Academy is a
                        blend of passion, guidance, and innovation. We foster
                        creativity through lines of code, ignite curiosity with
                        the magic of technology, and empower our young coders to
                        shape the future with their digital dreams. Together,
                        we're not just teaching code; we're nurturing the next
                        generation of tech visionaries."
                      </b>
                    </p>
                    
                    <Link to="/LearnMore"   className="vs-btn wave-btn style-1">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="shape-slider-area">
                    <button
                      data-slick-prev="#sliderOne"
                      className="simple-arrow arrow-left"
                    >
                      <i className="far fa-chevron-left" />
                    </button>
                    <button
                      data-slick-next="#sliderOne"
                      className="simple-arrow arrow-right"
                    >
                      <i className="far fa-chevron-right" />
                    </button>
                    <div
                      className="shape-slider vs-carousel"
                      id="sliderOne"
                      data-slide-show={1}
                      data-md-slide-show={1}
                    >
                      <div className="slide-item">
                        <img
                          className="line-1"
                          data-ani="slideinup"
                          data-ani-delay=".2s"
                          src="assets/img/shape/line-1.png"
                          alt="shape"
                        />
                        <img
                          className="line-2"
                          data-ani="slideinup"
                          data-ani-delay=".5s"
                          src="assets/img/shape/line-2.png"
                          alt="shape"
                        />
                        <img
                          src="assets/img/shape/nn.png"
                          alt="shape"
                        />
                      </div>
                      <div className="slide-item">
                        <img
                          className="line-1"
                          data-ani="slideinup"
                          data-ani-delay=".2s"
                          src="assets/img/shape/line-1.png"
                          alt="shape"
                        />
                        <img
                          className="line-2"
                          data-ani="slideinup"
                          data-ani-delay=".5s"
                          src="assets/img/shape/line-2.png"
                          alt="shape"
                        />
                        <img
                          src="assets/img/shape/nn22.png"
                          alt="shape"
                        />
                      </div>
                      <div className="slide-item">
                        <img
                          className="line-1"
                          data-ani="slideinup"
                          data-ani-delay=".2s"
                          src="assets/img/shape/line-1.png"
                          alt="shape"
                        />
                        <img
                          className="line-2"
                          data-ani="slideinup"
                          data-ani-delay=".5s"
                          src="assets/img/shape/line-2.png"
                          alt="shape"
                        />
                        <img
                          src="assets/img/shape/nn3.png"
                          alt="shape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup shapePulse d-none d-lg-block rotate"
              data-bottom="22%"
              data-right="5%"
            >
              {/* <img src="assets/img/icon/star.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup shapePulse d-none d-hd-block"
              data-top="17%"
              data-left="6%"
            >
              {/* <img src="assets/img/icon/cap-plane.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup rotate d-none d-sm-block z-index-2"
              data-bottom="-7%"
              data-left="6%"
            >
              {/* <img src="assets/img/icon/busket-ball.png" alt="shapes" /> */}
            </div>
          </section>
          {/*======== / About Section ========*/}

          {/*======== counter Section ========*/}
          <div className="counter-section bg-smoke-blue space">
            <div className="container">
              <div className="row gy-20 justify-content-between">
                {/* Single Item */}
                <div
                  className="col-lg-auto col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="counter-item text-center">
                    <div className="connter_icon">
                      <i className="fa-light fa-chalkboard-user" />
                    </div>
                    <span className="counter-number">45</span>
                    <p className="counter-text h4">Qualified Teachers</p>
                  </div>
                </div>
                {/* Single Item */}
                <div
                  className="col-lg-auto col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="counter-item text-center">
                    <div className="connter_icon">
                      <i className="fa-light fa-award" />
                    </div>
                    <span className="counter-number">20</span>
                    <p className="counter-text h4">Years Of Experience</p>
                  </div>
                </div>
                {/* Single Item */}
                <div
                  className="col-lg-auto col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="counter-item text-center">
                    <div className="connter_icon">
                      <i className="fa-light fa-user-group-crown" />
                    </div>
                    <span className="counter-number">565</span>
                    <p className="counter-text h4">Students Enrolled</p>
                  </div>
                </div>
                {/* Single Item */}
                <div
                  className="col-lg-auto col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="counter-item text-center">
                    <div className="connter_icon">
                      <i className="fal fa-trophy-alt" />
                    </div>
                    <span className="counter-number">15</span>
                    <p className="counter-text h4">Total Award</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-after style-2">
              <img src="assets/img/shape/main-shape-after.png" alt="shape" />
            </div>
          </div>
          {/*======== / counter Section ========*/}

          <NavLink to="/classes"  exact="true" activeclassname="active">
            {/*======== Classes Section ========*/}
            <section className="classes-section space">
              <div className="container">
                <div
                  className="row text-center justify-content-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                    <div className="title-area">
                      <span className="sub-title">On Going Classes</span>
                      <h2 className="sec-title">
                        Take The Classes &amp; Start Learning From Today
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="row vs-carousel"
                  data-slide-show={3}
                  data-arrows="true"
                >
                  {/* Single Class */}
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="class-card">
                      <div className="class-img">
                        <a href="class-details.html">
                          <img
                            src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?size=626&ext=jpg"
                            alt="class"
                          />
                        </a>
                        {/* <span className="class-fee">$45</span> */}
                      </div>
                      <div className="class-content">
                        <h2 className="class-title h4"></h2>
                          <h3 href="class-details.html"> AI & Algorithm</h3>
                          {/* <Link href="class-details.html"> AI & Algorithm</Link> */}
                        
                        <p className="class-text">
                          AI uses algorithms as its tools. Imagine AI as a smart
                          chef (the computer) in a kitchen. The chef follows
                          different recipes (algorithms) to cook various dishes
                          (solve different problems).
                        </p>
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
                        <Link to="/AiAlgoritm"  className="vs-btn style-1">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single Class */}
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="class-card">
                      <div className="class-img">
                        <a href="class-details.html">
                          <img
                            src="https://img.freepik.com/premium-photo/man-sits-desk-with-computer-web-page-it_745528-1478.jpg?size=626&ext=jpg"
                            alt="class"
                          />
                        </a>
                        {/* <span className="class-fee">$45</span> */}
                      </div>
                      <div className="class-content">
                        <h2 className="class-title h4"></h2>
                          {/* <a href="class-details.html">
                            {" "}
                            Fun Coding , Algorithm & Games
                          </a> */}
                          <h3 href="class-details.html"> Fun Coding , Algorithm & Games</h3>
                        
                        <p className="class-text">
                          You use special instructions to tell the computer what
                          to do, making it a fun way to be creative and solve
                          puzzles.
                        </p>
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
                        <Link to="/FunCoding"  className="vs-btn style-1">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single Class */}
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="class-card">
                      <div className="class-img">
                        <a href="class-details.html">
                          <img
                            src="https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?size=626&ext=jpg"
                            alt="class"
                          />
                        </a>
                        {/* <span className="class-fee">$45</span> */}
                      </div>
                      <div className="class-content">
                        <h2 className="class-title h4"></h2>
                          {/* <a href="class-details.html">
                            {" "}
                            Mobile App Development
                          </a> */}
                            <h3 href="class-details.html"> Mobile App Development</h3>
                        
                        <p className="class-text">
                        Mobile app development is a rewarding journey for junior coders. It combines   problem-solving, and applications.
                        </p>
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
                        <Link to="/MobileApp"  className="vs-btn style-1">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single Class */}
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="class-card">
                      <div className="class-img">
                        <a href="class-details.html">
                          <img
                            src="https://img.freepik.com/free-vector/eye-tracking-technology-abstract-concept-illustration_335657-3697.jpg?w=740&t=st=1694765057~exp=1694765657~hmac=d7b5f105ac5a86ea8e137d5003fa61c5ffe52ccd3052d8bce5174e8a51294ec3"
                            alt="class"
                          />
                        </a>
                        {/* <span className="class-fee">$45</span> */}
                      </div>
                      <div className="class-content">
                        <h2 className="class-title h4"></h2>
                          {/* <a href="class-details.html"> Computer Vision</a> */}
                          <h3 href="class-details.html">  Computer Vision</h3>
                        
                        <p className="class-text">
                        Computer vision offers junior coders a captivating journey into the world of visual recognition and artificial intelligence. It combines creativity, problem-solving.
                        </p>
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
                        {/* <a href="class-details.html" className="vs-btn style-1">
                          Read More
                        </a> */}
                           <Link to="/ComputerVision"  className="vs-btn style-1">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="shape-mockup shapePulse d-none d-xl-block"
                data-top="15%"
                data-left="7%"
              >
                {/* <img src="assets/img/icon/dog.png" alt="shapes" /> */}
              </div>
              <div
                className="shape-mockup rotate d-none d-hd-block"
                data-bottom="17%"
                data-left="7%"
              >
                {/* <img src="assets/img/icon/curve-line.png" alt="shapes" /> */}
              </div>
              <div
                className="shape-mockup rotate z-index-negative"
                data-top="32%"
                data-right="9%"
              >
                {/* <img src="assets/img/icon/star-3.png" alt="shapes" /> */}
              </div>
              <div
                className="shape-mockup shapePulse d-none d-hd-block"
                data-bottom="16%"
                data-right="9%"
              >
                {/* <img src="assets/img/icon/triangle.png" alt="shapes" /> */}
              </div>
            </section>
            {/*======== / Classes Section ========*/}
          </NavLink>

          {/*======== Process Section ========*/}
          <section className="process-section bg-smoke-blue space-extra">
            <div className="container">
              <div className="row gx-150 gy-30 justify-content-center">
                {/* Single Item */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="process-card">
                    <span className="process-number">01</span>
                    <img
                      className="process-direction"
                      src="assets/img/icon/arrow-curve.png"
                      alt="direction"
                    />
                    <div className="process-head">
                      <div className="process-icon">
                        <img src="assets/img/icon/process-1.png" alt="icon" />
                      </div>
                      <h4 className="process-title">Expert Instructor</h4>
                    </div>
                    <p className="process-text">
                      <b>
                        {" "}
                        expert instructor at Junior Coders is a true enthusiast
                        of technology and coding.
                      </b>
                    </p>
                  </div>
                </div>
                {/* Single Item */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="process-card">
                    <span className="process-number">02</span>
                    <img
                      className="process-direction"
                      src="assets/img/icon/arrow-curve.png"
                      alt="direction"
                    />
                    <div className="process-head">
                      <div className="process-icon">
                        <img src="assets/img/icon/process-2.png" alt="icon" />
                      </div>
                      <h4 className="process-title">Known Everything</h4>
                    </div>
                    <p className="process-text">
                      <b>
                        {" "}
                        Their passion for the subject matter is infectious,
                        igniting a fire within their students.{" "}
                      </b>
                    </p>
                  </div>
                </div>
                {/* Single Item */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="process-card">
                    <span className="process-number">03</span>
                    <div className="process-head">
                      <div className="process-icon">
                        <img src="assets/img/icon/process-3.png" alt="icon" />
                      </div>
                      <h4 className="process-title">Well Children</h4>
                    </div>
                    <p className="process-text">
                      <b>
                        Here, children are not just consumers of technology;
                        they are its creators.{" "}
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-before">
              <img src="assets/img/shape/before-shape-2.png" alt="shape" />
            </div>
            <div className="shape-after">
              <img src="assets/img/shape/after-shape-2.png" alt="shape" />
            </div>
            <div
              className="shape-mockup z-index-3 d-none d-lg-block"
              data-top="-18%"
              data-right="0%"
            >
              <img src="assets/img/shape/cloud-1.png" alt="shapes" />
            </div>
            <div
              className="shape-mockup z-index-3 d-none d-lg-block"
              data-bottom="-11%"
              data-left="0%"
            >
              <img src="assets/img/shape/cloud-2.png" alt="shapes" />
            </div>
            <div
              className="shape-mockup shapePulse d-none d-hd-block"
              data-top="34%"
              data-left="6%"
            >
              {/* <img src="assets/img/icon/butterfly-3.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup shapePulse d-none d-hd-block"
              data-top="50%"
              data-right="6%"
            >
              {/* <img src="assets/img/icon/rocket.png" alt="shapes" /> */}
            </div>
          </section>
          {/*======== / Process Section ========*/}

          {/*======== Appointment Section ========*/}
          <section className="appointment-section space-bottom space-top-shape-plus">
            <div className="container">
              <div className="row gx-60 gy-30 flex-column-reverse flex-lg-row align-items-center">
              <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.1s">
      <form
        action="https://html.vecurosoft.com/knirpse/demo/mail.php"
        method="POST"
        className="appointment-form ajax-contact"
        onSubmit={handleSubmit}
      >
        <div className="row gx-20">
          <div className="form-group col-sm-6">
            <input
              type="text"
              className="form-control"
              name="parentName"
              id="gurdian-name"
              placeholder="Guardian Name"
              value={formData.parentName}
              onChange={handleInputChange}
            />
            {errors.parentName && <span className="error" style={{ color: 'red' }}>{errors.parentName}</span>}
          </div>
          <div className="form-group col-sm-6">
            <input
              type="text"
              className="form-control"
              name="number"
              id="number"
              placeholder="Phone No (Digits Only)"
              value={formData.number}
              onChange={handleInputChange}
            />
            {errors.number && <span className="error" style={{ color: 'red' }}>{errors.number}</span>}
          </div>
          <div className="form-group col-12">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div className="form-group col-sm-6">
            <input
              type="text"
              className="form-control"
              name="childName"
              id="child-name"
              placeholder="Child Name"
              value={formData.childName}
              onChange={handleInputChange}
            />
            {errors.childName && <span className="error" style={{ color: 'red' }}>{errors.childName}</span>}
          </div>
          <div className="form-group col-sm-6">
            <input
              type="text"
              className="form-control"
              name="childAge"
              id="child-age"
              placeholder="Age of Child (Digits Only)"
              value={formData.childAge}
              onChange={handleInputChange}
            />
            {errors.childAge && <span className="error" style={{ color: 'red' }}>{errors.childAge}</span>}
          </div>
          <div className="form-group col-12">
            <textarea
              className="form-control"
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="vs-btn wave-btn">
              Submit
            </button>
          </div>
        </div>
        <p className="form-messages mb-0 mt-3" />
      </form>
    </div>
                <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
                  <div className="text-center text-lg-start">
                    <span className="sub-title">Make Appointment</span>
                    <h2 className="sec-title big-title">
                      Join Our Fun with Cutie Kids
                    </h2>
                    <p className="fs-md mb-30">
                      <b>
                        "In a world driven by technology, where innovation is
                        the heartbeat of progress, there exists a place where
                        young minds embark on a thrilling adventure into the
                        realm of coding and computer science. This place is none
                        other than the Junior Coders Academy, a sanctuary of
                        learning where children are not just taught but
                        inspired, not just educated but empowered to shape the
                        future."
                      </b>
                    </p>
                    <Link to="/Appointment"   className="vs-btn wave-btn style-1">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup z-index-3 d-none d-hd-block"
              data-bottom="-8%"
              data-right="0%"
            >
              {/* <img src="assets/img/shape/rainbow-star.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup moving d-none d-hd-block"
              data-top="22%"
              data-left="7%"
            >
              {/* <img src="assets/img/icon/note.png" alt="shapes" /> */}
            </div>
            <div
              className="shape-mockup shapePulse d-none d-hd-block"
              data-bottom="20%"
              data-left="7%"
            >
              {/* <img src="assets/img/icon/bird.png" alt="shapes" /> */}
            </div>
          </section>
          {/*======== / Appointment Section ========*/}
        </div>

        {/*======== Team Section ========*/}
        <section className="team-section bg-smoke space-top space-extra-bottom">
          <div className="container">
            <div
              className="row text-center justify-content-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                <div className="title-area">
                  <span className="sub-title">Our Expert Staff</span>
                  <h2 className="sec-title">
                    Most Dedicated Staff For Your Child
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="row  vs-carousel"
              data-slide-show={3}
              data-lg-slide-show={2}
              data-arrows="true"
            >
              {/* Single Team */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-card">
                  <div
                    className="team-img"
                    data-mask-src="assets/img/team/t-mask.png"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"
                      alt="team"
                    />
                    <div className="team-content">
                      <p className="team-text">
                        Assertively repurpose orthogonal architectures through
                        just in time manufactured products.
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
                  <button className="icon-btn expand-btn">
                    <i className="fas fa-share-alt" />
                  </button>
                  <div className="team-info">
                    <h4 className="team-title">
                      <a href="team-details.html">Bableo Dablo</a>
                    </h4>
                    <span className="team-desig">Kids Specialist</span>
                  </div>
                </div>
              </div>
              {/* Single Team */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-card">
                  <div
                    className="team-img"
                    data-mask-src="assets/img/team/t-mask.png"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"
                      alt="team"
                    />
                    <div className="team-content">
                      <p className="team-text">
                        Assertively repurpose orthogonal architectures through
                        just in time manufactured products.
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
                  <button className="icon-btn expand-btn">
                    <i className="fas fa-share-alt" />
                  </button>
                  <div className="team-info">
                    <h4 className="team-title">
                      <a href="team-details.html">Rose Marry</a>
                    </h4>
                    <span className="team-desig">Drawing Teacher</span>
                  </div>
                </div>
              </div>
              {/* Single Team */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-card">
                  <div
                    className="team-img"
                    data-mask-src="assets/img/team/t-mask.png"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"
                      alt="team"
                    />
                    <div className="team-content">
                      <p className="team-text">
                        Assertively repurpose orthogonal architectures through
                        just in time manufactured products.
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
                  <button className="icon-btn expand-btn">
                    <i className="fas fa-share-alt" />
                  </button>
                  <div className="team-info">
                    <h4 className="team-title">
                      <a href="team-details.html">Jabian Joe</a>
                    </h4>
                    <span className="team-desig">Kids Teacher</span>
                  </div>
                </div>
              </div>
              {/* Single Team */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-card">
                  <div
                    className="team-img"
                    data-mask-src="assets/img/team/t-mask.png"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg"
                      alt="team"
                    />
                    <div className="team-content">
                      <p className="team-text">
                        Assertively repurpose orthogonal architectures through
                        just in time manufactured products.
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
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <button className="icon-btn expand-btn">
                    <i className="fas fa-share-alt" />
                  </button>
                  <div className="team-info">
                    <h4 className="team-title">
                      <Link href="team-details.html">Sonia Khan</Link>
                    </h4>
                    <span className="team-desig">Kids Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup movingX d-none d-sm-block"
            data-top="18%"
            data-left="12%"
          >
            {/* <img src="assets/img/icon/car-2.png" alt="shapes" /> */}
          </div>
          <div
            className="shape-mockup shapePulse d-none d-hd-block"
            data-bottom="20%"
            data-left="5%"
          >
            {/* <img src="assets/img/icon/sun.png" alt="shapes" /> */}
          </div>
          <div
            className="shape-mockup moving d-none d-hd-block"
            data-bottom="10%"
            data-right="4%"
          >
            {/* <img src="assets/img/icon/math-1.png" alt="shapes" /> */}
          </div>
        </section>
        {/*======== / Team Section ========*/}

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
                <Link className="text-inherit" href="tel:+25621582222">
                  256 2158 2222
                </Link>
              </h2>
            </div>
            <Link to="/LearnMore" className="vs-btn wave-btn">
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
            {/* <img src="assets/img/icon/rainbow-cloud.png" alt="shapes" /> */}
          </div>
          <div
            className="shape-mockup shapePulse d-none d-hd-block"
            data-top="40%"
            data-right="14%"
          >
            {/* <img src="assets/img/icon/butterfly-4.png" alt="shapes" /> */}
          </div>
        </section>
        {/*======== / CTA Section ========*/}

        {/*======== Blog Section ========*/}
        <section className="blog-section space-top space-extra-bottom">
          <div className="container">
            <div
              className="row text-center justify-content-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                <div className="title-area">
                  <span className="sub-title">Latest News Posts</span>
                  <h2 className="sec-title">Get Know Our Weekly Update News</h2>
                </div>
              </div>
            </div>
            <div
              className="row vs-carousel"
              data-slide-show={3}
              data-arrows="true"
            >
              {/* Single blog */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="vs-blog blog-card">
                  <div className="blog-img">
                    <Link href="blog-details.html">
                      <img
                        src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=626&ext=jpg"
                        alt="blog"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="blog-details.html">
                        <i className="fal fa-calendar-alt" />
                        10 October, 2023
                      </Link>
                      <Link href="blog-details.html">
                        <i className="fal fa-comments" />
                        02 Comments
                      </Link>
                    </div>
                    <h4 className="blog-title">
                      <Link href="blog-details.html">
                        Education Always Best For Parent Develope
                      </Link>
                    </h4>
                    <Link href="blog-details.html" className="link-btn">
                      Read More <i className="far fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Single blog */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="vs-blog blog-card">
                  <div className="blog-img">
                    <Link href="blog-details.html">
                      <img
                        src="https://img.freepik.com/free-vector/computer-programming-camp-illustration_335657-434.jpg?size=626&ext=jpg"
                        alt="blog"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="blog-details.html">
                        <i className="fal fa-calendar-alt" />
                        12 November, 2023
                      </Link>
                      <Link href="blog-details.html">
                        <i className="fal fa-comments" />
                        05 Comments
                      </Link>
                    </div>
                    <h4 className="blog-title">
                      <Link href="blog-details.html">
                        A Happy Learning Process for Your Child
                      </Link>
                    </h4>
                    <Link href="blog-details.html" className="link-btn">
                      Read More <i className="far fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Single blog */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="vs-blog blog-card">
                  <div className="blog-img">
                    <Link href="blog-details.html">
                      <img
                        src="https://img.freepik.com/free-vector/international-trade-concept-illustration_114360-9151.jpg?size=626&ext=jpg"
                        alt="blog"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="blog-details.html">
                        <i className="fal fa-calendar-alt" />
                        01 December, 2023
                      </Link>
                      <Link href="blog-details.html">
                        <i className="fal fa-comments" />
                        10 Comments
                      </Link>
                    </div>
                    <h4 className="blog-title">
                      <Link href="blog-details.html">
                        Best Learning Practice in Child Age
                      </Link>
                    </h4>
                    <Link href="blog-details.html" className="link-btn">
                      Read More <i className="far fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Single blog */}
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="vs-blog blog-card">
                  <div className="blog-img">
                    <Link href="blog-details.html">
                      <img
                        src="https://img.freepik.com/premium-vector/chat-talk_1200-452.jpg?size=626&ext=jpg"
                        alt="blog"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="blog-details.html">
                        <i className="fal fa-calendar-alt" />
                        03 October, 2023
                      </Link>
                      <Link href="blog-details.html">
                        <i className="fal fa-comments" />
                        01 Comment
                      </Link>
                    </div>
                    <h4 className="blog-title">
                      <Link href="blog-details.html">
                        We Provide Best Education For Your Child
                      </Link>
                    </h4>
                    <Link href="blog-details.html" className="link-btn">
                      Read More <i className="far fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup shapePulse d-none d-md-block"
            data-top="22%"
            data-left="8%"
          >
            {/* <img src="assets/img/icon/apple.png" alt="shapes" /> */}
          </div>
          <div
            className="shape-mockup moving d-none d-hd-block"
            data-bottom="22%"
            data-left="4%"
          >
            {/* <img src="assets/img/icon/ruler.png" alt="shapes" /> */}
          </div>
          <div
            className="shape-mockup movingX d-none d-xl-block"
            data-top="17%"
            data-right="6%"
          >
            {/* <img src="assets/img/icon/cloud-3.png" alt="shapes" /> */}
          </div>
          <div
            className="shape-mockup rotate d-none d-hd-block"
            data-bottom="24%"
            data-right="6%"
          >
            {/* <img src="assets/img/icon/math-2.png" alt="shapes" /> */}
          </div>
        </section>
        {/*======== / Blog Section ========*/}
      </Layout>
    </>
  );
};

export default Hero;
