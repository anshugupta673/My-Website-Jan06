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
    <SectionTitle>Personal Achievements</SectionTitle>
    
    <SectionText>
      Mentor @SWOC'21,
      Cyber Security Lead @Microsft Students Community KIIT, Bhubaneswar,
      Microsoft Virtual Intern(2020),
      KIIT Merit Scholar
    </SectionText>




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
