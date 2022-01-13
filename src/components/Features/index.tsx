import {
  FeaturesCard,
  FeaturesContainer,
  FeaturesDesc,
  FeaturesHeading,
  FeaturesIcon,
  FeaturesSubtitle,
  FeaturesWrapper
} from './styles';
import icon1 from '/assets/images/piggy.svg';

export function Features() {
  return (
    <FeaturesContainer id='features'>
      <FeaturesHeading>Contenido del Curso</FeaturesHeading>
      <FeaturesWrapper>
        <FeaturesCard>
          <FeaturesIcon src={icon1} />
          <FeaturesSubtitle>Reduce expenses</FeaturesSubtitle>
          <FeaturesDesc>
            We help reduce your fess and increase yout overall revenue.
          </FeaturesDesc>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={icon1} />
          <FeaturesSubtitle>Reduce expenses</FeaturesSubtitle>
          <FeaturesDesc>
            We help reduce your fess and increase yout overall revenue.
          </FeaturesDesc>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={icon1} />
          <FeaturesSubtitle>Reduce expenses</FeaturesSubtitle>
          <FeaturesDesc>
            We help reduce your fess and increase your overall revenue.
          </FeaturesDesc>
        </FeaturesCard>
          </FeaturesWrapper>
    </FeaturesContainer>
  );
}
