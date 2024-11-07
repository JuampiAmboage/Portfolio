"use client"

import { Box, Typography, Card, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { keyframes } from '@emotion/react';
import { GiPresent } from "react-icons/gi";

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const gifts = [
  {
    title: 'Guaymallen',
    image: 'images/guaymallen.png',
  },
  {
    title: 'Cat with a hat picture',
    image: 'images/cat.png',
  },
  {
    title: 'Buzz Lightyear',
    image: 'images/buzzlightyear.png',
  },
  {
    title: 'Raygun',
    image: 'images/raygun.png',
  },
];

const Gifts = () => {
  const [selectedGift, setSelectedGift] = useState(null);

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
  };

  if (selectedGift) {
    return (
      <Box sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant="h6" color="white">Congratulations! You won a:</Typography>
        <Typography variant="h6" color="primary">{selectedGift.title}</Typography>
        <Card sx={{ maxWidth: 200, background: 'none', boxShadow: 'none', margin: 'auto', mt: 4 }}>
          <CardMedia
            component="img"
            image={selectedGift.image}
            alt={selectedGift.title}
            sx={{ height: 150, objectFit: 'contain' }}
          />
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: 'center', paddingX: 2 }}>
      <Typography variant="h6" color="primary" sx={{ mb: 3 }}>Before you go, pick a gift</Typography>
      <Grid container spacing={2} justifyContent="center" wrap="nowrap" sx={{ overflowX: 'auto', marginTop: 2 }}>
        {gifts.map((gift, index) => (
          <Grid  
            key={index} 
            sx={{
              width: { xs: '50px', sm: '60px', md: '70px', lg: '100px' }, // Ajusta el ancho en base a la pantalla
              flexShrink: 0, // Evita que los elementos se reduzcan
              display: 'flex', 
              justifyContent: 'center',
              backgroundColor: '#0d1b2a',
            }}
          >
            <Card 
              onClick={() => handleGiftClick(gift)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  animation: `${shake} 0.5s`,
                  animationIterationCount: 'infinite',
                },
                backgroundColor: '#0d1b2a',
                color: 'white',
                boxShadow: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <GiPresent size="100%" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gifts;
