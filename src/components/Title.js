import React, { Component } from 'react';

// Styles
import './styles/Title.scss';

class Title extends Component {
    constructor (props) {
        super(props);
        this.state = {
            topBarWidth: 0
        };

        this.triggerTopBarAnimation = this.triggerTopBarAnimation.bind(this);
    }

    componentDidMount () {
        setTimeout(this.triggerTopBarAnimation, 500)
    }

    triggerTopBarAnimation () {
        this.setState({topBarWidth: 45})
    }


    render () {
        return (
            <div className="title-component">
                <div className="title-container">
                    <div style={{width: this.state.topBarWidth}} className="top-bar-header" />
                    <h2 className="title-header">We help our clients grow traffic and make more money. Period.</h2>
                    <div className="title-button-wrap">
                        <a href="">
                            <button id={'growthReportButton'}>Free Growth Report</button>
                        </a>
                        <a href="">
                            <button id={'growMyBusinessButton'}>Grow my Business</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title;