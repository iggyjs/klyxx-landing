import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Styles
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
        title={'Klyxx Creative'}
        meta={[{ name: 'description', content: 'A Growth and Development Agency' },{ name: 'keywords', content: 'Klyxx, klyxx, consulting, agency' }]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
