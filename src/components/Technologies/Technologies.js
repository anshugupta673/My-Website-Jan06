import React from 'react';
import { DiAws, DiCloud9, DiCode, DiFirebase, DiGoogleCloudPlatform, DiLinux, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development to, <br />
      Cloud automation, DevOps world, networking, DBMS, software architecture, cloud native development and more.
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiWebplatform size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web-development</ListTitle>
          <ListParagraph>
            React.js(basic), JavaScript, node.js, express.js, MongodB, MERN stack, REST APIs. <br /> <br />
            Click <a href="anshugupta673">here</a> to check my web development projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL and MongodB Databases, REST APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>


    <List>
      <ListItem>
        <picture>
          <DiGoogleCloudPlatform size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps and Cloud Automation</ListTitle>
          <ListParagraph>
            Linux, vagrant, networking, bash scripting, python scripting, Cloud architecture, <br />AWS(AWS Certified Cloud Practitioner), 
            CI, CD, Jenkins, Ansible, CI & CD on AWS, docker, kubernetes, terraform. <br /> <br />
            Click <a href="anshugupta673">here</a> to check my cloud automation and DevOps projects.<br />
            Click <a href="anshugupta673">here</a> to view my DevOps and Cloud certificates.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCode size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            C, C++, python, javascript, R(basic) <br /> <br />
            Click <a href="anshugupta673">here</a> to check my Data Structures and Algorithms certificates.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    {/* <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web-development</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, node.js, express, MERN stack
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL and MongodB Databases, REST APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker/Kubernetes</ListTitle>
          <ListParagraph>
            Experience with docker, kubernetes building, maintaining and <br />
            debugging a kubernetes cluster and several 
            other Cloud automation and DevOps technologies
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List> */}
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
