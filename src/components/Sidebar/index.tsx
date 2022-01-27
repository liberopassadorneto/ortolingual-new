import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navBarDataEsp, navBarDataPtBr } from '../Navbar/data';
import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarBtnWrapper,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElements';

interface SidebarProps {
  toggle: () => void;
  isOpen: boolean;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {
  const [locale, setLocale] = useState<string>('esp');

  const { pathname } = useLocation();

  useEffect(() => {
    const cwbPathname = pathname.includes('cwb');
    if (cwbPathname) {
      setLocale('ptbr');
    } else {
      setLocale('esp');
    }
  }, []);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {locale === 'esp' ? (
          <SidebarMenu>
            {navBarDataEsp.map((item) => {
              return (
                <SidebarLink key={item.id} to={item.id} onClick={toggle}>
                  {item.title}
                </SidebarLink>
              );
            })}
          </SidebarMenu>
        ) : (
          <SidebarMenu>
            {navBarDataPtBr.map((item) => {
              return (
                <SidebarLink key={item.id} to={item.id} onClick={toggle}>
                  {item.title}
                </SidebarLink>
              );
            })}
          </SidebarMenu>
        )}
        <SidebarBtnWrapper>
          <SidebarBtn
            href={
              locale === 'esp'
                ? 'https://landing.mailerlite.com/webforms/landing/w1c1q1'
                : 'https://landing.mailerlite.com/webforms/landing/f1v4m7'
            }
            target="_blank"
          >
            {locale === 'esp' ? 'Suscríbete ahora' : 'Inscreva-se agora'}
          </SidebarBtn>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
