import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ButtonTwo,
  ButtonThree
} from './InfoElements';
import Pdf from './benjamin_confiac.pdf';

const InfoSection = ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headline, 
  darkText, 
  description,
  descriptionKr, 
  buttonLabel,
  buttonLocation, 
  img, 
  alt,
  primary,
  dark,
}) => {

  const replaceWithBr = (str) => {
    return str.replace(/\n/g, "<br />")
  }
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText} dangerouslySetInnerHTML={{__html: replaceWithBr(description)}}/>
                <Subtitle darkText={darkText} dangerouslySetInnerHTML={{__html: replaceWithBr(descriptionKr)}}/>
                <Subtitle><u>What I use (but not limited to):</u><br/><br/>
                  <ul>
                    <li>React, React Native, Flutter, Redux, PostgreSQL, MongoDB, NodeJS, ...</li>
                    <li>JavaScript, TypeScript, Go, Dart, SQL, Java, Python, C#, ...</li>
                    <li>Visual Studio Code, Trello, Slack, Figma, ...</li>
                  </ul>
                </Subtitle>
                <BtnWrap>
                  <ButtonTwo
                    to={buttonLocation}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonTwo>
                  <ButtonThree to={Pdf} target="_blank" dark={dark ? 1 : 0}>
                    View Resume
                  </ButtonThree>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
