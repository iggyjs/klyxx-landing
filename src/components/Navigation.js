import React, { Component } from 'react'
import Link from 'gatsby-link'

// Styles
import './styles/Navigation.scss';

// Images
import logoSrc from '../assets/images/header/logo3.svg';
import mobileLogoSrc from '../assets/images/header/mobile_logo.png';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            mobileMenuHeight: 0
        };

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu () {
        let currentHeight = this.state.mobileMenuHeight;
        // 5 items
        // let newHeight = (currentHeight === 0) ? 232 : 0;
        // 2 items
        let newHeight = (currentHeight === 0) ? 115 : 0;
        this.setState({
            mobileMenuHeight: newHeight
        })
    }

    render () {
        return (
            <div className="header-component">
                <div className="klyxx-header-desktop">
                    <ul className="klyxx-header-ul">
                        <li className="klyxx-header-li-element">
                            <Link to={'/about/'} className="header-link">About Us</Link>
                        </li>

                        <li className="klyxx-header-li-element">
                            <div className="logo-desktop-wrap">
                                <Link to={'/'}>
                                    <img id="headerLogo" src={logoSrc} alt=""/>
                                </Link>
                            </div>
                        </li>

                        <li style={{marginLeft: -30}} className="klyxx-header-li-element">
                            <Link className="header-link" to={'/team'}>Our Team</Link>
                        </li>
                    </ul>
                </div>

                <div className="klyxx-header-mobile">
                    <Link to={'/'}>
                        <img className="mobile-logo" src={mobileLogoSrc} alt=""/>
                    </Link>

                    <div onClick={this.toggleMobileMenu} className="toggle-menu">
                        <div className="burger-bar" />
                        <div className="burger-bar" />
                        <div className="burger-bar" />
                    </div>

                    <ul style={{height: this.state.mobileMenuHeight}} className="mobile-nav-ul">
                        <li className="mobile-nav-li">
                            <Link to={'/about/'}>About Us</Link>
                        </li>
                        <li className="mobile-nav-li">
                            <Link to={'/team'}>Our Team</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Header
