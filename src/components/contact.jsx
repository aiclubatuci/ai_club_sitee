import "./Footer/Footer.css";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="footer-content">
        <div className="contact-info">
          <ul>
            <li>
              <i
                className="fa fa-map-marker"
                style={{ marginRight: "5px" }}
              ></i>
              <span>DBH 6100, UC Irvine</span>
            </li>
            <li>
              <i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i>
              <span>Wednesdays 4:00-5:30 PM</span>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="mailto:aiclub@uci.edu">
                <i
                  className="fa fa-envelope"
                  style={{ marginRight: "5px" }}
                ></i>{" "}
                Email
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/Ye49y4veWn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/discord.svg"
                  alt="Discord"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "11px",
                  }}
                />
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aiatuci"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" style={{ marginRight: "5px" }}></i>{" "}
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aiatuci"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-instagram"
                  style={{ marginRight: "5px" }}
                ></i>{" "}
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="additional-links">
          <ul>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#meeting-info" className="page-scroll">
                Meetings
              </a>
            </li>
            <li>
              <a href="#advisors" className="page-scroll">
                Advisors
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
