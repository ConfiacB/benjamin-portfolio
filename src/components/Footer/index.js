import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  TopButton,
  ArrowUp
} from './FooterElements';

const Footer = ({ social }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const { linkedin, email } = social;

  return (
    <FooterContainer id='footer'>
      <FooterWrap>
        <SocialIcons>
          <SocialIconLink 
            href={linkedin}
            target="_blank" 
            aria-label="LinkedIn"
          ><FaLinkedin />
          </SocialIconLink>
          <SocialIconLink 
            href={`mailto:${email}`}
            aria-label="Email"
          ><MdMail />
          </SocialIconLink>
        </SocialIcons>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Benjamin Confiac's Portfollio © {new Date().getFullYear()}{" "}
              All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
        <TopButton onClick={toggleHome}>
          <ArrowUp />
        </TopButton>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
