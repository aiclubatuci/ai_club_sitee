// import { Image } from "./image";
import React, {useRef} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
// import exlogo from "../../src/components/picsss/v1.png";
// import logo2 from "../../src/components/picsss/logo2.jpg";
// import { piccc } from "../../src/images/ex-logo.jpg";
import v1 from "../../src/components/picsss/v1.png";
import v2 from "../../src/components/picsss/v2.png"
import v3 from "../../src/components/picsss/v3.png";
import v4 from "../../src/components/picsss/v4.png"
// import v5 from "../../src/components/picsss/v5.png";
import v6 from "../../src/components/picsss/v6.png"
import v7 from "../../src/components/picsss/v7.png";

export const Gallery = (props) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  }

  const images = [
    {

      src: v1,
      videoLink: "https://www.youtube.com/watch?v=VTIINMtxUz8",
      description: "Intro to Neural Networks | Fall 2017 "
    },

    {

      src: v2,
      videoLink: "https://www.youtube.com/watch?v=r1DxiaESyGo",
      description: "Intro to AI | Workshop #1 | Spring 2018"
    },

    {

      src: v3,
      videoLink: "https://www.youtube.com/watch?v=-EvIk9cMvG4",
      description: "Uncertainty in AI | Workshop #1 | Spring 2018"
    },

    {

      src: v4,
      videoLink: "https://www.youtube.com/watch?v=3jcRStHfNls",
      description: "Intro to Neural Nets"
    },

    {

      src: v6,
      videoLink: "https://www.youtube.com/watch?v=1aep-7MJ3OY",
      description: "Intro to TensorFlow | Week 7"
    },

    {

      src: v7,
      videoLink: "https://www.youtube.com/watch?v=jn7pdXoVbrw",
      description: "Careers in AI"
    }

    

  ]


  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Youtube Channel</h2>
          <p>
            Artifical Intelligence at UCI's Youtube Channel
          </p>
        </div>

        {/* gallery from here */}
        

        <div className="cont">

          {/* <button className="previousss" onClick={() => sliderRef.current.slickPrev()}>
            Previous
          </button> */}

          <Slider ref = {sliderRef} {...settings}>

          {images.map((image, index) => (
              <div className="slide-item" key={index}>
                {/* <a href={image.videoLink} target="_blank" rel="noopener noreferrer"> */}
                <a href={image.videoLink}>
                  <img src={image.src} alt={image.alt} className="slide-image" />
                </a>
                <p className="image-description">{image.description}</p> {/* Description for each image */}
              </div>
            ))}

          </Slider>

          {/* <button className="nexttt" onClick={() => sliderRef.current.slickNext()}>
          Next
          </button> */}

        </div>



      </div>
    </div>
  );
};
