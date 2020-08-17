import React from "react";
import Search from "./containers/Search";
import Errors from "./components/Errors";
import Profiles from "./containers/Profiles";
import "./home.css";

const Home = () => (
  <div id="home" className="page">
    <div className="container">
      <Search />
      <Errors />
      <Profiles />
    </div>
  </div>
);
export default Home;
