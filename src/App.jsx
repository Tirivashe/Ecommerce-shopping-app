import React from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import Registration from './pages/Registration/Registration'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registration" component={Registration}/>
      </Switch>
      <CssBaseline />
    </>
  );
}

export default App;
