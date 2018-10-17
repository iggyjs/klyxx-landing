import React, { Component } from 'react'
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
                <Navigation />
                <Hero />
                <Subhero />
                <Footer />
            </div>
        )
    }
}

export default Index
