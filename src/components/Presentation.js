"use client"

import { Box, Link, Typography, Button, IconButton, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { keyframes } from '@emotion/react';

const URL_CV_ENGLISH = 'files/CV_EN.pdf';
const URL_CV_SPANISH = 'files/CV_ES.pdf';

// Efecto de degradado animado
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Efecto de resplandor en el título
const glow = keyframes`
  0% { text-shadow: 0 0 5px #33C4FF, 0 0 10px #33C4FF, 0 0 20px #33C4FF; }
  50% { text-shadow: 0 0 10px #1E90FF, 0 0 20px #1E90FF, 0 0 30px #1E90FF; }
  100% { text-shadow: 0 0 5px #33C4FF, 0 0 10px #33C4FF, 0 0 20px #33C4FF; }
`;

const Presentation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(270deg, #1b1b1b, #333399, #333399, #1b1b1b)',
        backgroundSize: '400% 400%',
        animation: `${gradient} 15s ease infinite`,
        paddingX: 3,
        paddingY: 6,
        marginTop: '64px',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ color: 'white', zIndex: 2 }}
      >
        <Grid sx={{ textAlign: { xs: 'center', md: 'left' } }} size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              animation: `${glow} 2s ease-in-out infinite`,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
          >
            I&apos;m Juan Patricio
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, color: '#E0E0E0' }}>
            From Buenos Aires, Argentina 🇦🇷
          </Typography>
          <Typography variant="h5" sx={{ color: '#E0E0E0' }}>
            Software Engineer student at FIUBA
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, color: '#B0B0B0' }}>
            Looking for my first tech work experience
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              href={URL_CV_ENGLISH}
              target="_blank"
              download
            >
              Download CV (EN)
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DownloadIcon />}
              href={URL_CV_SPANISH}
              target="_blank"
              download
            >
              Descargar CV (ES)
            </Button>
          </Stack>
        </Grid>

        {/* Contactos a la derecha */}
        <Grid xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Typography variant="h6" sx={{ color: '#B0B0B0', mb: 2 }}>
            Contact Me
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}
          >
            <IconButton
              color="primary"
              href="https://wa.me/1130921112"
              target="_blank"
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              href="tel:+1130921112"
            >
              <PhoneIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com/in/Juan-Patricio-Amboage"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              href="mailto:jamboage@fi.uba.ar"
            >
              <MailIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Typography variant="h6" sx={{ mt: 2, color: '#B0B0B0' }}>
            If you are spanish speaker, you can also try my chatbot
            <Link href="https://juampiamboage.github.io/Chat-with-Juan/" target="_blank" color="primary" sx={{ display: 'block' }}>Chat with Juan</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Presentation;
