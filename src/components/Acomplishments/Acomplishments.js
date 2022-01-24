import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects'},
  { number: 3, text: 'Programming Languages', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Other Achievements</SectionTitle>
    
    <SectionText>
      Cyber Security Lead @Microsft Students Community KIIT <br />
      KPMG Ideation Challenge 2022 (Round 3:Semi-Finals) <br />
      Mentor @SWOC'21 <br />
      4 start coder codechef <br />
      KIIT Merit Scholar <br />
    </SectionText>

{/* 
    <SectionTitle>Certificates</SectionTitle>
    
    <SectionText>
      Linux Kernel Development LFD103 - The Linux Foundation <a href="https://drive.google.com/file/d/1cYaDC8mHNvI5eEjkXx7m3Q_H_835esoL/view?usp=sharing">"LFD103"</a>
    </SectionText>

    <SectionTitle>Competitive Coding Profiles</SectionTitle>
    
    <SectionText>
      <a href = "">Codechef</a>
      Interviewbit
    </SectionText> */}


    {/* <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
    <SectionDivider/>
  </Section>

  
);

export default Acomplishments;
