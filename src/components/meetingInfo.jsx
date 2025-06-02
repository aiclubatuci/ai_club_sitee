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
          <div id="meeting-descrip" className="text-wrap">Join us every Friday at 5:00-6:30pm in DBH 6100 for general meetings and workshops!</div>
          <hr></hr>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
              <li data-target="#myCarousel" data-slide-to="5"></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <img id="meeting-pic" src="/img/meeting/aif.jpg" alt="Anteater Involvement Fair"/>
              </div>

              <div className="item">
                <img id="meeting-pic" src="/img/meeting/aif2.jpg" alt="Anteater Involvement Fair"/>
              </div>

              <div className="item">
                <img id="meeting-pic" src="/img/meeting/aws1.jpg" alt="AWS Workshop"/>
              </div>

              <div className="item">
                <img id="meeting-pic" src="/img/meeting/cloudhacks.jpg" alt="AWS Cloudhacks"/>
              </div>

              <div className="item">
                <img id="meeting-pic" src="/img/meeting/racecar.png" alt="AWS Deepracer"/>
              </div>

              <div className="item">
                <img id="meeting-pic" src="/img/meeting/IMG_3265.png" alt="AWS Cloudhacks"/>
              </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
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
