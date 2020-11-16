import React from 'react'
import { AppBar, Toolbar, Grid, Typography, Button } from '@material-ui/core'
import { useStyles } from './styles' 
import { Link } from 'react-router-dom'

function Header() {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography>Logo Goes Here</Typography>
          </Grid>
          <Grid item>
            <Link to="/registration" style={{ textDecoration: "none" }}>
              <Button>Register</Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
