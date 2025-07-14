import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

const musicOptions = [
  'Bollywood',
  'Indian Classical',
  'Punjabi',
  'Tamil',
  'Telugu',
  'Indie/Alternative',
  'Ghazal',
  'Folk',
  'Other',
];

const foodOptions = [
  'Biryani',
  'Dosa',
  'Chole Bhature',
  'Butter Chicken',
  'Rogan Josh',
  'Pani Puri',
  'Paneer Tikka',
  'Samosa',
  'Other',
];

const movieOptions = [
  'Bollywood',
  'Tollywood',
  'Kollywood',
  'Art House',
  'Classic Hindi',
  'Malayalam Cinema',
  'Blockbusters',
  'Other',
];

const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Jaipur',
];

export default function TasteProfileForm() {
  const [form, setForm] = useState({
    music: '',
    customMusic: '',
    food: '',
    customFood: '',
    movie: '',
    customMovie: '',
    city: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use custom value if 'Other' is selected
    const data = {
      music: form.music === 'Other' ? form.customMusic : form.music,
      food: form.food === 'Other' ? form.customFood : form.food,
      movie: form.movie === 'Other' ? form.customMovie : form.movie,
      city: form.city,
    };
    alert(JSON.stringify(data, null, 2));
    // Here you would send the data to your backend
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', mt: 5 }}
    >
      <FormControl required>
        <InputLabel>Favorite Music</InputLabel>
        <Select
          name="music"
          value={form.music}
          label="Favorite Music"
          onChange={handleChange}
        >
          {musicOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {form.music === 'Other' && (
        <TextField
          label="Enter your favorite music"
          name="customMusic"
          value={form.customMusic}
          onChange={handleChange}
          required
        />
      )}
      <FormControl required>
        <InputLabel>Favorite Food</InputLabel>
        <Select
          name="food"
          value={form.food}
          label="Favorite Food"
          onChange={handleChange}
        >
          {foodOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {form.food === 'Other' && (
        <TextField
          label="Enter your favorite food"
          name="customFood"
          value={form.customFood}
          onChange={handleChange}
          required
        />
      )}
      <FormControl required>
        <InputLabel>Favorite Movie</InputLabel>
        <Select
          name="movie"
          value={form.movie}
          label="Favorite Movie"
          onChange={handleChange}
        >
          {movieOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {form.movie === 'Other' && (
        <TextField
          label="Enter your favorite movie"
          name="customMovie"
          value={form.customMovie}
          onChange={handleChange}
          required
        />
      )}
      <FormControl required>
        <InputLabel>City</InputLabel>
        <Select
          name="city"
          value={form.city}
          label="City"
          onChange={handleChange}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}