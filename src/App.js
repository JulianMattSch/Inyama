import React from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import StockTable from './components/StockTable'
import Header from './layout/Header'
import Sidebar from './layout/SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main-content'>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
