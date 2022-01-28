import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '../Signin/SigninElements';
import {
  CardBtn,
  CardContainer,
  CardDivider,
  CardHeading,
  CardSubtitle,
  CardText,
  CardWrapper,
  Container,
  ContentWrapper,
  LinkBtn,
} from './ThankYouElements';

export function ThankYou() {
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
    <Container>
      <ContentWrapper>
        <Icon to={locale === 'esp' ? '/' : '/cwb'}>voltar</Icon>
        <CardWrapper>
          <CardContainer>
            <CardHeading>
              {locale === 'esp' ? '¡Gracias!' : 'Obrigado!'}
            </CardHeading>
            <CardSubtitle>
              {locale === 'esp'
                ? 'Su inscripción en el curso fue un éxito'
                : 'Sua inscrição está confirmada'}
            </CardSubtitle>
            <CardDivider />
            <CardText>
              {locale == 'esp'
                ? 'Haga clic en el botón verde para unirse al grupo de WhatsApp del curso'
                : 'Clique no botão verde para entrar no grupo exclusivo de WhatsApp'}
            </CardText>
            <LinkBtn
              href={
                locale == 'esp'
                  ? 'https://chat.whatsapp.com/JtxdLmKyGvKGoDwyDiD5U0'
                  : 'https://chat.whatsapp.com/IL0SNOgMgik9cfTWr5EiAk'
              }
              target="_blank"
            >
              <CardBtn>
                {locale == 'esp' ? 'Hablar por WhatsApp' : 'Entrar'}
              </CardBtn>
            </LinkBtn>
          </CardContainer>
        </CardWrapper>
      </ContentWrapper>
    </Container>
  );
}
