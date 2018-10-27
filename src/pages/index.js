import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Link from 'gatsby-link'

// Components
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Subhero from '../components/Subhero';
import Footer from '../components/Footer'

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        // Let's not show them what the site looks like pre-animation
        try {
            window.onbeforeunload = function(){ window.scrollTo(0,0); }
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        return (
            <div>
              <ReactCSSTransitionGroup
                transitionName="fade-in-content" transitionAppear={true}
                transitionAppearTimeout={700}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={700}
              >
                <Navigation />
                <Hero />
                <Subhero />
                <Footer />
              </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Index
