import React, { useState,useEffect } from 'react';
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import LoadScripts from '../../scripts/loadScripts';
 
 const Appointment = () => {
  useEffect(() => {
    document.title = 'Appointment'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);

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

     <div>
      <Layout>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
        <main>
          <div>
       {/*======== About Section ========*/}
  <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-1.jpg">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Appointment </h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active"> Appointment  </li>
        </ul>
      </div>
    </div>
  </div>
  {/*======== / About Section ========*/}
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
                    <Link to="/LearnMore"   className="vs-btn wave-btn style-1">
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
              <img src="assets/img/shape/rainbow-star.png" alt="shapes" />
            </div>
            <div
              className="shape-mockup moving d-none d-hd-block"
              data-top="22%"
              data-left="7%"
            >
              <img src="assets/img/icon/note.png" alt="shapes" />
            </div>
            <div
              className="shape-mockup shapePulse d-none d-hd-block"
              data-bottom="20%"
              data-left="7%"
            >
              <img src="assets/img/icon/bird.png" alt="shapes" />
            </div>
          </section>
          {/*======== / Appointment Section ========*/}
          
          
          </div>
          </main>
          </Layout>
     </div>
   )
 }
 
 export default Appointment
 
 

 