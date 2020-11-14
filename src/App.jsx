import React from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage />
      <CssBaseline />
    </div>
  );
}

export default App;
