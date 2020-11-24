import React from 'react'
import { AppBar, Toolbar, Grid, Typography, Button } from '@material-ui/core'
import { useStyles } from './styles' 
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils'

export default function Header({ currentUser }) {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography>Logo Goes Here</Typography>
          </Grid>

          { currentUser &&
            <Grid item>
              <Button onClick={()=> auth.signOut()}>Log Out</Button>
            </Grid>
          }

          { !currentUser && 
            <Grid item>
              <Link to="/registration" style={{ textDecoration: "none", marginRight: "20px" }}>
                <Button>Register</Button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button>Login</Button>
              </Link>
            </Grid>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
