import React from 'react'
//

import { Router, Link } from 'react-static'

export default () => (
  <div>
    <h2 class="name">Thomas Nguyen</h2>
    <div class="title">ENGINEER.</div>
    <div class="container">
      <Link to="/contact">
        <div class="box home-btn">
        CONTACT
        </div>
      </Link>
      <Link to="/resume">
      <div class="box home-btn">
      RESUME
      </div>
      </Link>
    </div>
  </div>
)
