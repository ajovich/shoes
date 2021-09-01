import React from "react";
// import "../components/Hero/index.css";
import "../../src/index.css";

const Home = () => {
  return (
    <section className="home">
      <div className="homeContainer">
        <div className="sneakerShapeImages">
          <div className="circleShape"></div>
          <img src="/images/shoe_03.png" alt="Black and gray Nike running shoe with laces out" className="sneakerImage" />
        </div>

        <body className="bodyContainer">
          <h1 className="descriptionTitle">Run It.</h1>

          <p className="descriptionBody">
              A curated selection of running shoes chosen <br />for you. <br />Sign up for a free account today.
          </p>

          <a href="/signup" className="exploreMoreButton">Explore More</a>
        </body>
      </div>
    </section>
  );
};

export default Home;