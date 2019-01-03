import React, { Component } from 'react'

import './hero.scss'

class Herro extends Component {
  state = {}
  render() {
    return (
      <div className="Hero">
        <div className="hero__overlay" />
        <div className="hero__content">hi</div>
      </div>
    )
  }
}

export default Herro
