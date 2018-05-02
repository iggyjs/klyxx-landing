import React, { Component } from 'react';

// Styles
import './styles/Title.scss';

class Title extends Component {
    constructor (props) {
        super(props);

        this.state = {
            titleHeight: 400,
            showHeader: false,
            topBarWidth: 0
        };

        this.triggerBackgroundAnimation = this.triggerBackgroundAnimation.bind(this);
        this.triggerTopBarAnimation = this.triggerTopBarAnimation.bind(this);
    }

    componentDidMount () {
        setTimeout(this.triggerTopBarAnimation, 300)
        setTimeout(this.triggerBackgroundAnimation, 175)
    }

    triggerTopBarAnimation () {
        this.setState({topBarWidth: 45})
    }

    triggerBackgroundAnimation () {
        this.setState({titleHeight: 617})
    }

    render () {
        return (
            <div id={'titleComponent'} style={{height: this.state.titleHeight}} className="title-component">
                <div className="title-container">
                    <div style={{width: this.state.topBarWidth}} className="top-bar-header" />
                    <h2 className="title-header">We help our clients grow traffic and make more money. Period.</h2>
                    <div className="title-button-wrap">
                        <a href="">
                            <a href="https://klyxx.typeform.com/to/u5VosU"><button id={'growthReportButton'}>Grow my Business</button></a>
                        </a>
                        <a href="">
                            <button style={{display: 'none'}} id={'growMyBusinessButton'}>Grow my Business</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title;