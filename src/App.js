import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Services from "./Components/OurServices/Services";
import WorkingProgress from "./Components/WorkingProgress/WorkingProgress";
import Game from "./Components/Game/Game";
import Scroller from "./Scroller/Scroller";
import Footer from "./Components/Footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="about">
        <Content />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="clients">
        <WorkingProgress />
      </Element>
      <Element name="careers">
        <Game />
      </Element>
      <Element name="clients">
        <Scroller />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
