import React from 'react'
import Link from 'gatsby-link'
import './header.css';
import TypedStrings from './typed';
import CallToAction from './callToAction'; 
import { SocialIcon } from 'react-social-icons'

const Header = ({ siteTitle, subHeader }) => (
  <div className="hero">
    <div className="headline">
      <h1 className="title-main">{siteTitle}</h1>
      {/* <p>{subHeader}</p> */}
      <TypedStrings
        strings={[
          "I'm a full stack developer and musician.",
          'I build websites and play guitar.',
          "Get in touch, let's create something together!",
        ]}
      />
      <CallToAction />
    </div>
    <div className="socialIcons">
      <SocialIcon url="http://github.com/aut0maat10" color="#2f4f4f" />
      <SocialIcon
        url="https://open.spotify.com/album/2MKIXpywwNN9l45tgwzRMK"
        color="#2f4f4f"
      />
      <SocialIcon url="http://instagram.com/rpahlman" color="#2f4f4f" />
      <SocialIcon url="http://twitter.com/robinpahlman" color="#2f4f4f" />
    </div>
  </div>
)

export default Header
