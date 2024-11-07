import { Box, Typography, Card, CardContent, CardMedia, IconButton, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WebIcon from '@mui/icons-material/Web';
import React from 'react';

const projects = [
  {
    title: 'My first web page',
    description: 'As a task for a web development course, I made my first web page using HTML, CSS and JavaScript.',
    second_description: 'Its a game where there is a form to guess the football team basing on some clues.',
    image: 'images/AdivinarEquipo.png',
    type: 'web',
  },
  {
    title: 'My first game',
    description: "My sister's birthday was coming up and I wanted to give her a kind of gift that only a programmer brother could create. So I made a simple game using Unity.",
    second_description: 'This is a nice town with hidden cats waiting to be caught.',
    image: 'images/Buscamichis.png',
    type: 'game',
  },
  {
    title: "Five Nights at Freddy's, but at my own house!",
    description: 'As in the real games, you are a guard officer (the office is at my room) and many creepy toys are trying to get you. Must check cams and survive until 6am.',
    second_description: 'This was my second game in Unity. As a fan of the FNAF saga, i had always wanted to make my own version of the game. While being a child it looked as impossible. Many years later, with the magic of programming, this turned to be real. This is the kind of reasons why I love what I do.',
    image: 'images/FNAC.png',
    type: 'game',
  },
  {
    title: 'Jazz Jackrabbit 2 Remake',
    description: 'A though one. For a college subject. No Unity this time, started on zero with C++ and SDL.',
    second_description: 'Check our project website: ',
    image: 'images/JazzJackrabbit2.png',
    link: 'https://juandelahd.github.io/JJ2-Website/',
    type: 'game, school',
  },
  {
    title: 'Club Atlético Huracan matches database (in progress)',
    description: 'As a huge fan of Huracan, I want to group all the information of the matches played by the club in a webpage.',
    second_description: 'Requires lot of investigation and data processing. Hoping to finish it during vacation.',
    image: 'images/Huracan.png',
    type: 'web',
  },
];



const getIcon = (type) => {
  switch (type) {
    case 'school':
      return <SchoolIcon />;
    case 'game':
      return <SportsEsportsIcon />;
    case 'web':
      return <WebIcon />;
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <Box
      textAlign="center"
      my={8}
      sx={{
        backgroundColor: '#1e2a38',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '64px 16px',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '2.25rem', sm: '2.5rem', md: '3rem', lg: '3.25rem' },
          fontWeight: 'bold',
          marginBottom: 2,
        }}
      >
        Have you made any projects?
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          marginBottom: 4,
        }}
      >
        Yeah! Let&apos;s take a quick look
      </Typography>
      <Grid justifyContent="center">
        {projects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4} sx={{ padding: 4 }}>
            <Card
              sx={{
                backgroundColor: '#242d3c',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  borderRadius: '4px 4px 0 0',
                }}
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'left', padding: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 2 }}>
                  {project.second_description}
                </Typography>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener" color="primary">
                    Project Link
                  </Link>
                )}
              </CardContent>
              <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
                {project.type.split(',').map((type, index) => (
                  <IconButton key={index} sx={{ color: 'white' }}>
                    {getIcon(type.trim())}
                  </IconButton>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
