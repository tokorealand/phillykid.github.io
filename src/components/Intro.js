import React from 'react'
import profile from '../luisprofile.jpg' // relative path to image 
import styled from 'styled-components';
import media from "styled-media-query";
import {Github, Linkedin} from 'styled-icons/fa-brands'
import {Envelope} from 'styled-icons/fa-regular'





var icon_color='black',icon_height='5vh',icon_width='5vw'
,icon_height_medium='7.5vh',icon_width_medium='7.5vw';



const Wrapper = styled.section`
  padding: 4em;
  background: #D05353;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  text-align:center;`

  const Page = styled.section`
  background: white;
`;

const Title = styled.h1`
  font-size: 10vw;
  text-align: center;
  color: black;
`;


const Tagline = styled.h2`
  font-size: 5vw;
  text-align: center;
  color: black;
`;

const Sectionheader = styled.h2`
  font-size: 5vw;
  color: black;
  text-align: center;
  margins: 20px;

`;

const Description = styled.p`
  font-size: 3vw;
  text-align: center;
  padding:30px;
  color: black;
`;

const Portrait = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh; 
  width: 400px;
  height: 400px;
  border-radius: 50%;

  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
  width: 100px;
  height: 100px;
`}

${media.between("medium", "large")`
  /* screen width is between 768px (medium) and 1170px (large) */
  width: 200px;
  height: 200px;
`}


`;


 const Gitlogo = styled(Github)`
  color: ${icon_color};
  width: ${icon_width};
  height: ${icon_height};
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  
  

  ${media.between("small", "767px")`
  /* screen width is less than 768px (medium) */
  display: block;
  width: ${icon_width_medium};
  height: ${icon_height_medium};


`}

${media.between("767px", "large")`
  /* screen width is between 767px (medium) and 1170px (large) */
  width: ${icon_width_medium};
  height: ${icon_height_medium};
  margin-left: 30px;
  margin-right: 30px;
  
`}

${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
  transition: transform 300ms ease-in-out;
 
  &:hover {
    transform: translateY(-50px);
  }
`}


  font-weight: ${props => (props.important ? 'bold' : 'normal')}`;
  
  
  const Linkedinlogo = styled(Linkedin)`
  color: ${icon_color};
  width: ${icon_width};
  height: ${icon_height};
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  

  ${media.between("small", "767px")`
  /* screen width is less than 768px (medium) */
  display: block;
  width: ${icon_width_medium};
  height: ${icon_height_medium};


`}

${media.between("767px", "large")`
  /* screen width is between 767px (medium) and 1170px (large) */
  width: ${icon_width_medium};
  height: ${icon_height_medium};
  margin-left: 30px;
  margin-right: 30px;
  
`}

${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
  transition: transform 300ms ease-in-out;
 
  &:hover {
    transform: translateY(-50px);
  }
`}
  font-weight: ${props => (props.important ? 'bold' : 'normal')}`;

  const Emailicon = styled(Envelope)`
  color: ${icon_color};
  width: ${icon_width};
  height: ${icon_height};
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
 

  ${media.between("small", "767px")`
  /* screen width is less than 768px (medium) */
  display: block;
  width: ${icon_width_medium};
  height: ${icon_height_medium};


`}

${media.between("767px", "large")`
  /* screen width is between 767px (medium) and 1170px (large) */
  width: ${icon_width_medium};
  height: ${icon_height_medium};
  margin-left: 30px;
  margin-right: 30px;
  
`}

${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
  transition: transform 300ms ease-in-out;
 
  &:hover {
    transform: translateY(-50px);
  }
`}


  font-weight: ${props => (props.important ? 'bold' : 'normal')}`;



const Intro = () => {
    return(

        <div id="Intro">
        <Page>
        <Portrait src={profile}/>
            <Title>Hello, I'm Luis!</Title>
            <Tagline>Software Engineer | Data Scientist | Economist | Researcher</Tagline>

            <div id="Links">
            <Wrapper>
            <a href="https://github.com/phillykid"><Gitlogo/></a>
            <a href="https://www.linkedin.com/in/phillycoder/"><Linkedinlogo/></a>
            <a href="mailto:lopezl@lafayette.edu"><Emailicon/></a>
            </Wrapper>

            </div>

            <div id="About">
            <Sectionheader> About</Sectionheader>
           <Description>A multilingual senior at Lafayette College majoring in Computer Science and Economics with 
             a Financial Analysis and Policy certificate. Interested in software engineering, web development, 
             data analysis, stocks, financial markets, and machine learning. Seeking job opportunities starting Summer 2019.  </Description>

            </div>


            </Page>

        </div>
    )
}

export default Intro

