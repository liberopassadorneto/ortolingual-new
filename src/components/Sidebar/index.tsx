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
          <SidebarBtn to='/signin'> Sign In</SidebarBtn>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
