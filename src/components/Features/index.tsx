import { ClassCard } from '../ClassCard';
import {
  cardObjFive,
  cardObjFour,
  cardObjNine,
  cardObjOne,
  cardObjSevenEight,
  cardObjSix,
  cardObjTen,
  cardObjThree,
  cardObjTwo,
} from '../ClassCard/data';
import {
  FeaturesContainer,
  FeaturesHeading,
  FeaturesWrapper,
} from './FeaturesElements';

export function Features() {
  return (
    <FeaturesContainer id='features'>
      <FeaturesHeading>Contenido del curso</FeaturesHeading>
      <FeaturesWrapper>
        <ClassCard {...cardObjOne} />
        <ClassCard {...cardObjTwo} />
        <ClassCard {...cardObjThree} />
        <ClassCard {...cardObjFour} />
        <ClassCard {...cardObjFive} />
        <ClassCard {...cardObjSix} />
        <ClassCard {...cardObjSevenEight} />
        <ClassCard {...cardObjNine} />
        <ClassCard {...cardObjTen} />
      </FeaturesWrapper>
    </FeaturesContainer>
  );
}
