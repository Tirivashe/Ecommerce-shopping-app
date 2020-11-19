import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './styles'
import { auth ,signInWithGoogle } from '../../firebase/utils'
import { Link } from 'react-router-dom';

export default function SignIn() {
  const initialState = {
    email:"",
    password: ""
  }
  const [fields, setFields] = useState(initialState)

  const handleSubmit = async e => {
    e.preventDefault()
    const {email, password } = fields

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setFields(initialState)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFields(prevState =>{
      return {...prevState, [name]: value}
    })
  }

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            type="email"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={fields.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={fields.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Link to="/recovery" style={{ textDecoration: "none" }}>Forgot Password?</Link>
          <Typography align="center">OR</Typography>
          <Button
            onClick={signInWithGoogle}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            >
            Sign In With Google
          </Button>
        </form>
      </div>
    </Container>
  );
}