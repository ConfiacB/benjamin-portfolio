import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const PortfolioContainer = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060F13;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 1;
  }
`;

export const PortfolioIcon = styled.img`
  height: 160px;
  width: 220px;
  margin-bottom: 10px;
`;

export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const PortfolioP2 = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #33BBBF;
  margin-top: -50px;
  margin-bottom: 40px;
`;

export const StyleModal = Modal.styled`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px 30px 80px 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin: auto 30px;
  margin-top: 95px;
  width: 82%;
  height: 82%;
  overflow-y: scroll;
`;

export const StyleModalTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const StyleModalP = styled.p`
  font-size: 1rem;
  //text-align: center;
  width: 40%;
  margin-bottom: 20px;
`;

export const StyleModalButton = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#33BBBF' : '#060F13')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#060F13' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#33BBBF')};
    color: #060F13;
  }
`;

export const StyleModalLink = styled.a`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#33BBBF' : '#060F13')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#060F13' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#33BBBF')};
    color: #060F13;
  }
`;

export const StyleModalLinkContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Img = styled.img`
  width: 80%;
  border-radius: 10px;
`;

export const Img2 = styled.img`
  width: 20%;
  border-radius: 10px;
`;

export const Img3 = styled.img`
  width: 50%;
  border-radius: 10px;
`;

export const Close = styled.img`
  width: 20px;
  margin-left: 90%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: invert(58%) sepia(98%) 
      saturate(299%) hue-rotate(133deg) 
      brightness(90%) contrast(93%);
  }
`;

export const ButtonTwo = styled.a`
  color: #fff;
  background-image: linear-gradient(30deg, #060F13 50%, #33BBBF 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 400ms ease-in-out;
  border-radius: 50px;
  white-space: nowrap;
  padding: 14px 30px;
  cursor:pointer;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 20px;

  &:hover {
    background-position: 100%;
    color: #fff;
    transition: 400ms ease-in-out;
  }
`;