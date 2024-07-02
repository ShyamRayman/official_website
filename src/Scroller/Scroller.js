import React, { useEffect } from "react";
import "./Scroller.css";

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");

        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });

          scrollerInner.addEventListener("mouseenter", () => {
            scrollerInner.style.animationPlayState = "paused";
          });
          scrollerInner.addEventListener("mouseleave", () => {
            scrollerInner.style.animationPlayState = "running";
          });
        }
      });
    }
  }, []);

  return (
    <div className="Scrollerbody">
      <h2 style={{ textAlign: "center" }} className="fw-bold">
        Our Clients
      </h2>
      <h6 className="text-center h6scroller">
        Our clients aren't just clients; they are valued partners in progress.
        We take pride in understanding their unique needs, tailoring solutions,
        and fostering long-term relationships.
      </h6>

      <div className="scroller" data-speed="fast">
        <div className="scroller__inner">
          <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Apple-Logo-500x281-min.png"
              alt="Apple"
            />
          </a>
          <a
            href="https://microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Microsoft-Logo-500x163-min.png"
              alt="Microsoft"
            />
          </a>
          <a
            href="https://alphabet.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Alphabet-logo-500x281-min.png"
              alt="alphabet"
            />
          </a>
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Amazon-Logo-500x313-min.png"
              alt="amazon"
            />
          </a>
          <a
            href="https://nvidia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/NVIDIA_logo-768x432-min.png"
              alt="nvidia"
            />
          </a>
          <a
            href="https://meta.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Meta-Logo-500x281-min.png"
              alt="meta"
            />
          </a>
          <a href="https://tesla.com">
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Tesla-logo-500x281-min.png"
              alt="tesla"
            />
          </a>
        </div>
      </div>

      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
       
        </div>
      </div>
    </div>
  );
};

export default Scroller;
