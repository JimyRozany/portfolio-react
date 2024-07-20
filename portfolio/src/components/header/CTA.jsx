import React from "react";
import CV from "../../assets/CV2.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="CV" className="btn">
        Download CV{" "}
      </a>
      <a href="" className="btn btn-primary">
        let's Talk
      </a>
    </div>
  );
};

export default CTA;
