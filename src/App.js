import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import styled from 'styled-components';

import './App.css';



import ProjectList from './components/ProjectList';
import CourseList from './components/CourseList';
import LeadershipList from './components/LeadershipList';
import ExperienceList from './components/ExperienceList';
import PLanguageList from './components/P_LanguageList';





const Sectionheader = styled.h2`
font-size: 5vw;
color: black;
text-align: center;

`;

class App extends Component {


  render() {
    return (
      
      <div id="main">
        <NavBar/>
        <Intro/>
        <Sectionheader> Courses</Sectionheader>
        <CourseList/>
        <Sectionheader> Experience</Sectionheader>
        <ExperienceList />
        <Sectionheader> Leadership</Sectionheader>
        <LeadershipList />
        <Sectionheader> Skills</Sectionheader>
        <PLanguageList />
        <Sectionheader> Projects</Sectionheader>
        <ProjectList />
      </div>
    )
  }
}
export default App

