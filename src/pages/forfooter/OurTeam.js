import React from 'react'
import Layout from '../../components/Layout'
import LoadScripts from '../../scripts/loadScripts';
import { useEffect } from 'react';
const OurTeam = () => {
  useEffect(() => {
    document.title = 'Our Team'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
  LoadScripts();
  return (
    < >
          <div>                  
     <Layout>
     <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
     <main>
<div>
          {/*======== About Section ========*/}
  <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-1.jpg">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Our Team  </h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active"> Our Team  </li>
        </ul>
      </div>
    </div>
  </div>
  {/*======== / About Section ========*/}
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
                      <a href="team-details.html">Sonia Khan</a>
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
            <img src="assets/img/icon/sun.png" alt="shapes" />
          </div>
          <div
            className="shape-mockup moving d-none d-hd-block"
            data-bottom="10%"
            data-right="4%"
          >
            <img src="assets/img/icon/math-1.png" alt="shapes" />
          </div>
        </section>
        {/*======== / Team Section ========*/}
        </div>
        </main>
   
        </Layout>
        </div>
    </>
  )
}

export default OurTeam


 
