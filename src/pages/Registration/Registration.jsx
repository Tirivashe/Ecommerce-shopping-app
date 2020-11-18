import React, {useState} from 'react';
import { useStyles } from './styles'
import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { auth, handleUserProfile } from '../../firebase/utils'

export default function Registration({ currentUser }) {
  const initialState = {
    fullName: "",
    email:"",
    password: "",
    confirmPassword: ""
  }
  const [fields, setFields] = useState(initialState)
  const [error, setError] = useState(false)
  const classes = useStyles();


  const handleSubmit = async e => {
    e.preventDefault()
    const {fullName, email, password, confirmPassword } = fields
    if(password !== confirmPassword){
      setError(true)
      return;
    }

    try {
     const { user } = await auth.createUserWithEmailAndPassword(email, password)
     const displayName = fullName
     await handleUserProfile( user, { displayName })
     setFields(initialState)
     setError(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFields(prevState => {
      return {...prevState, [name]: value}
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
                value={fields.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={fields.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="password"
                error={error}
                helperText={error && "Passwords Do Not Match"}
                value={fields.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}