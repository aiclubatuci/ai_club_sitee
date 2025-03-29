import React from "react";

export const About = (props) => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img
                src="img/about/zotgpt1.png"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About AI@UCI</h2>
                <p>
                  We promote learning in
                  <span className="yellow text-wrap">
                    {" "}
                    aritifical intelligence{" "}
                  </span>
                  and
                  <span className="yellow text-wrap"> machine learning </span>
                  through hands-on events and team projects.
                </p>
                <h3>
                  More info on our{" "}
                  <a
                    href={"https://discord.gg/zUxJbSAgPc"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-text"
                  >
                    discord
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="about-white">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Our Mission</h2>
                <p>
                  We strive to create a collaborative environment where students
                  can learn, grow, and explore the fascinating world of
                  artificial intelligence through hands-on projects, workshops,
                  and industry connections.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <img
                src="img/about/racecar.png"
                className="img-responsive"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
    // <section id="about">
    //   <div className="about-cont container">

    //     <div className="about-info">
    //       <div>
    //         <img src="img/about/zotgpt1.png" className="about-img img-reponsive" alt="" />{" "}
    //       </div>

    //       <div>
    //         <h2>WE'RE AI@UCI</h2>
    //         <h2 className="about-descrip text-wrap">Learn more about
    //           <span className="blue text-wrap">new technologies</span>
    //           especially within
    //           <span className="blue text-wrap">aritifical intelligence</span>
    //            and
    //           <span className="blue text-wrap">machine learning</span>
    //            through our events and team-projects.</h2>
    //       </div>

    //     </div>

    //     <div className="about-info">
    //       <div>
    //         <h2 className="about-descrip text-wrap">From
    //           <span className="yellow text-wrap">professionals</span>
    //           of the academia to almuni from the industry world, we got you guys
    //           <span className="yellow text-wrap">connected</span>
    //           through our unique seminars.
    //         </h2>
    //       </div>

    //       <div>
    //         <img src="img/about/racecar.png" className="about-img img-responsive" alt="" />{" "}
    //       </div>
    //     </div>

    //     <div className="about-info">
    //       <div>
    //         <img src="img/about/speakers.png" className="about-img img-responsive" alt="" />{" "}
    //       </div>

    //       <div>
    //         <h2 className="about-descrip text-wrap">We have talented and like-minded
    //           <span className="green text-wrap">mentors</span>
    //           ready to support you throughout your
    //           <span className="green text-wrap">AI journey.</span>
    //         </h2>
    //         <h3>More info on our <a href={"https://discord.gg/zUxJbSAgPc"} target="_blank" rel="noopener noreferrer">discord</a></h3>
    //       </div>
    //     </div>

    //   </div>
    // </section>
  );
};
