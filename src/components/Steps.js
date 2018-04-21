import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

// Styles
import './styles/Steps.scss';

class Steps extends Component {
    constructor (props) {
        super(props);

        this.state = {
            outerCircleAnimationClass: '',
            stepAnimationClass: ''
        }

        this.addAnimationClass = this.addAnimationClass.bind(this);
    }

    addAnimationClass () {
        this.setState({
            outerCircleAnimationClass: 'outer-circle-animation',
            stepAnimationClass: 'step-circle-animation'
        })
    }

    //TODO: Make this shit responsive

    render () {
        return (
            <div className="steps-component">
                <Waypoint onEnter={this.addAnimationClass}>
                    <div className={'outer-circle ' + this.state.outerCircleAnimationClass}>
                        <div className={'step-circle step-one ' + this.state.stepAnimationClass}>
                            <p className="step-number">1</p>
                        </div>

                        <div className={'step-circle step-two ' + this.state.stepAnimationClass}>
                            <p className="step-number">2</p>
                        </div>

                        <div className={'step-circle step-three ' + this.state.stepAnimationClass}>
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