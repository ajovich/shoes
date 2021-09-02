import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const paperOutlinedStyle={padding :20, height: "55vh", width: 400, margin: "100px auto"}
  const avatarCircleStyle={backgroundColor: "#D5D69A"}
  const buttonStyle={margin: "24px 0", backgroundColor: "#D5D69A", fontSize: "18px", color: "#141414"}
  const signUpLinkStyle={marginLeft: "8px", fontSize: "12px"}
  const noAccountStyle={fontSize: "12px"}
  const gridStyle={backgroundColor: "#FBFBF2", height: "100vh"}
  const test={width:"200%"}

  return (
    <Grid style={gridStyle}>
        <Paper variant="outlined" style={paperOutlinedStyle}>
            <Grid align="center">
                <br />
                <Avatar style={avatarCircleStyle}></Avatar>
                <br />
                <h2>Sign Up For Free!</h2>
                <br />
            </Grid>

      <form onSubmit={handleFormSubmit}>
          <TextField label="First Name" placeholder="First name" fullWidth name="firstName" type="firstName" id="firstName" onChange={handleChange} />
          <TextField label="Last Name" placeholder="Last name" fullWidth name="lastName" type="lastName" id="lastName" onChange={handleChange} />
          <TextField label="Email" placeholder="Email address" fullWidth name="email" type="email" id="email" onChange={handleChange} />
          <TextField label="Password" placeholder="Password" fullWidth name="password" type="password" id="pwd" onChange={handleChange} />

          <Button type="submit" color="default" variant="contained" style={buttonStyle} fullWidth>SIGN UP</Button>
      </form>

          <Typography style={noAccountStyle}> Already have an account?
              <Link to="/login" style={signUpLinkStyle}>
                  Login
              </Link>
          </Typography>
      </Paper>
    </Grid>
  );
}

export default Signup;