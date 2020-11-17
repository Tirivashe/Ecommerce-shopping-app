import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import { auth, handleUserProfile } from './firebase/utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async user => {
      if(user){
      const userRef = await handleUserProfile(user)
      setCurrentUser(userRef)
      }else{
        setCurrentUser(null)
      }
    })
    return () => unsubscribe()

  },[])

  return (
    <>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" render={()=> <HomePage currentUser={currentUser}/>} />
        <Route path="/registration" component={Registration}/>
        <Route path="/login" render={()=> currentUser ? <Redirect to="/"/> : <Login /> }/>
      </Switch>
      <CssBaseline />
    </>
  );
}

export default App;
