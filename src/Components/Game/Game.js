import React, { useEffect } from "react";
import "intersection-observer";
import "./Game.css";

const Game = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".servicesgame .card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animation");
        } else {
          entry.target.classList.remove("show-animation");
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="containertwo mt-5 container">
      <h2 className="fw-bold">Our Projects</h2>
      <h6 className="text-center ">
        Have a sneak peak at the Arts we Crafted
      </h6>
      <section className="servicesgame">
        <div className="card">
          <div className="content">
            <div className="iconsGame">
              <img
                src="https://i.pinimg.com/736x/db/2a/ca/db2aca8978cbe0bfd33169fcca1068fe.jpg"
                alt="img"
              />
            </div>
            <div className="title fw-bold">Precision Strike</div>
            <p>Mobile shooting game</p>
            <div className="NumberBoxone">
              <span>Learn More</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="iconsGame">
              <img
                src="https://i.pinimg.com/736x/87/5c/2a/875c2aca8eb7508f7c8cbfe45c98b4ac.jpg"
                alt="serviceimg2"
              />
            </div>
            <div className="title fw-bold">Turbo Thrust</div>
            <p>Mobile legends AAA title racing mobile game</p>
            <div className="NumberBoxone">
              <span>Learn More</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="iconsGame">
              <img
                src="https://i.pinimg.com/564x/7d/bf/99/7dbf99a11c376dd303b72584d216eb7a.jpg"
                alt="serviceimg3"
              />
            </div>
            <div className="title fw-bold mt-1">Startup Fest Expo</div>
            <p>
              Provide the first draft of a project, accept minor and major
              revisions.
            </p>
            <div className="NumberBoxone">
              <span>Learn More</span>
            </div>
          </div>
        </div>

      
      </section>
    </div>
  );
};

export default Game;
