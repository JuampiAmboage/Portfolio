//import styles from "./page.module.css";
import {Container } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Progress from '../components/Progress';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar position="fixed"/>
      <div id="presentation">
        <Presentation />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="progress">
        <Progress />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <Contact />
    
    </Container>
  );
}
