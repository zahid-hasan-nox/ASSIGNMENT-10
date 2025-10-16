import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import SatisfiedUsers from "../components/SatisfiedUsers";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Cards></Cards>
      <SatisfiedUsers></SatisfiedUsers>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
