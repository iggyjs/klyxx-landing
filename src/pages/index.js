import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Link from 'gatsby-link'
import mixpanel from 'mixpanel-browser'

// Components
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Subhero from '../components/Subhero';
import Footer from '../components/Footer'

mixpanel.init('f7725dfb70296f109b6f9c4b963c6acc');

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
        mixpanel.track('Page View')
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
