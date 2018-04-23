import React, { Component } from 'react';

// Components
import Header from '../components/Header';
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
                <Header />
                <AboutHero />
                <AboutSubhero />
                <Footer />
            </div>
        )
    }
}

export default About;