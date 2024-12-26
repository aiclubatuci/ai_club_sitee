import React from "react";

export const MeetingInfo = (props) => {
  return (
    <section id="meeting-info" className="text-center">
      <div className="container">
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Meeting Info</h2>
        </div> */}

        <h2 className="meeting-title">Meeting Info</h2>

        <div className="meeting-cont"> 
          <div className="meeting-descrip">Join us every Friday at 5:00-6:30pm in DBH 6100 for general meetings and workshops!</div>

          <div>
            <img src="/img/meeting/meeting.png" alt="meet" className="meeting-pic"/>
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
