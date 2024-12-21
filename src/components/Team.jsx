import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        {/* <div className="col-md-8 col-md-offset-2 section-title"> */}
          <h2 className="team-title">Meet the Board</h2>
          <p className="team-descrip">
            Our lovely team of twenty-six people!
          </p>
        {/* </div> */}
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>

                    <div className="hover-info">
                    <p>
                      {/* hyperlinked email/linkedin when u hover */}
                      <a href={`mailto:${d.gmail}`} target="_blank" rel="noopener noreferrer">
                        {d.gmail}
                      </a>
                    </p>
                    <p>
                      <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                      </a>
                    </p>

                  </div>

                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
/////////////////////////////////////////////////////

{/* <div id="team" className="text-center">
  <div className="container">
    <div className="col-md-8 col-md-offset-2 section-title">
      <h2>Meet the Board</h2>
      <p>Our lovely team of twenty-six people!</p>
    </div>
    <div id="row">
      {props.data
        ? props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                <div className="image-container">
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="hover-info">
                    <h4>{d.name}</h4>
                    <p>{d.email}</p>
                  </div>
                </div>
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  </div>
</div> */}
