import { navBarData } from '../Navbar/data';
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
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navBarData.map((item) => {
            return (
              <SidebarLink key={item.id} to={item.id} onClick={toggle}>
                {item.title}
              </SidebarLink>
            );
          })}
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarBtn
            href='https://landing.mailerlite.com/webforms/landing/c1s7x7'
            target='_blank'
          >
            Suscríbete ahora
          </SidebarBtn>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
