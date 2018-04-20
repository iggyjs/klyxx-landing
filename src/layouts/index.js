import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Styles
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
        title={'Klyxx Creative'}
        meta={[{ name: 'description', content: 'To be done' },{ name: 'keywords', content: 'to, do' }]}
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
