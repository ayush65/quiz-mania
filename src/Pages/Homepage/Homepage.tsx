/** @format */

import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Homepagecard from "./HomepageCard/Homepagecard";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Homepagecard />
      <Footer />
    </div>
  );
};

export default Homepage;
