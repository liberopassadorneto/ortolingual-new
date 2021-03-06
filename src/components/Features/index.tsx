import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClassCard } from '../ClassCard';
import {
  cardObjFive,
  cardObjFour,
  cardObjFourPtBr,
  cardObjNine,
  cardObjOne,
  cardObjOnePtBr,
  cardObjSevenEight,
  cardObjSix,
  cardObjTen,
  cardObjThree,
  cardObjThreePtBr,
  cardObjTwo,
  cardObjTwoPtBr,
} from '../ClassCard/data';
import {
  FeaturesContainer,
  FeaturesHeading,
  FeaturesWrapper,
} from './FeaturesElements';

interface Props {
  language?: string;
}

export function Features({ language }: Props) {
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
      <FeaturesWrapper language={locale}>
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
            <ClassCard {...cardObjThreePtBr} />
            <ClassCard {...cardObjFourPtBr} />
          </>
        )}
      </FeaturesWrapper>
    </FeaturesContainer>
  );
}
