import house from "../images/house.png";
import fire from "../images//fire.png";
import group from "../images//group.png";
import target from "../images/target.png";
import Navbar from "../components/navbar";
import gift from "../images//gift.png";
import React from "react";

const Home = () => {
  return (
    <div className="main">
      <div className="border">
        <Navbar />
        <div className="imageSection">
          <h1 className="heading">New</h1>
          <img id="house" src={house} alt="" />
          <img className="fire" src={fire} alt="" />
          <h1 className="heading"> Home</h1>
        </div>

        <div className="b ">
          <div
            className="tile"
            style={{
              backgroundColor: "#4a3a3d",
              color: "#f5e5d8",
              fontSize: "30px",
            }}
          >
            <p>Boost maintain a sense of comredry among colleages.</p>
          </div>
          <div className="tile">
            <p style={{ color: "#4a3a3d", fontSize: "18px" }}>
              Fits any group size
            </p>
            <img src={target} alt="" className="iimg" />
          </div>
          <div className="tile">
            <p style={{ color: "#4a3a3d", fontSize: "18px" }}>
              Fits any group size
            </p>
            <img src={group} alt="" className="iimg" />
          </div>
          <div className="tile">
            <p style={{ color: "#4a3a3d", fontSize: "18px" }}>Remote Access</p>
            <img src={gift} alt="" className="iimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
