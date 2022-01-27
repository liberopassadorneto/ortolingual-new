import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClassCard } from '../ClassCard';
import {
  cardObjFive,
  cardObjFour,
  cardObjNine,
  cardObjOne,
  cardObjOnePtBr,
  cardObjSevenEight,
  cardObjSix,
  cardObjTen,
  cardObjThree,
  cardObjTwo,
  cardObjTwoPtBr,
} from '../ClassCard/data';
import {
  FeaturesContainer,
  FeaturesHeading,
  FeaturesWrapper,
} from './FeaturesElements';

export function Features() {
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
    <FeaturesContainer id="features">
      <FeaturesHeading>
        {locale === 'esp' ? 'Contenido del curso' : 'Conteúdo do curso'}
      </FeaturesHeading>
      <FeaturesWrapper>
        {locale === 'esp' ? (
          <>
            <ClassCard {...cardObjOne} />
            <ClassCard {...cardObjTwo} />
            <ClassCard {...cardObjThree} />
            <ClassCard {...cardObjFour} />
            <ClassCard {...cardObjFive} />
            <ClassCard {...cardObjSix} />
            <ClassCard {...cardObjSevenEight} />
            <ClassCard {...cardObjNine} />
            <ClassCard {...cardObjTen} />
          </>
        ) : (
          <>
            <ClassCard {...cardObjOnePtBr} />
            <ClassCard {...cardObjTwoPtBr} />
          </>
        )}
      </FeaturesWrapper>
    </FeaturesContainer>
  );
}
