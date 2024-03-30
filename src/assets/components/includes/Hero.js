import React from "react";
import main_1 from "./../../images/main/main-1.png";
import dot from "./../../images/main/main-dot.png";
import rectangle from "./../../images/main/rectangle.png";

export default function Hero() {
  return (
    <div id="Hero">
      <div className="left">
        <div className="top">
          <h1>
            Hello, I'm Albert, a <br /> UI/UX <span>Designer.</span>
            <div className="rectangle">
              <img src={rectangle} alt="rect" />
            </div>
          </h1>
          <p className="para">
            Product Designer, IJI/IJX Designer, and developer based in razil.
            Over <br />
            the past 17 years, as an art director and designer, I've work with
            big <br />
            companies and up-and-coming startups.
          </p>
          <div className="buttons">
            <button className="btn hire">HIRE ME</button>
            <button className="btn btn-transparent work">VIEW WORK</button>
          </div>
        </div>

        <div className="bottom">
          <p>Follow me on</p>
          <div className="social">
            <a href="#">
              <div className="icon">
                <img
                  src={
                    require("./../../images/main/dribbble-logo 1.svg").default
                  }
                  alt="dribble"
                />
              </div>
            </a>
            <a href="#">
              <div className="icon bg-icon">
                <img
                  src={
                    require("./../../images/main/behance 1.svg").default
                  }
                  alt="behance"
                />
              </div>
            </a>
            <a href="#">
              <div className="icon">
                <img
                  src={
                    require("./../../images/main/facebook 1.svg").default
                  }
                  alt="fb"
                />
              </div>
            </a>
            <a href="#">
              <div className="icon">
                <img
                  src={
                    require("./../../images/main/twitter 1.svg").default
                  }
                  alt="tw"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="img">
          <img src={main_1} alt="boy" />
        </div>
        <div className="dot">
          <img src={dot} alt="dot" />
        </div>
      </div>
    </div>
  );
}
