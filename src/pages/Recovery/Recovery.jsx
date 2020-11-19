import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './styles'
import { auth} from '../../firebase/utils'
import { useHistory } from 'react-router-dom'

export default function Recovery() {
  const [email, setEmail] = useState('')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const config = {
        url: 'http://localhost:3000/login'
      }
      await auth.sendPasswordResetEmail(email, config)
      history.push('/login')
    } catch (error) {
      alert("Email not found or invalid")
    }
  }

  const handleChange = e => {
    setEmail(e.target.value)
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
          Recover Password
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
            value={email}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}