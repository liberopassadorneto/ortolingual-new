import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterLink,
  FooterLinkHeading,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights,
} from './FooterElements';

export function Footer() {
  function toggleHome() {
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkHeading>About us</FooterLinkHeading>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>Terms os Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkHeading>About us</FooterLinkHeading>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>Terms os Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkHeading>Something else1</FooterLinkHeading>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>Terms os Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkHeading>Something else2</FooterLinkHeading>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>Terms os Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}
