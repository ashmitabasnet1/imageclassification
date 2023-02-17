import React from "react";
import "./Landing.css";
//import { Card, Row, Col } from "antd";

const LandingPage = () => {
  return (
    <>
      <div className="bg">
        <br />
        <br />
        <h1 className="txt1">
          <ol>Prediction of Realtime Object </ol>
          <ol>Using LightWeight CNN Model</ol>
          <ol>Cifer10</ol>
          <ol> Dataset </ol>
          <ol> ReactJs</ol>
        </h1>

        <div className="landingbg">
          <p className="txt2">
            <b>
              {" "}
              Presented By:
              <ol>Anita Banjara</ol>
              <ol> Ashmita Basnet</ol>
              <ol> Badri Raj Aran</ol>
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
