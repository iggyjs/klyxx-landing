import React, { Component } from 'react'

import zainHeadshot from '../../assets/images/team/zain.jpeg'
import mattHeadshot from '../../assets/images/team/matt.jpeg'
import iggyHeadshot from '../../assets/images/team/iggy.png'
import victoriaHeadshot from '../../assets/images/team/victoria.jpeg'
import hawkHeadshot from '../../assets/images/team/hawk.jpeg'

import './styles/hero.scss'

class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teamMembers: [
        {
          name: 'Zain Khan',
          title: 'CEO',
          image: zainHeadshot,
          companies: [
            (<a className="team-bio-company-link" href="https://storyhunter.com/" target="_blank">Storyhunter</a>),
            (<a className="team-bio-company-link" href="http://www.getnoble.co/" target="_blank">Noble</a>),
          ],
          school: 'History @NYU'
        },
        {
          name: 'Matt Swulinski',
          title: 'Lead Growth Hacker',
          image: mattHeadshot,
          companies: [
            (<a className="team-bio-company-link" href="https://www.accenture.com/" target="_blank">Accenture</a>),
            (<a className="team-bio-company-link" href="https://www.probax.io/" target="_blank">Probax</a>),
          ],
          school: 'Stern @NYU'
        },
        {
          name: 'Victoria Gunell',
          title: 'Head of Design',
          image: victoriaHeadshot,
          companies: [
            (<a className="team-bio-company-link" href="http://www.up2code-nyc.com/" target="_blank">Up2Code</a>),
          ],
          school: 'Psych @ NYU'
        },
        {
          name: 'Ignacio Streuly',
          title: 'Lead Engineer',
          image: iggyHeadshot,
          companies: [
            (<a className="team-bio-company-link" href="https://www.ycharts.com/" target="_blank">YCharts</a>),
            (<a className="team-bio-company-link" href="https://getkard.com/" target="_blank">Kard Financial</a>),
          ],
          school: 'CS @ NYU'
        },
        {
          name: 'Natalina Schappach',
          title: 'Growth Hacker',
          image: null,
          companies: [
            (<a className="team-bio-company-link" href="https://www.ycharts.com/" target="_blank">BRAVE South Africa</a>),
            (<a className="team-bio-company-link" href="http://www.unwomen.org/en" target="_blank">UN Women</a>),
          ],
          school: 'Interational Relations @ NYU'
        },
        {
          name: 'Hawk Latham',
          title: 'Growth Hacker',
          image: hawkHeadshot,
          companies: [
            (<a className="team-bio-company-link" href="https://www.njcu.edu/" target="_blank">Business & Marketing @ NJCU</a>),
          ],
          school: 'Business & Marketing @ NJCU'
        },
      ]
    }
  }

  renderTeamPanels () {
    return this.state.teamMembers.map((member) => (
      <div className="team-member-panel">
        <div className="bio-image-wrap">
          <img className="bio-image" src={member.image}/>
        </div>
        <div className="member-text-content">
          <h4 className="member-name">{member.name}</h4>
          <h3 className="member-company-title">{member.title}</h3>

        <span className="member-company-label">Previous expierence</span>
        {member.companies.map((link) => (link))}
        </div>
      </div>
    ));
  }

  render () {
    return (
      <div className="team-hero">
        <div className="hero-text">
          <h3 className="team-header">We're people who like to see results.</h3>
          <p className="team-subheader">We're engineers, growth nerds, startup savants and designers.</p>
        </div>

        <div className="team-panels-wrap">
          {this.renderTeamPanels()}
        </div>
      </div>
    )
  }
}

export default Hero
