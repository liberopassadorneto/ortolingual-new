import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { navBarDataEsp, navBarDataPtBr } from './data';
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
  const [locale, setLocale] = useState<string>('esp');

  const { pathname } = useLocation();

  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    const cwbPathname = pathname.includes('cwb');
    if (cwbPathname) {
      setLocale('ptbr');
    } else {
      setLocale('esp');
    }
  }, []);

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
          <NavLogo to="/" onClick={toggleHome}>
            ortolingualprieto
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          {locale === 'esp' ? (
            <NavMenu>
              {navBarDataEsp.map((item) => {
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
          ) : (
            <NavMenu>
              {navBarDataPtBr.map((item) => {
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
          )}

          <NavBtn>
            <NavBtnLink
              href={
                locale === 'esp'
                  ? 'https://landing.mailerlite.com/webforms/landing/w1c1q1'
                  : 'https://landing.mailerlite.com/webforms/landing/f1v4m7'
              }
              target="_blank"
            >
              {locale === 'esp' ? 'Suscríbete ahora' : 'Inscreva-se agora'}
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
}
