import React from 'react';
import { Box, Typography } from '@mui/material';
import Gifts from './Gifts';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: 'white',
        padding: '24px 0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom
                        sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}
    >
        That&apos;s it for now!
      </Typography>
      <Typography variant="h4" gutterBottom
                        sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
>
        Thanks for your visit
      </Typography>
      <Gifts/>

    </Box>
  );
};

export default Footer;

