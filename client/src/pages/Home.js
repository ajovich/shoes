import React from "react";
import "../../src/index.css";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="sneakerShapeImages">
          <div className="circleShape"></div>
          <img src="/images/highDefNikeShoeImage.png" alt="Black and gray Nike running shoe with laces out" className="sneakerImage" />
        </div>

        <div className="bodyContainer">
          <h1 className="descriptionTitle">Run It<span className="greenDot">.</span></h1>

          <p className="descriptionBody">
              A curated selection of running shoes chosen <br />for you. <br />Sign up for a free account today.
          </p>

          <a href="/signup" className="exploreMoreButton">Explore More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;