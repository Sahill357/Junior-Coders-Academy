import React from "react";
// import LoadScripts from '../scripts/loadScripts';
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ title, description,imgup1 ,imgup2 ,imgup3,imgup4,imgup5,imgup6,imgdown1,imgdown2,imgdown3,imgdown4,imgdown5,imgdown6,}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedClass: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    selectedClass: "",
  });

  const validateForm = () => {
    const { name, email, selectedClass } = formData;
    const newErrors = {};

    // Validation logic
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!selectedClass) {
      newErrors.selectedClass = "Please select a class";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit it or perform other actions
      console.log("Form submitted!");
    }
  };                                                                                                                                                                                                                     

  // console.log(title);
  return (
    
    <>
      <div>
        {/*======== Class Section ========*/}
        <section className="class-section bg-smoke space-page">
          <div className="container">
            <div className="row gx-60">
              <div className="col-xl-8 col-lg-7">
                <div className="class-details">
                  <div
                    className="row class-big-img vs-carousel"
                    id="classBig"
                    data-slide-show={1}
                    data-md-slide-show={1}
                    data-fade="true"
                  >
                    <div className="col-12">
                      <img src={imgup1}
                        // src="https://img.freepik.com/free-vector/man-working-with-laptop-cartoon-character-freelancer-using-computer-freelance-business-remote-job-distant-work-time-management-home-office_335657-2089.jpg?size=626&ext=jpg "
                        alt="class"
                      />  
                    </div>
                    <div className="col-12">
                      <img src={imgup2}
                        // src="https://img.freepik.com/free-vector/air-conditioning-refrigeration-services-abstract-concept_335657-3181.jpg?size=626&ext=jpg "
                        alt="class"
                      />
                    </div>
                    <div className="col-12">
                      <img src={imgup3}
                        // src="https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-1897.jpg?size=626&ext=jpg "
                        alt="class"
                      />
                    </div>
                    <div className="col-12">
                      <img src={imgup4}
                        // src="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?size=626&ext=jpg "
                        alt="class"
                      />
                    </div>
                    <div className="col-12">
                      <img src={imgup5}
                        // src="https://img.freepik.com/free-vector/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character_335657-2579.jpg?size=626&ext=jpg "
                        alt="class"
                      />
                    </div>
                    <div className="col-12">
                      <img src={imgup6}
                        // src="https://img.freepik.com/free-vector/problem-solving-creative-decision-difficult-task-lateral-thinking-man-assembling-puzzle-cartoon-character-right-choice-missing-item_335657-2108.jpg?size=626&ext=jpg "
                        alt="class"
                      />
                    </div>
                  </div>
                  <div
                    className="row class-thumb-img mb-35 vs-carousel"
                    data-slide-show={5}
                    data-lg-slide-show={4}
                    data-md-slide-show={5}
                    data-sm-slide-show={3}
                    data-xs-slide-show={2}
                    data-asnavfor="#classBig"
                  >
                    <div className="col-auto">
                      <img src={imgdown1}
                        // src="https://img.freepik.com/free-vector/man-working-with-laptop-cartoon-character-freelancer-using-computer-freelance-business-remote-job-distant-work-time-management-home-office_335657-2089.jpg?size=626&ext=jpg"
                        alt="class"
                      />
                    </div>
                    <div className="col-auto">
                      <img src={imgdown2}
                        // src="https://img.freepik.com/free-vector/air-conditioning-refrigeration-services-abstract-concept_335657-3181.jpg?size=626&ext=jpg"
                        alt="class"
                      />
                    </div>
                    <div className="col-auto">
                      <img src={imgdown3}
                        // src="https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-1897.jpg?size=626&ext=jpg"
                        alt="class"
                      />
                    </div>
                    <div className="col-auto">
                      <img src={imgdown4}
                        // src="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?size=626&ext=jpg"
                        alt="class"
                      />
                    </div>
                    <div className="col-auto">
                      <img src={imgdown5}
                        // src="https://img.freepik.com/free-vector/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character_335657-2579.jpg?size=626&ext=jpg"
                        alt="class"
                      />
                    </div>
                    <div className="col-auto">
                      <img src={imgdown6}
                        // src="https://img.freepik.com/free-vector/problem-solving-creative-decision-difficult-task-lateral-thinking-man-assembling-puzzle-cartoon-character-right-choice-missing-item_335657-2108.jpg?size=626&ext=jpg"
                        alt="class"
                      />
                    </div>
                  </div>
                  <h2 className="single-title">
                    <b> {title}</b>
                  </h2>
                  <div className="service-content">
                    <p>
                      <b>{description}</b>
                    </p>
                    <div className="check-list style-4">
                      <ul>
                        <li>Social Skill</li>
                         {/* <li>Music Classes</li>  
                         <li>Finger Plays</li> */}
                        <li>Sensory Activities</li>
                         <li>Self - Selected Play</li>
                        <li>Circle Time</li>
                        <li>Self Help Skills</li>  
                        <li>Focused Learning</li>
                        <li>Communication</li>
                        {/* <li>Singing Songs</li>   */}
                        <li>Outdoor Activities</li>
                        <li>Online Playing</li>
                        <li>Konowledge Learning</li>
                        <li>Task Practice</li>
                        <li>Good Work</li>
                      </ul>
                    </div>  
                  </div>
                  {/* Register Form */}
                  <div className="vs-register-form">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <h3 className="blog-inner-title">Register For Your Child</h3>
        </div>
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`form-control style2 ${errors.name && "error"}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
            <i className="fal fa-user" />
          </div>
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className={`form-control style2 ${errors.email && "error"}`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
            <i className="fal fa-envelope" />
          </div>
          <div className="form-group col-12">
            <select
              name="selectedClass"
              id="classselect"
              className={`form-select style2 ${errors.selectedClass && "error"}`}
              value={formData.selectedClass}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled hidden>
                Select Class
              </option>
              <option value="languageclass">Language Class</option>
              <option value="mathematicsclass">Mathematics Class</option>
              <option value="kidsonlineclass">Kids Online Class</option>
              <option value="practicalclasses">Practical Classes</option>
            </select>
            {errors.selectedClass && (
              <div className="error-message">{errors.selectedClass}</div>
            )}
          </div>
          <div className="col-12 form-group">
            <textarea
              name="comment"
              placeholder="Write a Comment"
              id="commentForm"
              className="form-control style2"
              value={formData.comment}
              onChange={handleChange}
            />
            <i className="far fa-pencil-alt" />
          </div>
          <div className="col-12 form-group">
            <button className="vs-btn">
              <i className="fal fa-paper-plane" /> Register Now
            </button>
          </div>
        </div>
      </form>
    </div>
                  {/* Register Form End */}
                </div>{" "}
                {/* / class details */}
              </div>{" "}
              {/* / col-8 end */}
              {/* Sidebar */}
              <div className="col-xl-4 col-lg-5">
                <aside className="sidebar-area class-sidebar">
                  <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                    <div className="class-info-wrap">
                      <div className="info-item">
                        <i className="fas fa-calendar-alt" />
                        <div className="info">
                          <h6 className="title">Start Date: </h6>
                          <span className="text">25 October, 2023</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-user" />
                        <div className="info">
                          <h6 className="title">Student Ages: </h6>
                          <span className="text">03 - 06 Years</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-users-class" />
                        <div className="info">
                          <h6 className="title">Number Of Kids: </h6>
                          <span className="text">30 Child Student</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-clock" />
                        <div className="info">
                          <h6 className="title">Class Time: </h6>
                          <span className="text">9:00am - 12:00pm</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-sunrise" />
                        <div className="info">
                          <h6 className="title">Class Day: </h6>
                          <span className="text">Monday, Friday</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-language" />
                        <div className="info">
                          <h6 className="title">Language: </h6>
                          <span className="text">English/Hindi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                    <div className="author-widget-wrap">
                      <div className="avator">
                        <img
                          src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1694415507~exp=1694416107~hmac=bb129e04822ef71416e224a8c99ae9c0a47bf7c02909e6aaacb7ef29ba3d410e"
                          alt="avator"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="name text-title">
                          <Link href="classes.html">Jenny Rose</Link>
                        </h4>
                        <span className="desig">Teacher</span>
                      </div>
                      <p className="author-bio">
                        Gressively reinvent optimal expertise without go forward
                        initiatives. virtual applications without resource.
                      </p>
                      <div className="multi-social">
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/*======== / Class Section ========*/}
      </div>
    </>
  );
};

export default Card;
