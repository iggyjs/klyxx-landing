import React, { Component } from 'react';

// Styles
import './styles/AboutHero.scss';

class AboutHero extends Component {
    constructor (props) {
        super(props);

        this.state = {
            titleHeight: 400,
            showHeader: false,
            topBarWidth: 0
        };

        this.triggerTopBarAnimation = this.triggerTopBarAnimation.bind(this);
    }

    componentDidMount () {
        setTimeout(this.triggerTopBarAnimation, 300)
    }

    triggerTopBarAnimation () {
        this.setState({topBarWidth: 45})
    }


    render () {
        return (
            <div className="about-component">
                <div className="about-container">
                    <div style={{width: this.state.topBarWidth}} className="top-bar-header" />
                    <h2 className="about-header">What We Do</h2>
                    <h2 className="about-subheader">We help our clients grow traffic and make more money.</h2>
                </div>
            </div>
        )
    }
}

export default AboutHero;
