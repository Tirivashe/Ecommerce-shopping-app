import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import AdminToolbar from './components/AdminToolbar/AdminToolbar'
import HomePage from './pages/HomePage/HomePage'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import Recovery from './pages/Recovery/Recovery'
import Admin from "./pages/Admin/Admin"
import './App.css'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, handleUserProfile, checkUserAdmin} from './firebase/utils'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/slices/user'

function App() {
  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const isAdmin = checkUserAdmin(currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async user => {
      if(user){
        const userRef = await handleUserProfile(user)
        userRef.onSnapshot(snapshot => {
          const userInfo = {
            id: snapshot.id,
            ...snapshot.data()
          }
          dispatch(setCurrentUser(userInfo))
        })
      }else{
        dispatch(setCurrentUser(user))
      }
    })
    return () => unsubscribe()
  },[dispatch])

  return (
    <>
      <AdminToolbar />
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" render={()=> currentUser ? <HomePage currentUser={currentUser}/> : <Redirect to="/login" /> }/>
        <Route path="/registration" render={()=> currentUser ? <Redirect to="/"/> : <Registration currentUser={currentUser} /> }/>
        <Route path="/login" render={()=> currentUser ? <Redirect to="/"/> : <Login /> }/>
        <Route path="/recovery" render={()=> <Recovery />}/>
        <Route exact path="/admin" render={()=> isAdmin ? <Admin /> : <Redirect to="/" />} />

      </Switch>
      <CssBaseline />
    </>
  );
}

export default App;
