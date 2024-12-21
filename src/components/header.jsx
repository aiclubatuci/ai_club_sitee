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


      </div>
    </header>
  );
};
