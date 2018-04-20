import React, { Component } from 'react'
import Link from 'gatsby-link'

// Styles
import './styles/Header.scss';

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
        let newHeight = (currentHeight === 0) ? 241 : 0;
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
                            <Link className="header-link">Team</Link>
                        </li>

                        <li className="klyxx-header-li-element">
                            <Link className="header-link">Portfolio</Link>
                        </li>

                        <li className="klyxx-header-li-element">
                            <img id="headerLogo" src={logoSrc} alt=""/>
                        </li>

                        <li className="klyxx-header-li-element">
                            <Link className="header-link">Blog</Link>
                        </li>

                        <li className="klyxx-header-li-element">
                            <Link className="header-link">Growth Report</Link>
                        </li>
                    </ul>
                </div>

                <div className="klyxx-header-mobile">
                    <img className="mobile-logo" src={mobileLogoSrc} alt=""/>

                    <div onClick={this.toggleMobileMenu} className="toggle-menu">
                        <div className="burger-bar" />
                        <div className="burger-bar" />
                        <div className="burger-bar" />
                    </div>

                    <ul style={{height: this.state.mobileMenuHeight}} className="mobile-nav-ul">
                        <li className="mobile-nav-li">
                            <Link>Team</Link>
                        </li>
                        <li className="mobile-nav-li">
                            <Link>Portfolio</Link>
                        </li>
                        <li className="mobile-nav-li">
                            <Link>Blog</Link>
                        </li>
                        <li className="mobile-nav-li">
                            <Link>Growth Report</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Header
