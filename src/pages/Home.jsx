import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import Navbar from "../components/Navbars/MainNavbar";
import Section1 from "../containers/Section1";
import Section10 from "../containers/Section10";
import Section11 from "../containers/Section11";
import Section2 from "../containers/Section2";
import Section3 from "../containers/Section3";
import Section4 from "../containers/Section4";
import Section5 from "../containers/Section5";
import Section6 from "../containers/Section6";
import Section7 from "../containers/Section7";
import Section8 from "../containers/Section8";
import Section9 from "../containers/Section9";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Section1 />
      <Section2 />
      
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />

        {/* Footer */}
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
