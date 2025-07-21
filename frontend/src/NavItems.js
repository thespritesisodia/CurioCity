import React from 'react';
import { Box, Typography } from '@mui/material';

const navItems = ['Home', 'Cities', 'Foods', 'Drinks', 'Diary', 'About Us'];

export default function NavItems() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      {navItems.map((item) => (
        <Typography
          key={item}
          sx={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', cursor: 'pointer', letterSpacing: 1 }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
} 