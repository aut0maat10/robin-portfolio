import React from 'react'
import Link from 'gatsby-link'
import './header.css';
// import background from '../Assets/background.jpg';

// const backgroundImg = <img src={background} />

const Header = ({ siteTitle }) => (
  <div className="hero">
    {/* <div className="backgroundImg">
      {backgroundImg}
    </div>  */}
      <div className="headline">
        <h1>{siteTitle}</h1>
      </div>
    
  </div>
)

export default Header
