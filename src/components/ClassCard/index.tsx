import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Divider,
  Title,
  Topic,
  Topics,
  TopLine,
} from './ClassCardElements';

type TopicType = {
  id: string;
  title: string;
};

interface ClassCardProps {
  topLine: string;
  title: string;
  language?: string;
  topics: TopicType[];
}

export function ClassCard({
  topLine,
  title,
  language,
  topics,
}: ClassCardProps) {
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
    <Container language={locale}>
      {/* <FeaturesIcon src={icon1} /> */}
      <TopLine>{topLine}</TopLine>
      <Title>{title}</Title>
      <Divider />
      <Topics>
        {topics.map((topic) => {
          return <Topic key={topic.id}>{topic.title}</Topic>;
        })}
      </Topics>
    </Container>
  );
}
