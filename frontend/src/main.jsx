import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './navigation/Router'
import Header from './components/header/Header' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Router/>
  </React.StrictMode>,
)
