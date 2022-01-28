import {
  Container,
  Divider,
  Subtitle,
  Title,
  Topic,
  Topics,
  TopLine,
} from './PricingCardElements';

type TopicType = {
  id: string;
  title: string;
};

interface PricingCardProps {
  topLine: string;
  title: string;
  topics: TopicType[];
}

export function PricingCard({ topLine, title, topics }: PricingCardProps) {
  return (
    <Container>
      {/* <FeaturesIcon src={icon1} /> */}
      <TopLine>Curso Presencial</TopLine>
      <Title>
        $40 <span>dólares</span>
      </Title>
      <Subtitle>valor da inscrição</Subtitle>
      <Divider />
      <Topics>
        {topics.map((topic) => {
          return <Topic key={topic.id}>{topic.title}</Topic>;
        })}
      </Topics>
    </Container>
  );
}
