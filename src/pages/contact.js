import React, { Component } from 'react'

class ContactPage extends Component {
  constructor (props) {
    super(props)

    try {
      const search = props.location.search
      const params = new URLSearchParams(search)
      if (params.get('static')) {
        this.state = { static: true }
        console.log('eh');
      } else {
        this.state = {}
      }
    } catch (e) {
      console.log(e);
      this.state = {}
    }
  }

  render () {
    // TODO: Set up auto-filled form depending on what was clicked
    console.log(this.state);
    return (
      <div className="contact-component">
        This is it!
      </div>
    )
  }
}

export default ContactPage
