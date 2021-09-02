import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const buttonStyle={margin: "24px 0", padding: "12px", backgroundColor: "#D5D69A", fontSize: "18px", color: "#141414"}
const errorStyle={height: "560px", paddingTop: "250px", textAlign: "center"}
const backgroundStyle={backgroundColor: "#FBFBF2", height: "100vh"}
const errorMessageStyle1={fontSize: "84px"}
const errorMessageStyle={fontSize: "62px"}

const NoMatch = () => {
  return (
    <div style={backgroundStyle}>
        <div style={errorStyle}>
            <h1 style={errorMessageStyle1}>404</h1>
            <h2 style={errorMessageStyle}>Page Not Found</h2>
            <Link to="/">
                <Button type="submit" color="default" variant="contained" style={buttonStyle}>BACK TO HOME</Button>
            </Link>
        </div>
    </div>
  );
};

export default NoMatch;