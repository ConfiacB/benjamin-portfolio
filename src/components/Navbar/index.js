import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SocialButton,
  SocialWrapper
} from './NavbarElements';

const Navbar = ({ toggle, social }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [over, setOver] = useState(false);
  const [overMail, setOverMail] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const { linkedin, email } = social;

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Portfolio</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              ><b>About</b></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              ><b>Skills</b></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              ><b>Projects</b></NavLinks>
            </NavItem>
          </NavMenu>
          <SocialWrapper>
            <SocialButton
              href={linkedin}
              target="_blank" 
              aria-label="LinkedIn"
              onMouseOver={() => setOver(true)}
              onMouseLeave={() => setOver(false)}
            ><FaLinkedin 
                style={over ? { color: "#33BBBF", transition: "0.3s ease-out" } : {}}
              />
            </SocialButton>
            <SocialButton
              href={`mailto:${email}`}
              aria-label="Email"
              onMouseOver={() => setOverMail(true)}
              onMouseLeave={() => setOverMail(false)}
            ><MdMail
              style={overMail ? { color: "#33BBBF", transition: "0.3s ease-out" } : {}} 
            />
            </SocialButton>
          </SocialWrapper>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
