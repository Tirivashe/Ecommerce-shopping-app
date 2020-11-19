import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import { auth, handleUserProfile } from './firebase/utils'
import Recovery from './pages/Recovery/Recovery'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async user => {
      if(user){
      await handleUserProfile(user)
      setCurrentUser(user)
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
        <Route path="/registration" render={()=> currentUser ? <Redirect to="/"/> : <Registration currentUser={currentUser} /> }/>
        <Route path="/login" render={()=> currentUser ? <Redirect to="/"/> : <Login /> }/>
        <Route path="/recovery" render={()=> <Recovery />}/>
      </Switch>
      <CssBaseline />
    </>
  );
}

export default App;
