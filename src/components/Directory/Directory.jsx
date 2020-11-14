import { Button, Grid } from '@material-ui/core'
import React from 'react'
import ShopMen from '../../assets/shopMens.jpg'
import ShopWomen from '../../assets/shopWomens.jpg'
import { useStyles } from './styles'

function Directory() {
  const classes = useStyles()
  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={6} component="div">
        <img src={ShopWomen} alt="shopWomen"  width="100%" height="100%"/>
        <Button className={classes.button}>Shop Womens</Button>
      </Grid>
      <Grid item xs={6} component="div">
        <img src={ShopMen} alt="shopMen" width="100%" height="100%"/>
        <Button className={classes.button}>Shop Mens</Button>
      </Grid>
    </Grid>
  )
}

export default Directory
