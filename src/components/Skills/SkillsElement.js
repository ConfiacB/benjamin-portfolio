import styled from 'styled-components';

export const SkillContainer = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060F13;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const SkillH1 = styled.h1`
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillH2 = styled.h2`
  font-size: 1.3rem;
  color: #fff;
`;

export const TechIcon = styled.div`
  font-size: 60px;
  color: white;
  margin-bottom: 60px;
`;