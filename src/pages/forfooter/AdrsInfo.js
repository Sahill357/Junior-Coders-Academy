import React from 'react'
import Layout from '../../components/Layout'
import LoadScripts from '../../scripts/loadScripts';
import { useEffect } from 'react';
const AdrsInfo = () => {
  useEffect(() => {
    document.title = 'Our Info'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
  LoadScripts();
  return (
    < >
      <Layout>
        <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
           {/*======== About Section ========*/}
  <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-1.jpg">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Our Information </h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active"> Our Information  </li>
        </ul>
      </div>
    </div>
  </div>
  {/*======== / About Section ========*/}
     {/*======== Contact Us Section ========*/}
<section className="contact-section space-page">
  <div className="container">
    <div className="row gx-50 gy-30">
      <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
        <div className="contact-form-box">
          <h2 className="contact-title">Leave a Message</h2>
          <p className="mb-35"> <b> Please feel free to reach out to us  . Your prompt response would be greatly appreciated. </b> </p>
          <form action="https://html.vecurosoft.com/knirpse/demo/assets/mail.php" method="POST" className="contact-form ajax-contact">
            <div className="row">
              <div className="form-group col-12">
                <label htmlFor="name" className="form-label">Your Name*</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name..." required />
              </div>
              <div className="form-group col-12">
                <label htmlFor="email" className="form-label">Your Email*</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your E-mail..." required />
              </div>
              <div className="form-group col-12">
                <label htmlFor="message" className="form-label">Your Message*</label>
                <textarea className="form-control" name="message" id="message" placeholder="Describe Your Opinion" required defaultValue={""} />
              </div>
              <div className="form-group col-12">
                <button type="submit" className="vs-btn wave-btn">Send Now</button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3" />
          </form>
        </div>
      </div>
      <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.1s">
        <div className="contact-info-box">
          <h2 className="contact-title">Our Information</h2>
          <div className="info-media">
            <div className="media-icon">
              <img src="assets/img/icon/location.png" alt="icon" />
            </div>
            <div className="media-body">
              <h4 className="info-title">Office Address:</h4>
              <p className="info-text">  <b>                       Pulse Hospital 1st Floor, Near VIP Hall, Aurangabad (MH) 431001 </b> </p>
            </div>
          </div>
          <div className="info-media">
            <div className="media-icon">
              <img src="assets/img/icon/phone.png" alt="icon" />
            </div>
            <div className="media-body">
              <h4 className="info-title">Call Us For Help:</h4>
              <p className="info-text"><a href="+91 9822112848">+91 9822112848</a> <a href="tel:+91 9822112848"> </a></p>
            </div>
          </div>
          <div className="info-media">
            <div className="media-icon">
              <img src="assets/img/icon/email.png" alt="icon" />
            </div>
            <div className="media-body">
              <h4 className="info-title">Mail info:</h4>
              <p className="info-text"><a href=" info@juniorcoderacademy.com"> info@juniorcoderacademy.com</a>  <a href= "mailto:info@example.com"> </a></p>
            </div>
          </div>
          <div className="contact-location">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.0337709506216!2d8.722988251963706!3d50.14180007933297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f52ee6af359%3A0x2213de038ec1bd12!2svecuro_themes%20%7C%20Webdesign%20%26%20Development!5e0!3m2!1sde!2sde!4v1648732976877!5m2!1sde!2sde" allowFullScreen loading="lazy" /> */}
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.4568039339345!2d75.34865737427596!3d19.88546967404075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2a26156490b%3A0x291378b17bdbea91!2sDualsysco%20Research%20and%20Development!5e0!3m2!1sen!2sin!4v1698934560179!5m2!1sen!2sin"   allowFullScreen loading="lazy"  /> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*======== / Contact Us Section ========*/}
      </Layout>
      
    </>
  )
}

export default AdrsInfo
