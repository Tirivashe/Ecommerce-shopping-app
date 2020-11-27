import React from 'react'
import { checkUserAdmin } from '../../firebase/utils'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'


export default function AdminToolbar() {
  const currentUser = useSelector(state => state.user)
  const isAdmin = checkUserAdmin(currentUser)
  const classes = useStyles()

  if(!isAdmin){
    return null 
  } else{
    return (
      <div className={classes.root}>
        <Link to="/admin" className={classes.link}>Go To Admin Page</Link>
      </div>
    )
  }
}
