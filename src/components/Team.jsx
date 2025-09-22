export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <h2 className="team-title">Meet the Board</h2>
        <p className="team-descrip">Our lovely team of thirty-two people!</p>

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
                      {d.linkedin && (
                        <p>
                          <a
                            href={"https://www.linkedin.com/in" + d.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                        </p>
                      )}
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
