import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import NavItems from './NavItems';

export default function LandingPage({ onGetStarted }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 70% 20%, #b388ff 0%, #512da8 40%, #0f2027 100%)',
      }}
    >
      {/* Top Navigation Bar with app name and nav items */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent', boxShadow: 'none', pt: 2 }}>
        <Toolbar sx={{ justifyContent: 'flex-start', gap: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 2,
              fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
              textShadow: '0 2px 16px rgba(81,45,168,0.25)',
            }}
          >
            CurioCity
          </Typography>
          <NavItems />
        </Toolbar>
      </AppBar>
      {/* Main Content - slightly downward for balance */}
      <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'flex-start', minHeight: '60vh', pt: 16 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', zIndex: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2, lineHeight: 1.1 }}>
            Discover India’s Culture<br />
            Through Your Taste
          </Typography>
          <Typography variant="h5" sx={{ color: '#e1bee7', mb: 4 }}>
            Get personalized city recommendations based on your favorite Indian music, food, and movies.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ px: 5, py: 1.5, fontSize: '1.2rem', borderRadius: 3, fontWeight: 600, bgcolor: '#fff', color: '#512da8', boxShadow: 4 }}
            onClick={onGetStarted}
          >
            Get Started
          </Button>
        </Box>
      </Container>
      {/* Glowing effect overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
          background: 'radial-gradient(circle at 70% 20%, rgba(179,136,255,0.25) 0%, rgba(81,45,168,0.15) 60%, transparent 100%)',
        }}
      />
    </Box>
  );
} 