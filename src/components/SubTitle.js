import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

// Components
import StepsComponent from '../components/Steps'

// Images
import growthRevIcon from '../assets/images/subtitle/growth_and_rev_icon.svg';
import fullTeamIcon from '../assets/images/subtitle/full_team_icon.svg';
import clearSolutionsIcon from '../assets/images/subtitle/clear_solutions_icon.svg';

// Styles
import './styles/SubTitle.scss'

class SubTitle extends Component {
    constructor (props) {
        super(props);
        this.state = {
            propBar1Width: 2,
            propBar2Width: 2,
            propBar3Width: 2,
        };

        this.triggerStepsAnimation = this.triggerStepsAnimation.bind(this);
        this.handlePropDivEnter = this.handlePropDivEnter.bind(this);
    }

    handlePropDivEnter (propBarWidth) {
        let newState = {};
        newState[propBarWidth] = 89;
        this.setState(newState);
    }

    triggerStepsAnimation() {
        this.refs.stepComponent.addAnimationClass()
    }

    render () {
        return (
            <div className="subtitle-component">
                <Waypoint onEnter={this.triggerStepsAnimation}>
                    <h2 className="subtitle-header">How do we do it?</h2>
                </Waypoint>

                <div className="steps-wrapper">
                    <StepsComponent ref={'stepComponent'}/>
                </div>

                <div className="prop-points">
                    <div className="row">

                        <div className="prop-div">
                            <img className="prop-image" src={growthRevIcon} alt=""/>
                        </div>

                        <div className="prop-div">
                            <div className="prop-text-wrap">
                                <div className="prop-header-wrap">
                                    <Waypoint onEnter={() => this.handlePropDivEnter('propBar1Width')}>
                                        <div style={{width: this.state.propBar1Width}} className="prop-bar" />
                                    </Waypoint>

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
                        <div className="prop-div hidden-desktop">
                            <img className="prop-image" src={fullTeamIcon} alt=""/>
                        </div>
                        
                        <div className="prop-div">
                            <div className="prop-text-wrap">
                                <div className="prop-header-wrap">
                                    <div style={{width: this.state.propBar2Width}} className="prop-bar" />
                                    <h3 className="prop-text">full team
                                    </h3>
                                </div>

                                <h2 className="tagline">You’ll work with a full growth team.</h2>
                                <p className="description">
                                    With a team of designers, developers, videographers and growth hackers, we focus on
                                    having all the resources to test out the marketing channels that make sense for your
                                    business and then figure out how to crack them.
                                </p>
                                <Waypoint onEnter={() => this.handlePropDivEnter('propBar2Width')}>
                                    <a href=""><button className="prop-button">See our Team</button></a>
                                </Waypoint>
                            </div>
                        </div>

                        <div className="prop-div hidden-mobile">
                            <img className="prop-image" src={fullTeamIcon} alt=""/>
                        </div>
                    </div>

                    <div className="row">
                         <div className="prop-div">
                            <img className="prop-image" src={clearSolutionsIcon} alt=""/>
                        </div>

                        <div className="prop-div">
                            <div className="prop-text-wrap">
                                <div className="prop-header-wrap">
                                    <div style={{width: this.state.propBar3Width}} className="prop-bar" />

                                    <h3 className="prop-text">
                                        clear solutions
                                    </h3>
                                </div>

                                <h2 className="tagline">Why should you work with us?</h2>
                                <p className="description">Marketing the right way is a behemoth task for any company.
                                    Our job isn’t to add to that load but cut the noise instead. We focus on what matters
                                    and make sure that we make the ROI clear from day one.
                                </p>
                                <Waypoint onEnter={() => this.handlePropDivEnter('propBar3Width')}>
                                    <a href=""><button className="prop-button">Free Growth Report</button></a>
                                </Waypoint>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubTitle;