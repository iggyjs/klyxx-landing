import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

// Styles
import './styles/Steps.scss';

class Steps extends Component {
    constructor (props) {
        super(props);

        this.state = {
            outerCircleAnimationClass: '',
            stepAnimationClass: '',
            stepTextHeaderOpacity: '',
            stepTextSubHeaderOpacity1: '',
            stepTextSubHeaderOpacity2: '',
            stepTextSubHeaderOpacity3: ''
        }

        this.addAnimationClass = this.addAnimationClass.bind(this);
        this.triggerOrbitAnimation = this.triggerOrbitAnimation.bind(this);
        this.triggerTextAnimation = this.triggerTextAnimation.bind(this);
        this.showStepSubText = this.showStepSubText.bind(this);
    }

    showStepSubText (stepNumber) {
        let key = 'stepTextSubHeaderOpacity' + stepNumber;
        let newState = {};
        newState[key] = 'show-step-subtext';
        this.setState(newState);
    }

    addAnimationClass () {
        setTimeout(this.triggerOrbitAnimation, 0);
        // Orbit animation has a duration of 3000
        setTimeout(this.triggerTextAnimation, 2500);
    }

    triggerOrbitAnimation () {
        this.setState({
            outerCircleAnimationClass: 'outer-circle-animation',
            stepAnimationClass: 'step-circle-animation'
        })
    }

    triggerTextAnimation () {
        // We stop requiring onClick to show the text at this window width
        if (window.innerWidth < 761) {
            this.setState({
                stepTextHeaderOpacity: 'show-step-header',
                stepTextSubHeaderOpacity1: 'show-step-subtext',
                stepTextSubHeaderOpacity2: 'show-step-subtext',
                stepTextSubHeaderOpacity3: 'show-step-subtext'
            })
        } else {
            this.setState({
                stepTextHeaderOpacity: 'show-step-header'
            })
        }
    }

    render () {
        return (
            <div className="steps-component">

                {/* Hide on mobile */}
                <div className="step-text-wrapper step-one-wrapper">
                    <span className={'step-header ' + this.state.stepTextHeaderOpacity}>No-Risk Growth Workshop</span>
                    <p className={'step-text ' + this.state.stepTextSubHeaderOpacity1}>
                        We'll start out with a call to get a feel for your current business goals, marketing stack, and analytics setup.
                    </p>
                </div>
                <div className="step-text-wrapper step-two-wrapper">
                    <span className={'step-header ' + this.state.stepTextHeaderOpacity}>The Growth Report</span>
                    <p className={'step-text step-text-two ' + this.state.stepTextSubHeaderOpacity2}>
                        We'll take all of the learnings from our growth workshop and send you an actionable growth report.
                    </p>
                </div>

                <div className="step-text-wrapper step-three-wrapper">
                    <span className={'step-header ' + this.state.stepTextHeaderOpacity}>Executing on Growth</span>
                    <p className={'step-text ' + this.state.stepTextSubHeaderOpacity3}>
                        You can either attempt to implement the Growth Report internally or we, then, discuss how we can
                        help execute the most pressing opportunities in an exploratory kickoff call.
                    </p>
                </div>

                <Waypoint onEnter={this.addAnimationClass}>
                    <div className={'outer-circle ' + this.state.outerCircleAnimationClass}>
                        <div onClick={() => this.showStepSubText(1)} id={'stepOneCircle'} className={'step-circle step-one ' + this.state.stepAnimationClass}>
                            <p className="step-number">1</p>
                        </div>

                        <div onClick={() => this.showStepSubText(2)} id={'stepTwoCircle'} className={'step-circle step-two ' + this.state.stepAnimationClass}>
                            <p className="step-number">2</p>
                        </div>

                        <div onClick={() => this.showStepSubText(3)} id={'stepThreeCircle'} className={'step-circle step-three ' + this.state.stepAnimationClass}>
                            <p className="step-number">3</p>
                        </div>
                    </div>
                </Waypoint>

                <div className="middle-circle">
                    <div className="center-circle ">
                        <div className="center-header-wrap">
                            <h2 className="center-circle-header">Less Hassle.</h2>
                            <h2 className="center-circle-header">Less BS.</h2>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Steps;