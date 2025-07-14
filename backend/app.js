require('dotenv').config();
const express = require('express');
const cors = require('cors');
const gptRoute = require('./routes/gpt');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/gpt', gptRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));