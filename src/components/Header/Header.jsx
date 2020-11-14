import React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles' 

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
            <Typography>Links Go Here</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
