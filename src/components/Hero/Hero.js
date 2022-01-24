import React from 'react';

// import { render } from 'react-dom'
// import {
//     MorphIcon,
//     CloseButton,
//     NavButton,
//     PlusButton,
// } from 'react-svg-buttons'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I am Anshu Gupta :)
        </SectionTitle>
        <SectionText>
        About me, I specialize in cloud automation, DevOps technologies, and backend development, worked as a web developer with a strong interest in Open source projects.  A pre-final year Computer Science and Engineering student at Kalinga Institute of Industrial Technology, Bhubaneswar. <br /> Want to know more about me, check my resume <a href = "https://drive.google.com/file/d/1Wdk6dc6IkK5bjn3YC8o92be1DTxxDUgO/view?usp=sharing">"Click for resume..."</a>
        {/* The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. */}
        </SectionText>

        {/* <CustomButton href = "https://drive.google.com/file/d/1K82UJhwF57_t-kiGQLVHTVMshVxjtXRh/view?usp=sharing" >View Resume ":)"</CustomButton> */}

        <Button onClick={props.handleClick}>View More</Button>
        {/* <Button onClick={props.handleClick} href="https://drive.google.com/file/d/1K82UJhwF57_t-kiGQLVHTVMshVxjtXRh/view?usp=sharing">View Resume</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;