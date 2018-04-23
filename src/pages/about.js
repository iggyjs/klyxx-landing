import React, { Component } from 'react';

// Components
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';

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
            </div>
        )
    }
}

export default About;