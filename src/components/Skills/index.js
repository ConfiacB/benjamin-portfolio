import React from 'react';
import {
  SkillContainer,
  SkillH1,
  SkillH2,
  TechIcon,
} from './SkillsElement';
import {
  SiReact,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiAmazonaws,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPython,
  SiPostman,
  SiTrello,
  SiFigma,
  SiSlack,
} from 'react-icons/si';
import { FaNodeJs, FaJava } from 'react-icons/fa';
import {Slide} from 'react-awesome-reveal';

const Skills = ({
  lightBg, 
  id, 
  headline,
}) => {

  const marginVar = '100px';

  return (
    <>
      <SkillContainer lightBg={lightBg} id={id}>
        <SkillH1>{headline}</SkillH1>
        <div>
          <Slide triggerOnce={true} direction='left'>
              <TechIcon>
                  <div style={{display:'inline-block'}}>
                      <SiReact style={{marginRight: marginVar}} /><SkillH2>React</SkillH2>
                  </div>
                  <div style={{display:'inline-block'}}>
                      <SiRedux style={{marginRight: marginVar}} /><SkillH2>Redux</SkillH2>
                  </div>
                  <div style={{display:'inline-block'}}>
                      <SiMongodb style={{marginRight: marginVar}} /><SkillH2>MongoDB</SkillH2>
                  </div>
                  <div style={{display:'inline-block'}}>
                      <SiPostgresql style={{marginRight: marginVar}} /><SkillH2>PostgreSQL</SkillH2>
                  </div>
                  <div style={{display:'inline-block'}}>
                      <FaNodeJs /><SkillH2>NodeJs</SkillH2>
                  </div>
              </TechIcon>
          </Slide>
          <Slide triggerOnce={true} direction='right'>
              <TechIcon>
                <div style={{display:'inline-block'}}>
                  <SiJavascript style={{marginRight: marginVar}} /><SkillH2>Javascript</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiTypescript style={{marginRight: marginVar}} /><SkillH2>Typescript</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiGo style={{marginRight: marginVar}} /><SkillH2>Golang</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiPython style={{marginRight: marginVar}} /><SkillH2>Python</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <FaJava /><SkillH2>Java</SkillH2>
                </div>
              </TechIcon>
          </Slide>
          <Slide triggerOnce={true} direction='left'>
              <TechIcon>
                <div style={{display:'inline-block'}}>
                  <SiAmazonaws style={{marginRight: marginVar}} /><SkillH2>AWS</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiPostman style={{marginRight: marginVar}} /><SkillH2>Postman</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiFigma style={{marginRight: marginVar}} /><SkillH2>Figma</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiTrello style={{marginRight: marginVar}} /><SkillH2>Trello</SkillH2>
                </div>
                <div style={{display:'inline-block'}}>
                  <SiSlack /><SkillH2>Slack</SkillH2>
                </div>
              </TechIcon>
          </Slide>
        </div>
      </SkillContainer>
    </>
  )
}

export default Skills;
