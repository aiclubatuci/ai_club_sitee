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

          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <img id="meeting-pic" src="/img/meeting/aif.jpg" alt="Anteater Involvement Fair"/>
              </div>

              <div class="item">
                <img id="meeting-pic" src="/img/meeting/aif2.jpg" alt="Anteater Involvement Fair"/>
              </div>

              <div class="item">
                <img id="meeting-pic" src="/img/meeting/aws1.jpg" alt="AWS Workshop"/>
              </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="sr-only">Next</span>
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
