import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Hero from '../components/team/hero'
import Footer from '../components/team/footer'

class TeamPage extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <Hero />
        <Footer />
      </div>
    )
  }
}

export default TeamPage
