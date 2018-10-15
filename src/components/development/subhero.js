import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles/subhero.scss'

class DevelopmentSubhero extends Component {
  render () {
    return (
      <div className="development-subhero">
        <div className="header-text-wrap">
          <div className="development-subhero-bar" />
          <h4 className="subhero-header">Klyxx services.</h4>
        </div>

        <div className="services-section">

          <div className="service-text-group">
            <h4 className="service-header">Static Site Development</h4>
            <p className="service-paragraph">
              We use modern technologies like GatsbyJS, Netlify and Contentful to build sites that
              are fast, responsive modular.
            </p>

            <Link to={'/contact?static=1'} className="learn-more-development-button">
              Learn more
            </Link>
          </div>

          <div className="service-text-group">
            <h4 className="service-header">Cloud Infrastructure</h4>
            <p className="service-paragraph">We use Amazon Web Services and Google Cloud to perform tasks as simple
              as proxying information between data layers or as involved as setting up your applications
              entire backend.
            </p>
          </div>

          <div className="service-text-group">
            <h4 className="service-header">Prototyping</h4>
            <p className="service-paragraph">
              We build pitch-ready MVPs and proof-of-concept applications. We feel comfortable with popular front and back end frameworks.
            </p>
          </div>

          <div className="service-text-group">
            <h4 className="service-header">Technical Audits</h4>
            <p className="service-paragraph">
              Sometimes, it's hard to know how to move forward. We provide audits for your existing tech stack
              and processes.
            </p>
          </div>

          <div className="service-text-group">
            <h4 className="service-header">Internal Tools</h4>
            <p className="service-paragraph">
              Together with our lead growth hackers, we build tools to automate rote and redundant tasks for your internal operations.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default DevelopmentSubhero
