import React from "react";

export const About = (props) => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>We're AI@UCI.</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              <div>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <div
                        key={`${d[0]}-${i}`}
                        className="col-lg-6 col-sm-6 col-xs-12 info-item"
                      >
                        <div>
                          <h4>{d[0]}</h4>
                          <span>{d[1]}</span>
                        </div>
                      </div>
                    ))
                  : "loading"}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
