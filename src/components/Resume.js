import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SchoolIcon from '@mui/icons-material/School';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SwipeUpAltIcon from '@mui/icons-material/SwipeUpAlt';

const strengths = [
  {
    title: 'Responsibility',
    icon: <CheckCircleIcon fontSize="large" />,
    description: 'Always committed to delivering tasks on time and with high quality.',
  },
  {
    title: 'Teamwork',
    icon: <Diversity3Icon fontSize="large" />,
    description: 'Excellent at collaborating with others to achieve common goals.',
  },
  { 
    title: 'Creative',
    icon: <TipsAndUpdatesIcon fontSize="large" />,
    description: 'I like thinking outside the box and come up with innovative solutions.',
  },
  {
    title: 'Adaptability',
    icon: <ThumbUpIcon fontSize="large" />,
    description: 'Ready to face new challenges.',
  },
  {
    title: 'Resilience',
    icon: <SwipeUpAltIcon fontSize="large" />,
    description: 'Able to overcome obstacles and learn from failures.',
  },
  { 
    title: 'Always learning',
    icon: <SchoolIcon fontSize="large" />,
    description: 'I am constantly looking for new knowledge and skills to acquire.',
  }
];

const Resume = () => {
  return (
    <Box sx={{
      backgroundColor: '#1b1b1b',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: 4,
      overflow: 'hidden',
    }}>
      <Typography 
        variant="h3" 
        color="white" 
        sx={{ 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, 
          marginTop: { xs: 5, sm: 10 }, 
          textAlign: 'center' 
        }}
      >
        Describe yourself in a nutshell
      </Typography>
      
      <Grid 
        container 
        spacing={3} 
        mt={4} 
        justifyContent="center"
        sx={{
          maxWidth: '1200px', // Limitar el ancho para mejor visualización en pantallas grandes
        }}
      >
        {strengths.map((strength, index) => (
          <Grid 
            key={index} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card sx={{ 
              backgroundColor: '#242d3c', 
              color: 'white', 
              height: '250px', 
              width: '100%', 
              maxWidth: '250px', // Uniformar tamaño máximo
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 1.5 }}>{strength.icon}</Box>
                <Typography 
                  variant="h6" 
                  fontWeight="600" 
                  color="white" 
                  sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
                >
                  {strength.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.1rem' }, mt: 1 }}
                >
                  {strength.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resume;
