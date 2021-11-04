import { BtnCta, BtnCtaProps } from '../Button';
import {
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrapper,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';
import {
  HeadingProps,
  InfoContainerProps,
  InfoRowProps,
  SubtitleProps,
} from './types';

interface InfoSectionProps
  extends InfoContainerProps,
    InfoRowProps,
    HeadingProps,
    SubtitleProps,
    BtnCtaProps {
  id: string;
  topLine: string;
  heading: string;
  subtitle: string;
  btnLabel: string;
  img: string;
  alt: string;
  url?: string;
}

export function InfoSection({
  id,
  lightBg,
  imgStart,
  lightText,
  topLine,
  heading,
  subtitle,
  btnLabel,
  img,
  alt,
  primary,
  dark,
  url,
}: InfoSectionProps) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle lightText={lightText}>{subtitle}</Subtitle>
              <BtnWrapper>
                <a href={url} target='_blank'>
                  <BtnCta primary={primary} dark={dark}>
                    {btnLabel}
                  </BtnCta>
                </a>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
