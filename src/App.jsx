import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { MeetingInfo } from "./components/meetingInfo";
import { About } from "./components/about";
import { Advisors } from "./components/advisors";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Footer from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <MeetingInfo data={landingPageData.MeetingInfo} />
      <Advisors data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
