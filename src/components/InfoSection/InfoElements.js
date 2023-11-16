import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkPdf } from 'react-router-dom';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#060F13')};
  padding: 40px 0;
  min-height: 100vh;
  height: auto;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 1100px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
  `;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 30px 40px 40px 40px;
  box-shadow: 10px 10px 10px black;
`;

export const TopLine = styled.p`
  color: #33BBBF;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#060F13')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 480px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#060F13' : '#fff')};
`;

export const Subtitle2 = styled.p`
  max-width: 480px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#060F13' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  margin-left: 80px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ButtonTwo = styled(Link)`
  color: ${({dark}) => (dark ? '#060F13' : '#fff')};
  ${({dark}) => (dark ? 'border: 3px solid #33BBBF;' : '')};
  background-image: linear-gradient(30deg, ${({dark}) => (dark ? '#33BBBF' : '#060F13')} 50%, ${({dark}) => (dark ? 'transparent' : '#33BBBF')} 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 400ms ease-in-out;
  border-radius: 50px;
  white-space: nowrap;
  padding: 14px 30px;
  cursor:pointer;
  text-decoration: none;

  &:hover {
    background-position: 100%;
    color: ${({dark}) => (dark ? '#33BBBF' : '#fff')};
    transition: 0.3s ease-in-out;
  }
`;

export const ButtonThree = styled(LinkPdf)`
  color: ${({dark}) => (dark ? '#060F13' : '#fff')};
  ${({dark}) => (dark ? 'border: 3px solid #33BBBF;' : '')};
  background-image: linear-gradient(30deg, ${({dark}) => (dark ? '#33BBBF' : '#060F13')} 50%, ${({dark}) => (dark ? 'transparent' : '#33BBBF')} 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 400ms ease-in-out;
  border-radius: 50px;
  white-space: nowrap;
  padding: 14px 30px;
  cursor:pointer;
  text-decoration: none;
  margin-left: 0px;

  &:hover {
    background-position: 100%;
    color: ${({dark}) => (dark ? '#33BBBF' : '#fff')};
    transition: 0.3s ease-in-out;
  }
`;

export const StyledURL = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #33BBBF;
    transition: 0.2s ease-out;
    font-size: 110%;
  }
`;