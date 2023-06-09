import React, { useState } from 'react';
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
import PortfolioProject from './PortfolioProject';

import {
PortfolioContainer,
PortfolioH1,
PortfolioWrapper,
PortfolioP2,
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
        <PortfolioProject
          id={"jsnote-app"}
          toggle={toggleJsNote}
          imgIcon={JsNote}
          imgProject={JsNote}
          title={"JsNote App"}
          open={jsNoteIsOpen}
          alt={"jsnote-app"}
          text={"This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown. All of your changes get saved to the file you opened Jsnote with."}
          tools={"React, Redux"}
          languages={"TypeScript"}
          imageNumber={1}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"movies-webapp"}
          toggle={toggleMovies}
          imgIcon={Movies}
          imgProject={Movies}
          title={"Movies Database App"}
          open={moviesIsOpen}
          alt={"movies-app"}
          text={"This is a web application where you can manage movies using RESTful API."}
          tools={"React, GraphQL, PostgreSQL, Postman, themoviedb.org API"}
          languages={"JavaScript, Go, SQL"}
          imageNumber={1}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"portfolio-app"}
          toggle={togglePortfolio}
          imgIcon={Portfolio_App}
          imgProject={Portfolio_App}
          title={"Portfolio"}
          open={portfolioIsOpen}
          alt={"portfolio-app"}
          text={"The purpose of this application is to display my IT projects, I use it as my personal portfolio website."}
          tools={"React"}
          languages={"JavaScript"}
          imageNumber={1}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"shop-app"}
          toggle={toggleShop}
          imgIcon={Shop}
          imgProject={Shop}
          title={"Shop App"}
          open={shopIsOpen}
          alt={"shop-app"}
          text={"A shopping cart / eCommerce application using the MERN (MongoDB, Express, React, NodeJS) stack."}
          tools={"React, Redux, Express, MongoDB, NodeJS, PayPal API"}
          languages={"JavaScript, SQL"}
          imageNumber={3}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"memory-game-app"}
          toggle={toggleMemory}
          imgIcon={Memory}
          imgProject={Memory}
          title={"Memory Game"}
          open={memoryIsOpen}
          alt={"memory-game-app"}
          text={"This is a simple SPA (Single Page Application) Memory Game."}
          tools={"React"}
          languages={"JavaScript"}
          imageNumber={1}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"news-app"}
          toggle={toggleNews}
          imgIcon={News_Icon}
          imgProject={News}
          title={"News App"}
          open={newsIsOpen}
          alt={"news-app"}
          text={"A news feed application with a Home screen and a Detail screen."}
          tools={"React Native, Redux, newsapi.org API, Postman"}
          languages={"TypeScript"}
          imageNumber={2}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"BMI-app"}
          toggle={toggleBMI}
          imgIcon={BMI_Icon}
          imgProject={BMI}
          title={"BMI Calculator"}
          open={bmiIsOpen}
          alt={"BMI-app"}
          text={"A BMI (Body Mass Index) Calculator app with a Home screen and a Result screen."}
          tools={"Flutter, Android Studio"}
          languages={"Dart"}
          imageNumber={2}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"connect4-app"}
          toggle={toggleConnect4}
          imgIcon={Connect4_Icon}
          imgProject={Connect4}
          title={"Connect Four with AI"}
          open={connect4IsOpen}
          alt={"connect4-app"}
          text={"A Connect Four game where you play against an AI. You have to form a horizontal, vertical, or diagonal line of 4 tokens."}
          tools={"Spyder IDE"}
          languages={"Python"}
          imageNumber={3}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"korean-app"}
          toggle={toggleKorean}
          imgIcon={Korean_Icon}
          imgProject={Korean}
          title={"Korean Training"}
          open={koreanIsOpen}
          alt={"korean-app"}
          text={"Auto-generate sentence flashcards to practice Korean. Each card has 2 buttons, 'Show Answer' and 'Next'.\n It gives sentences or words (depending on the options chosen), the goal is to either translate or to conjugate these words."}
          tools={"React"}
          languages={"JavaScript"}
          imageNumber={1}
        />

      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;
