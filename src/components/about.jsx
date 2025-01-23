import React from "react";

export const About = (props) => {
  return (
    <section id="about">
      <div className="about-cont">

        <div className="about-info">
          <div>
            <img src="img/about/zotgpt1.png" className="about-img" alt="" />{" "}
          </div>

          <div>
            {/* <h2>WE'RE AI@UCI</h2> */}
            <h2 className="about-descrip">Learn more about <span className="blue">new technologies</span> especially within <span className="blue">aritifical intelligence</span> and <span className="blue">machine learning</span> through our events and team-projects.</h2>
          </div>

        </div>

        <div className="about-info">
          <div>
            <h2 className="about-descrip">From <span className="blue">professionals</span> of the academia to almuni from the industry world, we got you guys <span className="blue">connected</span> through our unique seminars.</h2>
          </div>

          <div>
            <img src="img/about/racecar.png" className="about-img" alt="" />{" "}
          </div>
        </div>

        <div className="about-info">
          <div>
            <img src="img/about/speakers.png" className="about-img" alt="" />{" "}
          </div>

          <div>
            <h2 className="about-descrip">We have talented and like-minded <span className="blue">mentors</span> ready to support you throughout your <span className="blue">AI journey.</span></h2>
            <h3>More info on our <a href={"https://discord.gg/zUxJbSAgPc"} target="_blank" rel="noopener noreferrer">discord</a></h3>
          </div>
          
        </div>

        
      </div>
    </section>
  );
};
