import React, { Component } from 'react';

// Styles
import './styles/SubTitle.scss'

// Images
import stepsSrc from '../assets/images/subtitle/steps.png'

class SubTitle extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="subtitle-component">
                <h2 className="subtitle-header">How do we do it?</h2>

                <div className="steps-wrapper">
                    <img className="steps-image" src={stepsSrc} alt=""/>
                </div>

                <div className="prop-points">
                    <div className="row">
                         <div className="prop-div">
                            &nbsp;
                        </div>
                        <div className="prop-div">
                            <div className="prop-text-wrap">
                                <div className="prop-header-wrap">
                                    <div className="prop-bar" />
                                    <h3 className="prop-text">
                                        growth & revenue
                                    </h3>
                                </div>

                                <h2 className="tagline">You’ll actually grow where it matters.</h2>
                                <p className="description">We grow your business, so you can focus on running it. That means we cut through the
                                    noise of vanity metrics and find the few channels that actually lead to revenue and growth.
                                </p>

                                <a href=""><button className="prop-button">See our Blog</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="prop-div">
                            <div className="prop-text-wrap">
                                <div className="prop-header-wrap">
                                    <div className="prop-bar" />
                                    <h3 className="prop-text">full team
                                    </h3>
                                </div>

                                <h2 className="tagline">You’ll work with a full growth team.</h2>
                                <p className="description">
                                    With a team of designers, developers, videographers and growth hackers, we focus on
                                    having all the resources to test out the marketing channels that make sense for your
                                    business and then figure out how to crack them.
                                </p>

                                <a href=""><button className="prop-button">See our Team</button></a>
                            </div>
                        </div>

                        <div className="prop-div">
                            &nbsp;
                        </div>
                    </div>

                    <div className="row">
                         <div className="prop-div">
                            &nbsp;
                        </div>
                        <div className="prop-div">
                            <div className="prop-text-wrap">
                                <div className="prop-header-wrap">
                                    <div className="prop-bar" />
                                    <h3 className="prop-text">
                                        clear solutions
                                    </h3>
                                </div>

                                <h2 className="tagline">Why should you work with us?</h2>
                                <p className="description">Marketing the right way is a behemoth task for any company.
                                    Our job isn’t to add to that load but cut the noise instead. We focus on what matters
                                    and make sure that we make the ROI clear from day one.
                                </p>

                                <a href=""><button className="prop-button">Free Growth Report</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubTitle;