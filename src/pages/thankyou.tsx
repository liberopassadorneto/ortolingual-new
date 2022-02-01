import ReactPixel from 'react-facebook-pixel';
import { ScrollToTop } from '../components/ScrollToTop';
import { ThankYou } from '../components/ThankYou';

export function ThankYouPage() {
  ReactPixel.track('Lead', '');

  return (
    <>
      <ScrollToTop />
      <ThankYou />
    </>
  );
}
