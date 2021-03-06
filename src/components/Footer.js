import React, { Component } from 'react';

// Styles
import './styles/Footer.scss'


class Footer extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="footer-component">
                <div className="footer-container">
                    <h2 className="footer-header">Ready to get started?</h2>
                    <div className="footer-button-wrap">
                        <a href="">
                            <button style={{display: 'none'}} id={'growthReportButton'}>Free Growth Report</button>
                        </a>
                        <a href="">
                            <a href="https://klyxx.typeform.com/to/u5VosU"><button id={'growMyBusinessButton'}>Grow my Business</button></a>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;