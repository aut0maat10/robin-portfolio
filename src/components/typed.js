import React from 'react';
import Typed from 'typed.js';

export default class TypedStrings extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      cursorChar: '&#10074;',
      startDelay: 1500,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1900,
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ 
              whiteSpace: 'pre', 
              fontFamily: 'Roboto Mono',
              fontSize: '1.3em',
              color: 'darkslategray',  }}
            ref={el => {
              this.el = el
            }}
          />
        </div>
      </div>
    )
  }
}
