import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Subtitle2,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  //ButtonTwo,
  ButtonThree,
  StyledURL,
} from './InfoElements';
import Pdf from './benjamin_confiac.pdf';
import {Slide, Fade} from 'react-awesome-reveal';

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
            <Slide triggerOnce={true} direction='left'>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Fade triggerOnce={true} cascade>
                <Subtitle darkText={darkText} dangerouslySetInnerHTML={{__html: replaceWithBr(description)}}/>
                <Subtitle darkText={darkText} dangerouslySetInnerHTML={{__html: replaceWithBr(descriptionKr)}}/>
                <Subtitle2 darkText={darkText}><u><b>Certification :</b></u></Subtitle2>
                <Subtitle2>
                  <ul style={{marginLeft:'20px'}}>
                    <li style={{marginBottom:'30px'}}><StyledURL href='https://www.credly.com/badges/6aadc28e-6f85-4314-893e-e36a9a5ade08/public_url' target='_blank'><u>AWS Certified Cloud Practitioner</u></StyledURL></li>
                    {/*<li style={{marginBottom:'25px'}}>TOEIC</li>*/}
                  </ul>
                </Subtitle2>
                <BtnWrap>{/*
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
                    <b>{buttonLabel}</b>
                  </ButtonTwo>*/}
                  <ButtonThree to={Pdf} target="_blank" dark={dark ? 1 : 0}>
                    <b>View Resume</b>
                  </ButtonThree>
                </BtnWrap>
                </Fade>
              </TextWrapper>
              </Slide>
            </Column1>
            <Column2>
            <Slide triggerOnce={true} direction='right'>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Slide>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
