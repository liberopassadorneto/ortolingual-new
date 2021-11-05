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
  return (
    <Container>
      <ContentWrapper>
        <Icon to='/'>voltar</Icon>
        <CardWrapper>
          <CardContainer>
            <CardHeading>¡Gracias!</CardHeading>
            <CardSubtitle>
              Su inscripción en el curso fue un éxito.
            </CardSubtitle>
            <CardDivider />
            <CardText>
              Haga clic en el botón verde para unirse al grupo de WhatsApp del
              curso.
            </CardText>
            <LinkBtn
              href='https://chat.whatsapp.com/GGcybrjgn6ZLYQdleog7FI'
              target='_blank'
            >
              <CardBtn>Hablar por WhatsApp</CardBtn>
            </LinkBtn>
          </CardContainer>
        </CardWrapper>
      </ContentWrapper>
    </Container>
  );
}
