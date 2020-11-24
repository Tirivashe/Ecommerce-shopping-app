import React from 'react'
import { checkUserAdmin } from '../../firebase/utils'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function AdminToolbar() {
  const currentUser = useSelector(state => state.user)
  const isAdmin = checkUserAdmin(currentUser)

  if(!isAdmin){
    return null 
  } else{
    return (
      <div>
        <Link to="/admin">Go To Admin Page</Link>
      </div>
    )
  }
}
