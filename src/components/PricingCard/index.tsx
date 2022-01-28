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
  subtitle: string;
  topics: TopicType[];
}

export function PricingCard({
  topLine,
  title,
  subtitle,
  topics,
}: PricingCardProps) {
  return (
    <Container>
      {/* <FeaturesIcon src={icon1} /> */}
      <TopLine>{topLine}</TopLine>
      <Title>
        {title} <span>dólares</span>
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <Divider />
      <Topics>
        {topics.map((topic) => {
          return <Topic key={topic.id}>{topic.title}</Topic>;
        })}
      </Topics>
    </Container>
  );
}
