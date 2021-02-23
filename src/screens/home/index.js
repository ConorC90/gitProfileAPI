import React from "react";
import Search from "./Search";
import Errors from "../../components/Errors";
import Profiles from "./Profiles";
import "../../home.css";

const Index = () => (
  <div id="home" className="page">
    <div className="container">
      <Search />
      <Errors />
      <Profiles />
    </div>
  </div>
);
export default Index;
