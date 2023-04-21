import React, { Suspense, useState } from 'react'
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ButtonTwo
} from './HeroElements';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sphere from "./AnimatedSphere";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Benjamin Confiac</HeroH1>
        <HeroP>
          IT Engineer from France
        </HeroP>
        <HeroBtnWrapper>
          <ButtonTwo 
            to="about"
            spy={true}
            smooth={true}
            duration={500} 
	    offset={-80}
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonTwo>
        </HeroBtnWrapper>
      </HeroContent>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
    </HeroContainer>
  )
}

export default HeroSection;
