import React from "react";
import "./WorkingProgress.css";

const WorkingProgress = () => {
  return (
    <div class="containerone mt-5 container">
      <h2 className="fw-bold">Our Working Process</h2>
      <h6 className="text-center mb-5">
        A well-structured workflow with great design execution
      </h6>
      <section class="servicesworking">
        <div class="card">
          <div class="content">
            <div class="icons">
              <img src="https://idacreations.com/img/7566.jpg" alt="img" />
            </div>
            <div class="title fw-bold">Discussion</div>
            <p>
              Under the client's business,goals and challenges for building
              relationship.
            </p>
            <div className="NumberBox">1</div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="icons">
              <img
                src="https://idacreations.com/img/3081627.jpg"
                alt="serviceimg2"
              />
            </div>
            <div class="title fw-bold">Ideate</div>
            <p>
              Gather ideas and create the first concept for the future product.
            </p>
            <div className="NumberBox">2</div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="iconss">
              <img
                src="https://idacreations.com/img/Work_7.jpg"
                alt="serviceimg3"
              />
            </div>
            <div class="title fw-bold titlehere">Execution</div>
            <p>
              Provide the first draft of a project,accept minor and major
              revisions.
            </p>
            <div className="NumberBox">3</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkingProgress;
