import React from "react";
import FaqDiv from "../components/home/faq";
import Footer from "../components/home/footer";
import Audiences from "../components/home/audiences";
import EarlyAccessDiv from "../components/home/early_access";
import Features from "../components/home/features";
import Works from "../components/home/works";
import Navbar from "../components/navbar";


import {
  Link
} from "react-router-dom";


const Home = () => {
  return (
    <>
      <Navbar />
      <EarlyAccessDiv />
      <Works />
      <Features />
      <Audiences />
      <FaqDiv />
      <Footer />
    </>
  );
};

export default Home;
