import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
        <div className="text-center">
          <h2 className="advise-title">Advisors</h2>
        </div>

        <div className="advise-cont">
          <div className="advise-box">
            <div>
              <img src="/img/advisors/ihler.png" alt="Globe" className="advise-pic"/>
            </div>

            <div>
              <h1 className="advise-name">Alexander Ihler</h1>
              <h3>"I work in artificial intelligence and machine learning, focusing on statistical methods for learning from data and on approximate inference techniques for graphical models. Applications of my work include data mining and information fusion in sensor networks, computer vision and image processing, and computational biology."</h3>
            </div>

          </div>


          <div className="advise-box">
            <div>
              <img src="/img/advisors/mandt.png" alt="Globe" className="advise-pic"/>
            </div>

            <div>
              <h1 className="advise-name">Stephan Mandt</h1>
              <h3>"I work in artificial intelligence and machine learning, focusing on statistical methods for learning from data and on approximate inference techniques for graphical models. Applications of my work include data mining and information fusion in sensor networks, computer vision and image processing, and computational biology."</h3>
            </div>
            
          </div>

        </div>
        
    
    
    </div>
  );
};
