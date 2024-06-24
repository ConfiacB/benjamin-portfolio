import styled from 'styled-components';
import { MdArrowUpward } from 'react-icons/md';

export const FooterContainer = styled.footer`
  background-color: #060F13;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #33BBBF;
    transform: scale(1.3);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

export const ArrowUp = styled(MdArrowUpward)`
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TopButton = styled.a`
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 99;
  color: white;
  cursor: pointer;
  padding: 15px;
  border: none;
  outline: none;
  background-color: #060F13;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #33BBBF;
    transform: scale(1.3);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
  
  @media screen and (max-width: 750px) {
    display: none;
  }
`;