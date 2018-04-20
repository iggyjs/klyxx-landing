import React, { Component } from 'react'
import Link from 'gatsby-link'

// Components
import Header from '../components/Header';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Footer from '../components/Footer'

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Header />
                <Title />
                <SubTitle />
                <Footer />
            </div>
        )
    }
}

export default Index
