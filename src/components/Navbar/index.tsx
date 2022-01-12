import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { navBarData } from './data';
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './NavbarElements';

interface NavbarProps {
  toggle: () => void;
}

export function Navbar({ toggle }: NavbarProps) {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  function toggleHome() {
    scroll.scrollToTop();
  }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            ortolingualprieto
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navBarData.map((item) => {
              return (
                <NavItem key={item.id}>
                  <NavLink
                    to={item.id}
                    smooth={true}
                    duration={700}
                    spy={true}
                    offset={-80}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href='https://landing.mailerlite.com/webforms/landing/w1c1q1'
              target='_blank'
            >
              Suscríbete ahora
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
}
