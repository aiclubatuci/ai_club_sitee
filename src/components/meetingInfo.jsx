import React from "react";

export const MeetingInfo = (props) => {
  return (
    <section id="meeting-info" className="text-center">
      <div className="container">
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Meeting Info</h2>
        </div> */}

        <h2 id="meeting-title">Meeting Info</h2>

        <div id="meeting-cont"> 
          <div id="meeting-descrip" class="text-wrap">Join us every Friday at 5:00-6:30pm in DBH 6100 for general meetings and workshops!</div>
          <hr></hr>
          <div>
            <img id="meeting-pic" src="/img/meeting/aif.jpg" alt="meet" className="img-responsive"/>
          </div>
        </div>
        
        
        
        
        
        
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-md-6 outer-meeting-info-card"
                >
                  <div className="inner-meeting-info-card">
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div> */}
      </div>
    </section>
  );
};
