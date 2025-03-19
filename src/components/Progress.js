"use client";

import { Box, Typography, LinearProgress, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState, useEffect, useRef } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const subjects = {
  approved: ['Algorithms and Data Structures', 'Algorithm Theory', 'Common basic cycle (CBC)', 'Computer Organization', 'Concurrent Programming Techniques', 'Databases', 'Data Science', 'Introduction to Software', 'Linear Algebra', 'Mathematical Analysis II', 'Networks', 'Operating Systems', 'Physics I', 'Programming Fundamentals', 'Programming Paradigms', 'Programming Workshop I', 'Software Engineering I', 'Technology-based Companies I'],
  inProgress: ['Automated Machine Learning','Numerical Modeling','Probability and Statistics','Software Engineering II','Technology-based Companies II'],
  pending: ['Cybersecurity Workshop', 'Distributed Systems', 'Computer Systems Development', 'Physics for Computer Scientists', '2 Electives', 'Thesis'],
};

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const progressRef = useRef(null);

  const startAnimation = () => {
    if (hasAnimated) return; 

    const targetProgress = 66;
    const duration = 1500; 
    const steps = 66; 
    const intervalTime = duration / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= targetProgress) {
        clearInterval(timer);
        setHasAnimated(true);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (!progressRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
        }
      },
      {
        threshold: 0.1, // La animación comenzará cuando el 10% del componente sea visible
        rootMargin: '50px', // Añade un margen para comenzar la animación un poco antes
      }
    );

    observer.observe(progressRef.current);

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Box ref={progressRef} sx={{
      backgroundColor: '#2a3b47',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: 4,
      overflow: 'hidden',
    }}>
      <Typography variant="h3" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, marginTop: 4 }}>
        What about your career?
      </Typography>
      <Box mt={3} width="90%">
        <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
          Ingeniería en Informática, Universidad de Buenos Aires
        </Typography>
        <LinearProgress variant="determinate" value={progress} color="primary" sx={{ mt: 2, height: 8, borderRadius: 1 }} />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}>
            {`${Math.round(progress)}% completed`}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' }, fontWeight: 600 }}>
            2026
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} mt={3} maxWidth={1200}>
        {['approved', 'inProgress', 'pending'].map((status, index) => {
          const icons = {
            approved: <CheckCircleIcon sx={{ position: 'absolute', top: 16, right: 16, color: 'green' }} aria-label="Approved" />,
            inProgress: <HourglassTopIcon sx={{ position: 'absolute', top: 16, right: 16, color: 'orange' }} aria-label="In Progress" />,
            pending: <HourglassBottomIcon sx={{ position: 'absolute', top: 16, right: 16, color: 'red' }} aria-label="Pending" />,
          };
          return (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ backgroundColor: '#1e2a38', color: 'white', height: '100%', position: 'relative' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                    {icons[status]}
                  </Typography>
                  {subjects[status].map((subject, i) => (
                    <Typography key={i} variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}>
                      {subject}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Progress;