import React from "react";

export const Advisors = () => {
  return (
    <div id="advisors">
      <div className="text-center">
        <h2 className="advise-title">Advisors</h2>
      </div>

      <div className="advise-cont">
        <div className="advise-box">
          <div>
            <img
              src="img/advisors/ihler.png"
              alt="Globe"
              className="advise-pic"
            />
          </div>

          <div>
            <h1 className="advise-name">Alexander Ihler</h1>
            <h3 className="advise-descrip text-wrap">
              Ihler conducts research in artificial intelligence and machine
              learning, focusing on statistical methods for learning from data
              and on approximate inference techniques for graphical models.
              Applications of his work includes data mining and information
              fusion in sensor networks, computer vision and image processing,
              and computational biology.
            </h3>
          </div>
        </div>

        <div className="advise-box">
          <div>
            <img
              src="img/advisors/mandt.png"
              alt="Globe"
              className="advise-pic"
            />
          </div>

          <div>
            <h1 className="advise-name">Stephan Mandt</h1>
            <h3 className="advise-descrip text-wrap">
              Stephan Mandt is an Associate Professor of Computer Science and
              Statistics at the University of California, Irvine, where he leads
              research at the intersection of deep generative modeling,
              uncertainty quantification, neural data compression, and AI for
              science. His work advances the foundations and applications of
              generative AI, with a particular focus on resource-efficient
              learning and inference algorithms, as well as AI-driven scientific
              discovery.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
