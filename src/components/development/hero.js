import React, { Component } from 'react'

import './styles/hero.scss'

class DevelopmentHero extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="development-hero">
        <div className="hero-text">
          <h4 className="development-header">Our code doesn't just ship products.</h4>
          <p className="development-subheader">
            We help companies understand how software can optimize internal processes,
            eliminate inefficiencies and improve their bottom line.
          </p>
        </div>
      </div>
    )
  }
}

export default DevelopmentHero
