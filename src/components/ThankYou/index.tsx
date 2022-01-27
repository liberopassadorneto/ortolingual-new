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
  const { pathname } = useLocation();
  const cwbPathname = pathname.includes('cwb');

  return (
    <Container>
      <ContentWrapper>
        <Icon to="/">voltar</Icon>
        <CardWrapper>
          <CardContainer>
            <CardHeading>{cwbPathname ? 'Obrigado!' : '¡Gracias!'}</CardHeading>
            <CardSubtitle>
              {cwbPathname
                ? 'Sua inscrição está confirmada.'
                : 'Su inscripción en el curso fue un éxito.'}
            </CardSubtitle>
            <CardDivider />
            <CardText>
              {cwbPathname
                ? 'Clique no botão verde para entrar no grupo exclusivo de WhatsApp.'
                : 'Haga clic en el botón verde para unirse al grupo de WhatsApp del curso.'}
            </CardText>
            <LinkBtn
              href={
                cwbPathname
                  ? 'https://chat.whatsapp.com/IL0SNOgMgik9cfTWr5EiAk'
                  : 'https://chat.whatsapp.com/JtxdLmKyGvKGoDwyDiD5U0'
              }
              target="_blank"
            >
              <CardBtn>
                {cwbPathname ? 'Entrar' : 'Hablar por WhatsApp'}
              </CardBtn>
            </LinkBtn>
          </CardContainer>
        </CardWrapper>
      </ContentWrapper>
    </Container>
  );
}
