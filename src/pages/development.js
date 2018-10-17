import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Hero from '../components/development/hero'
import Subhero from '../components/development/subhero'
import Footer from '../components/development/footer'

class DevelopmentPage extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <Hero />
        <Subhero />
        <Footer />
      </div>
    )
  }
}

export default DevelopmentPage
