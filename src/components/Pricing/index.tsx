import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PricingCard } from '../../components/PricingCard';
import { cardPricingObjOne, cardPricingObjOnePtBr } from '../PricingCard/data';
import {
  PricingContainer,
  PricingHeading,
  PricingWrapper,
} from './PricingElements';

export function Pricing() {
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
    <PricingContainer id="pricing">
      <PricingHeading>
        {locale === 'esp' ? 'Inversión' : 'Planos e Preços'}
      </PricingHeading>
      <PricingWrapper>
        {locale === 'esp' ? (
          <PricingCard {...cardPricingObjOne} />
        ) : (
          <PricingCard {...cardPricingObjOnePtBr} />
        )}
      </PricingWrapper>
    </PricingContainer>
  );
}
