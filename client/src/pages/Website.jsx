import React from "react";

import Hero from "../components/Hero/Hero";

import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Context from "../components/Contact/Context";
import GetStarted from "../components/GetStarted/GetStarted";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
      <Value></Value>
      <Context></Context>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Website;
