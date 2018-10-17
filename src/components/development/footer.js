import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles/footer.scss'

class DevelopmentFooter extends Component {
  render () {
    return (
      <div className="development-footer">
        <h3 className="footer-header">Drop us a line.</h3>
        <div className="footer-bar" />

        <p className="footer-description">
          We're based in Brooklyn, but work with companies from all over.
        </p>
        <Link to={'/'}>
          <button id={'developmentCtaButton'}>
            Say hello
          </button>
        </Link>
      </div>
    )
  }
}

export default DevelopmentFooter
