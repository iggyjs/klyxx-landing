import React, { Component } from 'react';

// Styles
import './styles/Hero.scss';

class Hero extends Component {
    constructor (props) {
        super(props);

        this.state = {
          showHeader: false,
          topBarWidth: 0
        };

        this.triggerTopBarAnimation = this.triggerTopBarAnimation.bind(this)
    }

    componentDidMount () {
      setTimeout(this.triggerTopBarAnimation, 800)
    }

    triggerTopBarAnimation () {
      this.setState({topBarWidth: 45})
    }

    render () {
        return (
            <div className="hero-component-wrap">
                <div id={'heroComponent'} className="hero-component">
                    <div className="hero-container">
                        <div style={{width: this.state.topBarWidth}} className="top-bar-header" />

                        <h2 className="hero-header">We help our clients grow traffic and make more money. Period.</h2>
                        <div className="hero-button-wrap">
                            <a href="">
                                <a href="https://klyxx.typeform.com/to/u5VosU"><button id={'growthReportButton'}>Grow my Business</button></a>
                            </a>
                            <a href="">
                                <button style={{display: 'none'}} id={'growMyBusinessButton'}>Grow my Business</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Hero;
