import React from "react";

export const About = (props) => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img
                src="img/about/DSC8426.jpg"
                className="img-responsive"
                alt="Our board"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text ">
                <h2>About AI at UCI</h2>
                <p>
                  We promote learning in
                  <span className="yellow text-wrap">
                    {" "}
                    artifical intelligence{" "}
                  </span>
                  and
                  <span className="yellow text-wrap"> machine learning </span>
                  through hands-on events and team projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
