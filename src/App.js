import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './app.css'
//

export default () => (
  <Router>
    <div >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
