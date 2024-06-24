import React, { useState } from 'react';
import JsNote from '../../images/project/jsnote-webapp.png';
import Movies from '../../images/project/movies-webapp.png';
import Portfolio_App from '../../images/project/portfolio.png';
import Shop from '../../images/project/react-shop.png';
//import Memory from '../../images/project/react-memory-game.png';
import News from '../../images/project/news-app-demo.gif';
import News_Icon from '../../images/news-icon.jpg';
//import Connect4_Icon from '../../images/connect_four.png'
//import Connect4 from '../../images/project/connect_four_game.png';
import Korean_Icon from '../../images/Korean-Icon.png';
import Korean from '../../images/project/korean-training.png';
import PortfolioProject from './PortfolioProject';
import BMI from '../../images/project/bmi-calc-demo.gif';
import BMI_Icon from '../../images/BMI-icon.png';
import AWS_Go from '../../images/aws_go.jpg';
import {Fade} from 'react-awesome-reveal';
import nestjs_backend from '../../images/nestjs_backend.png';

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
  const [connect4IsOpen, setConnect4IsOpen] = useState(false);
  const [koreanIsOpen, setKoreanIsOpen] = useState(false);
  const [bmiIsOpen, setBmiIsOpen] = useState(false);
  const [awsGoIsOpen, setAwsGoIsOpen] = useState(false);
  const [nestBackendIsOpen, setNestBackendisOpen] = useState(false);

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

  const toggleConnect4 = () => {
    setConnect4IsOpen(!connect4IsOpen);
  };

  const toggleKorean = () => {
    setKoreanIsOpen(!koreanIsOpen);
  };
  
  const toggleBMI = () => {
    setBmiIsOpen(!bmiIsOpen);
  };
  
  const toggleAwsGo = () => {
    setAwsGoIsOpen(!awsGoIsOpen);
  }

  const toggleNestjs = () => {
    setNestBackendisOpen(!nestBackendIsOpen);
  }

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Projects</PortfolioH1>
      <PortfolioP2>Please check back here for updated projects.</PortfolioP2>
      <Fade duration={3000} triggerOnce={true}>
      <PortfolioWrapper>

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"shop-app"}
          toggle={toggleShop}
          imgIcon={Shop}
          imgProject={Shop}
          title={"Shop App"}
          open={shopIsOpen}
          alt={"shop-app"}
          text={"A shopping cart / eCommerce application using the MERN (MongoDB, Express, React, NodeJS) stack, Redux Toolkit and PayPal. This project has :\n\n- Shopping cart\n- Products reviews, ratings, carousel, pagination, search\n- user profile\n- admin products, users, orders management\n- checkout process\n- PayPal / credit card\n- Database seeder\n\n"}
          tools={"React, Redux, Express, MongoDB, NodeJS, Postman, PayPal API"}
          languages={"JavaScript"}
          imageNumber={3}
          chipData={[
            { key: 0, label: 'React', color: 'secondary' },
            { key: 1, label: 'Javascript', color: 'error'},
            { key: 2, label: 'MongoDB', color: 'secondary' },
            { key: 3, label: 'NodeJS', color: 'secondary'},
            { key: 4, label: 'Express', color: 'secondary'},
            { key: 5, label: 'PayPal', color: 'secondary'},
            { key: 6, label: 'Redux', color: 'secondary'},
            { key: 7, label: 'REST API', color: 'secondary'},
          ]}
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
          text={"This is a web application where you can manage movies using RESTful CRUD API.\nThe Frontend and Backend are written with React, Javascript and Go.\n\n- Create, Read, Update, Delete a movie\n- Login as an admin\n- Search functionality\n\n"}
          tools={"React, GraphQL, PostgreSQL, Postman, themoviedb.org API"}
          languages={"JavaScript, Go, SQL"}
          imageNumber={1}
          chipData={[
            { key: 0, label: 'React', color: 'secondary'},
            { key: 1, label: 'PostgreSQL', color: 'secondary'},
            { key: 2, label: 'Javascript', color: 'error'},
            { key: 3, label: 'Go', color: 'error'},
            { key: 4, label: 'REST API', color: 'secondary'},
            { key: 5, label: 'GraphQL', color: 'secondary'},
          ]}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"aws-go"}
          toggle={toggleAwsGo}
          imgIcon={AWS_Go}
          imgProject={AWS_Go}
          title={"Serverless REST API"}
          open={awsGoIsOpen}
          alt={"aws-go"}
          text={"This project is a serverless CRUD REST API using AWS (Lambda, DynamoDB, API Gateway) and Golang."}
          tools={"AWS Lambda, AWS DynamoDB, AWS API Gateway"}
          languages={"Go"}
          imageNumber={3}
          chipData={[
            { key: 0, label: 'AWS Lambda', color: 'secondary'},
            { key: 1, label: 'AWS DynamoDB', color: 'secondary'},
            { key: 2, label: 'AWS API Gateway', color: 'secondary'},
            { key: 3, label: 'Go', color: 'error'},
            { key: 4, label: 'REST API', color: 'secondary'},
          ]}
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
          chipData={[
            { key: 0, label: 'React', color: 'secondary'},
            { key: 1, label: 'Javascript', color: 'error'},
          ]}
        />

        {/* ---------------- project ---------------------------------- */}
        <PortfolioProject
          id={"nestjs-backend"}
          toggle={toggleNestjs}
          imgIcon={nestjs_backend}
          imgProject={nestjs_backend}
          title={"NestJs backend"}
          open={nestBackendIsOpen}
          alt={"nestjs-backend"}
          text={"NestJS CRUD API with JWT authentification and AWS S3.\n\n- Login and register using JWT and bcrypt\n- CRUD REST API\n- AWS S3 to store an image\n- MySQL database with 2 tables user and posts\n- Sorting & Search function"}
          tools={"NestJS, AWS S3, TypeORM, MySQL, Postman"}
          languages={"TypeScript"}
          imageNumber={2}
          chipData={[
            { key: 0, label: 'NestJS', color: 'secondary'},
            { key: 1, label: 'TypeScript', color: 'error'},
            { key: 2, label: 'AWS S3', color: 'secondary'},
            { key: 3, label: 'TypeORM', color: 'secondary'},
            { key: 4, label: 'MySQL', color: 'secondary'},
            { key: 5, label: 'REST API', color: 'secondary'},
          ]}
        />

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
          chipData={[
            { key: 0, label: 'React', color: 'secondary'},
            { key: 1, label: 'Redux', color: 'secondary'},
            { key: 2, label: 'Typescript', color: 'error'},
          ]}
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
          chipData={[
            { key: 0, label: 'React', color: 'secondary'},
            { key: 2, label: 'Javascript', color: 'error'},
          ]}
        />

        {/* ---------------- project ---------------------------------- 
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
          chipData={[
            { key: 0, label: 'React', color: 'secondary'},
            { key: 1, label: 'Javascript', color: 'error'},
          ]}
        />
        */}

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
          chipData={[
            { key: 0, label: 'React Native', color: 'secondary'},
            { key: 1, label: 'API', color: 'secondary'},
            { key: 2, label: 'Typescript', color: 'error'},
          ]}
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
          chipData={[
            { key: 0, label: 'Flutter', color: 'secondary'},
            { key: 1, label: 'Dart', color: 'error'},
            { key: 2, label: 'Android Studio', color: 'secondary'},
          ]}
        />

        {/* ---------------- project ---------------------------------- 
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
          chipData={[
            { key: 0, label: 'Python', color: 'error'},
          ]}
        />
        */}

      </PortfolioWrapper>
      </Fade>
    </PortfolioContainer>
  )
}

export default Portfolio;
