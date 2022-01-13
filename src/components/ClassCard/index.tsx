import { Container, Divider, Title, Topic, Topics, TopLine } from "./styles";

type TopicType = {
  id: string;
  title: string;
};

interface ClassCardProps {
  topLine: string;
  title: string;
  topics: TopicType[];
}

export function ClassCard({ topLine, title, topics }: ClassCardProps) {
  return (
    <Container>
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
