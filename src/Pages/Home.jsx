import React from "react";
import Hero from "../Components/Hero";
import { Products } from "../Components";

function Home() {
  return (
    <div className="container">
      <Hero heading={"Lorem Ipsum"} btnText={"About Us"} btnLink={"/about"} />
      <Products sliceFrom={10} SliceTo={16} title={"Trending Products"} />
    </div>
  );
}

export default Home;
