import { ClassCard } from "../ClassCard";
import {
  cardObjBonus,
  cardObjEight,
  cardObjFive,
  cardObjFour,
  cardObjOne,
  cardObjSeven,
  cardObjSix,
  cardObjThree,
  cardObjTwo,
} from "../ClassCard/data";
import { FeaturesContainer, FeaturesHeading, FeaturesWrapper } from "./styles";

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
        <ClassCard {...cardObjSeven} />
        <ClassCard {...cardObjEight} />
        <ClassCard {...cardObjBonus} />
      </FeaturesWrapper>
    </FeaturesContainer>
  );
}
