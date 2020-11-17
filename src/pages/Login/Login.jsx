import React from 'react';
import { Avatar, Button, CssBaseline, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './styles'
import { signInWithGoogle } from '../../firebase/utils'

export default function SignIn() {
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
        <Button
            onClick={signInWithGoogle}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In With Google
          </Button>
      </div>
    </Container>
  );
}