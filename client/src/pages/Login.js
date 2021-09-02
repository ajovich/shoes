import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const paperOutlinedStyle={padding: 20, height: "50vh", width: 400, margin: "100px auto"}
  const avatarCircleStyle={backgroundColor: "#D5D69A"}
  const buttonStyle={margin: "24px 0", backgroundColor: "#D5D69A", fontSize: "18px", color: "#141414"}
  const signUpLinkStyle={marginLeft: "8px", fontSize: "12px"}
  const noAccountStyle={fontSize: "12px"}
  const gridStyle={backgroundColor: "#FBFBF2", height: "100vh"}

  return (
    <Grid style={gridStyle}>
      <Paper variant="outlined" style={paperOutlinedStyle}>
          <Grid align="center">
              <br />
              <Avatar style={avatarCircleStyle}></Avatar>
              <br />
              <h2>Welcome Back!</h2>
              <br />
          </Grid>

          <form onSubmit={handleFormSubmit}>
              <TextField label="Email" placeholder="Email address" fullWidth required name="email" type="email" id="email" onChange={handleChange} />
              <TextField label="Password" placeholder="Password" name="password" type="password" id="pwd" fullWidth required onChange={handleChange} />
              
              {error ? (
                <div>
                  <p className="error-text">Please try again. Incorrect email or password.</p>
                </div>
              ) : null}

              <Button type="submit" color="default" variant="contained" style={buttonStyle} fullWidth>LOGIN</Button>
          </form>

          <Typography style={noAccountStyle}> Don't have an account?
              <Link to="/signup" style={signUpLinkStyle}>
                  Sign Up
              </Link>
          </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;