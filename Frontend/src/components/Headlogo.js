/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import hrc2 from "../images/abclogo.svg"
import hrc1 from "../images/hrclogo.svg"

const Headlogo = () => {
  // const image1 =
  //   "src\images\hrc2.jpg";
  // const image2 =
  //   "https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png";

  return (
    <div style={{ padding: "10px 3px" }} className="logo-hrc">
      <img
        style={{ display: "flex", height: "35px", float: "left" }}
        src={hrc2}
      />
      <img style={{ display: "inline-block", height: "35px" }} src={hrc1} />
    </div>
  );
};

export default Headlogo;
