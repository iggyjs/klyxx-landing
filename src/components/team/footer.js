import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles/footer.scss'

class TeamFooter extends Component {
  render () {
    return (
      <div className="team-footer">
        <h3 className="footer-header">We want to help.</h3>
        <div className="footer-bar" />

        <p className="footer-description">
          We're based in Brooklyn, but work with companies from all over.
        </p>

        <a id={'teamCtaButton'} href="https://klyxx.typeform.com/to/u5VosU">Let's talk</a>

      </div>
    )
  }
}

export default TeamFooter
