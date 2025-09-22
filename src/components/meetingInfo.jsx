import React from "react";

export const MeetingInfo = () => {
  return (
    <section id="meeting-info" className="text-center">
      <div className="container">
        <h2 id="meeting-title">Meeting Info</h2>

        <div id="meeting-cont">
          <div id="meeting-descrip" className="text-wrap">
            Join us every Wednesday at 4:00-5:30pm in DBH 6100 for general meetings
            and workshops!
          </div>
          <hr></hr>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
              <li data-target="#myCarousel" data-slide-to="5"></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <img
                  id="meeting-pic"
                  src="img/meeting/aif.jpg"
                  alt="Anteater Involvement Fair"
                />
              </div>

              <div className="item">
                <img
                  id="meeting-pic"
                  src="img/meeting/aif2.jpg"
                  alt="Anteater Involvement Fair"
                />
              </div>

              <div className="item">
                <img
                  id="meeting-pic"
                  src="img/meeting/aws1.jpg"
                  alt="AWS Workshop"
                />
              </div>

              <div className="item">
                <img
                  id="meeting-pic"
                  src="img/meeting/cloudhacks.jpg"
                  alt="AWS Cloudhacks"
                />
              </div>

              <div className="item">
                <img
                  id="meeting-pic"
                  src="img/meeting/racecar.png"
                  alt="AWS Deepracer"
                />
              </div>

              <div className="item">
                <img
                  id="meeting-pic"
                  src="img/meeting/IMG_3265.png"
                  alt="AWS Cloudhacks"
                />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
