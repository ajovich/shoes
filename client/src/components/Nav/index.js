import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import '../Nav/index.css'
import CategoryMenu from "../CategoryMenu";
import Cart from "../Cart";
// import ProductList from "../ProductList";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row signUpLogin">
          <li className="mx-1">
            <Link to="/signup">
              SIGNUP
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row headerText">
      <h1>
        <Link to="/">
          Run It<span role="img" className="greenDot">.</span>
        </Link>
      </h1>
      {showNavigation()}
      <div className="homeCategoryMenu">
        <CategoryMenu />
        {/* <ProductList /> */}
      </div>

      <div className="cartHome">
          <Cart />
      </div>
      
      {/* <nav>
        {showNavigation()}
        <div>
            <CategoryMenu />
        </div>
      </nav> */}
    </header>
  );
}

export default Nav;

// import React, { Component } from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import { MenuItems } from "./MenuItems";
// import '../Nav/index.css'

// import ProductList from "../ProductList";
// import CategoryMenu from "../CategoryMenu";
// import Cart from "../Cart";

// .map iterates through array items
// in MenuItems.js, class is "nav-links" and will link to the link title & url
// class Navbar extends Component {
  // sets initial state to false/hamburger menu
  // state = { clicked: false }

  // set state click to the opposite value (t or f, close or hamburger menu) whenever user clicks
  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked})
  // }

  // render() {
  //   return(
  //     <nav className="navbarItems">

  //       <h1 className="navbarLogo">
  //         <Link to="/">
  //             Run It. 
  //         </Link> 
  //       </h1>

  //       <div className="menuIcon" onClick={this.handleClick}>
  //           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
  //       </div>
        
  //       <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
  //         {MenuItems.map((item, index) => {
  //             return (
  //               <li key={index}>
  //                 <a className={item.cName} href={item.url}>
  //                   {item.title}
  //                 </a>
  //               </li>
  //             )
  //         })}
  //       </ul>

        // { <div className="container">
        //       <CategoryMenu />
              {/* <ProductList /> */}
              {/* <Cart />
          </div> }
      </nav>
    )
  }
} */}

// export default Navbar;