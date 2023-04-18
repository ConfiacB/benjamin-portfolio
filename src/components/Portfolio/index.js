import React, { useState } from 'react';
import CloseIcon from '../../images/close.png';
import JsNote from '../../images/project/jsnote-webapp.png';
import Movies from '../../images/project/movies-webapp.png';
import Portfolio_App from '../../images/project/portfolio.png';
import Shop from '../../images/project/react-shop.png';
import Memory from '../../images/project/react-memory-game.png';
import News from '../../images/project/news-app-demo.gif';
import News_Icon from '../../images/news-icon.jpg';
import BMI from '../../images/project/bmi-calc-demo.gif';
import BMI_Icon from '../../images/BMI-icon.png';
import Connect4_Icon from '../../images/connect_four.png'
import Connect4 from '../../images/project/connect_four_game.png';
import Korean_Icon from '../../images/Korean-Icon.png';
import Korean from '../../images/project/korean-training.png';

import {
PortfolioContainer,
PortfolioH1,
PortfolioWrapper,
PortfolioCard,
PortfolioIcon,
PortfolioH2,
PortfolioP2,
StyleModal,
StyleModalTitle,
StyleModalP,
Img,
Img2,
Img3,
StyleModalLinkContainer,
Close
} from './PortfolioElements';

const Portfolio = () => {
  const [jsNoteIsOpen, setJsNoteIsOpen] = useState(false);
  const [moviesIsOpen, setMoviesIsOpen] = useState(false);
  const [portfolioIsOpen, setPortfolioIsOpen] = useState(false);
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [memoryIsOpen, setMemoryIsOpen] = useState(false);
  const [newsIsOpen, setNewsIsOpen] = useState(false);
  const [bmiIsOpen, setBmiIsOpen] = useState(false);
  const [connect4IsOpen, setConnect4IsOpen] = useState(false);
  const [koreanIsOpen, setKoreanIsOpen] = useState(false);

  const toggleJsNote = () => {
    setJsNoteIsOpen(!jsNoteIsOpen);
  };

  const toggleMovies = () => {
    setMoviesIsOpen(!moviesIsOpen);
  };

  const togglePortfolio = () => {
    setPortfolioIsOpen(!portfolioIsOpen);
  };

  const toggleShop = () => {
    setShopIsOpen(!shopIsOpen);
  };

  const toggleMemory = () => {
    setMemoryIsOpen(!memoryIsOpen);
  };

  const toggleNews = () => {
    setNewsIsOpen(!newsIsOpen);
  };

  const toggleBMI = () => {
    setBmiIsOpen(!bmiIsOpen);
  };

  const toggleConnect4 = () => {
    setConnect4IsOpen(!connect4IsOpen);
  };

  const toggleKorean = () => {
    setKoreanIsOpen(!koreanIsOpen);
  };

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioP2>Please check back here for updated projects.</PortfolioP2>
      <PortfolioWrapper>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="jsnote-app" onClick={toggleJsNote}>
          <PortfolioIcon src={JsNote} />
          <PortfolioH2>JsNote App</PortfolioH2>
        </PortfolioCard>

        <StyleModal
          isOpen={jsNoteIsOpen}
          onBackgroundClick={toggleJsNote}
          onEscapeKeydown={toggleJsNote}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleJsNote} />
          <Img src={JsNote} alt="jsnote-app" />
          <StyleModalTitle>JsNote App</StyleModalTitle>
          <StyleModalP>
            This is an interactive coding environment. 
            You can write Javascript, see it executed, and write comprehensive documentation using markdown. 
            All of your changes get saved to the file you opened Jsnote with.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React, Redux<br />
            <b>Languages : </b> TypeScript
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="movies-webapp" onClick={toggleMovies}>
          <PortfolioIcon src={Movies} />
          <PortfolioH2>Movies Database App</PortfolioH2>
        </PortfolioCard>
        <StyleModal
          isOpen={moviesIsOpen}
          onBackgroundClick={toggleMovies}
          onEscapeKeydown={toggleMovies}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleMovies} />
          <Img src={Movies} alt="movies-app" />
          <StyleModalTitle>Movies Database App</StyleModalTitle>
          <StyleModalP>
            This is a web application where you can manage movies using RESTful API.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React, GraphQL, PostgreSQL, Postman, themoviedb.org API<br />
            <b>Languages : </b>JavaScript, Go, SQL
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="portfolio-app" onClick={togglePortfolio}>
          <PortfolioIcon src={Portfolio_App} />
          <PortfolioH2>Portfolio</PortfolioH2>
        </PortfolioCard>
        <StyleModal
          isOpen={portfolioIsOpen}
          onBackgroundClick={togglePortfolio}
          onEscapeKeydown={togglePortfolio}
        >
          <Close src={CloseIcon} alt="close" onClick={togglePortfolio} />
          <Img src={Portfolio_App} alt="portfolio-app" />
          <StyleModalTitle>Portfolio</StyleModalTitle>
          <StyleModalP>
            The purpose of this application is to display my IT projects, I use it as my personal portfolio website.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React<br />
            <b>Languages : </b>JavaScript
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="shop-app" onClick={toggleShop}>
          <PortfolioIcon src={Shop} />
          <PortfolioH2>Shop App</PortfolioH2>
        </PortfolioCard>
        <StyleModal
          isOpen={shopIsOpen}
          onBackgroundClick={toggleShop}
          onEscapeKeydown={toggleShop}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleShop} />
          <Img3 src={Shop} alt="shop-app" />
          <StyleModalTitle>Shop App</StyleModalTitle>
          <StyleModalP>
            A shopping cart / eCommerce application using the MERN (MongoDB, Express, React, NodeJS) stack
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React, Redux, Express, MongoDB, NodeJS, PayPal API<br />
            <b>Languages : </b>JavaScript, SQL
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="memory-game-app" onClick={toggleMemory}>
          <PortfolioIcon src={Memory} />
          <PortfolioH2>Memory Game</PortfolioH2>
        </PortfolioCard>
        <StyleModal
          isOpen={memoryIsOpen}
          onBackgroundClick={toggleMemory}
          onEscapeKeydown={toggleMemory}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleMemory} />
          <Img src={Memory} alt="memory-game-app" />
          <StyleModalTitle>Memory Game</StyleModalTitle>
          <StyleModalP>
            This is a simple SPA (Single Page Application) Memory Game.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React<br />
            <b>Languages : </b>JavaScript
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="news-app" onClick={toggleNews}>
          <PortfolioIcon src={News_Icon} />
          <PortfolioH2>News App</PortfolioH2>
        </PortfolioCard>

        <StyleModal
          isOpen={newsIsOpen}
          onBackgroundClick={toggleNews}
          onEscapeKeydown={toggleNews}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleNews} />
          <Img2 src={News} alt="news-app" />
          <StyleModalTitle>News App</StyleModalTitle>
          <StyleModalP>
            A news feed application with a Home screen and a Detail screen.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React Native, Redux, newsapi.org API, Postman<br />
            <b>Languages : </b>TypeScript
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="BMI-app" onClick={toggleBMI}>
          <PortfolioIcon src={BMI_Icon} />
          <PortfolioH2>BMI Calculator</PortfolioH2>
        </PortfolioCard>

        <StyleModal
          isOpen={bmiIsOpen}
          onBackgroundClick={toggleBMI}
          onEscapeKeydown={toggleBMI}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleBMI} />
          <Img2 src={BMI} alt="BMI-app" />
          <StyleModalTitle>BMI Calculator</StyleModalTitle>
          <StyleModalP>
            A BMI (Body Mass Index) Calculator app with a Home screen and a Result screen.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>Flutter, Android Studio<br />
            <b>Languages : </b>Dart
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="connect4-app" onClick={toggleConnect4}>
          <PortfolioIcon src={Connect4_Icon} />
          <PortfolioH2>Connect Four with AI</PortfolioH2>
        </PortfolioCard>

        <StyleModal
          isOpen={connect4IsOpen}
          onBackgroundClick={toggleConnect4}
          onEscapeKeydown={toggleConnect4}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleConnect4} />
          <Img3 src={Connect4} alt="connect4-app" />
          <StyleModalTitle>Connect Four with AI</StyleModalTitle>
          <StyleModalP>
            A connect four game where you play against an AI. You have to form a horizontal, vertical, or diagonal line of 4 tokens.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>Spyder IDE<br />
            <b>Languages : </b>Python
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioCard id="korean-app" onClick={toggleKorean}>
          <PortfolioIcon src={Korean_Icon} />
          <PortfolioH2>Korean Training</PortfolioH2>
        </PortfolioCard>

        <StyleModal
          isOpen={koreanIsOpen}
          onBackgroundClick={toggleKorean}
          onEscapeKeydown={toggleKorean}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleKorean} />
          <Img src={Korean} alt="korean-app" />
          <StyleModalTitle>Korean Training</StyleModalTitle>
          <StyleModalP>
            Auto-generate sentence flashcards to practice Korean.
            Each card has 2 buttons, "Show Answer" and "Next".<br /> 
            It gives sentences or words (depending on the options chosen)
            The goal is to either translate or to conjugate these words.
          </StyleModalP>
          <StyleModalP>
            <b>Tools : </b>React<br />
            <b>Languages : </b>JavaScript
          </StyleModalP>
          <StyleModalLinkContainer>
            {/*
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href=""
            >
              View Website
            </ButtonTwo>
            */}
          </StyleModalLinkContainer>
        </StyleModal>

      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;
