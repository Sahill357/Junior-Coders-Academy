import React from 'react'
import LoadScripts from '../scripts/loadScripts';
import Layout from '../components/Layout'

const Team_Details = () => {
  useEffect(() => {
    document.title = 'Team Details'; // Set the title when the component mounts
    return () => {
      document.title = ' '; // Reset the title when the component unmounts
    };
  }, []);
  LoadScripts();
  return (
    <>
       <div>
        <Layout>
        <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
  {/*======== About Section ========*/}
  <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcrumb-bg-1.jpg">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Team Details</h1>
        <ul className="breadcumb-menu">
          <li><a href="#">Home</a></li>
          <li className="active">Team Details</li>
        </ul>
      </div>
    </div>
  </div>
  {/*======== / About Section ========*/}
  {/*======== Team Section ========*/}
  <section className="team-section space-top space-bottom-shape2-plus">
    <div className="container">
      <div className="row team-details">
        <div className="team-img">
          <img src="assets/img/team/team-details.png" alt="team member" />
        </div>
        <div className="col-lg-10 offset-lg-2">
          <div className="team-content-card bg-smoke">
            <h2 className="team-name">Melandina Julieo</h2>
            <span className="team-desig">Full Time Teacher</span>
            <p className="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <div className="info-list">
              <ul>
                <li><strong>Experience:</strong>10 Years</li>
                <li><strong>Experience At:</strong>Kid’s Training, Kid’s Caring.</li>
                <li><strong>Email:</strong><a href="mailto:member@domain.com">member@domain.com</a></li>
                <li><strong>Mobile:</strong><a href="tel:+82012345678">+820-123-456-78</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======== / Team Section ========*/}
  {/*======== Team Section ========*/}
  <section className="team-section bg-smoke space-extra">
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
          <div className="title-area">
            <span className="sub-title">Our Expert Staff</span>
            <h2 className="sec-title">Most Dedicated Staff For Your Child</h2>
          </div>
        </div>
      </div>
      <div className="row  slider-shadow vs-carousel" data-slide-show={3} data-lg-slide-show={2}>
        {/* Single Team */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-card">
            <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
              <img src="assets/img/team/t-1.jpg" alt="team" />
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
        {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-card">
            <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
              <img src="assets/img/team/t-2.jpg" alt="team" />
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
        </div> */}
        {/* Single Team */}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-card">
            <div className="team-img" data-mask-src="assets/img/team/t-mask.png">
              <img src="assets/img/team/t-3.jpg" alt="team" />
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
        </div>
      </div>
    </div>
    <div className="shape-before"><img src="assets/img/shape/before-shape-5.png" alt="shape" /></div>
    <div className="shape-after"><img src="assets/img/shape/after-shape-5.png" alt="shape" /></div>
    <div className="shape-mockup movingX d-none d-hd-block" data-top="12%" data-left="6%"><img src="assets/img/icon/doll-1.png" alt="shapes" /></div>
    <div className="shape-mockup movingX d-none d-hd-block" data-bottom="9%" data-left="5%"><img src="assets/img/icon/shoe-1.png" alt="shapes" /></div>
    <div className="shape-mockup shapePulse d-none d-hd-block" data-top="12%" data-right="5%"><img src="assets/img/icon/dog-2.png" alt="shapes" /></div>
    <div className="shape-mockup movingX d-none d-hd-block" data-bottom="12%" data-right="3%"><img src="assets/img/icon/plane-1.png" alt="shapes" /></div>
  </section>
  {/*======== / Team Section ========*/}
  {/*======== Simple Section ========*/}
  <section className="mockup2 space-top-shape2-plus space-bottom-page">
    <div className="container">
      <div className="row gx-60 gy-30 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="img-box-1">
            <img src="assets/img/normal/img-1.jpg" alt="photo" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
          <span className="sub-title">Service Benefits</span>
          <h2 className="sec-title">We Are Here To Bring Your Child Next Level</h2>
          <p className="mb-50">Monotonectally conceptualize economically sound value after accurate growth strategies. Quickly parallel task client-centric materials with worldwide technologies. Assertively re-engineer interoperable customer</p>
          <div className="feature-box">
            <div className="feature-icon">
              <img src="assets/img/icon/t-1.png" alt="icon" />
            </div>
            <div className="feature-info">
              <h4 className="feature-title">Full Care Of Your Child</h4>
              <p className="feature-text">Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <img src="assets/img/icon/t-2.png" alt="icon" />
            </div>
            <div className="feature-info">
              <h4 className="feature-title">Professional Teachers</h4>
              <p className="feature-text">Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*======== / Simple Section ========*/}
</Layout>
</div>

    </>
  )
}

export default Team_Details
