import React from "react";
// use this to use globe photo: 
{/* <img src="/img/header/globe.gif" alt="Globe" /> */}
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">

        <div className="intro-text">
        <h1 className="header-title">Artifical Intelligence</h1>
        <h1 className="header-title">UCI</h1>

        <h2 className="header-sub">The organization for all AI things</h2>

        <img src="/img/header/globe.gif" alt="Globe" className="main-pic"/>

        </div>


        


        {/* <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                  

                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};
