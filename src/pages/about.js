import React, { Component } from 'react';

// Components
import Navigation from '../components/Navigation';
import AboutHero from '../components/AboutHero';
import AboutSubhero from '../components/AboutSubhero';
import Footer from '../components/Footer';

class About extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Navigation />
                <AboutHero />
                <AboutSubhero />
                <Footer />
            </div>
        )
    }
}

export default About;
