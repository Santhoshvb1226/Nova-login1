
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow requests from the Vite frontend
app.use(cors({
  origin: [
    'http://localhost:5173',
    process.env.FRONTEND_URL
  ].filter(Boolean)
}));

// Read JSON data sent by the frontend
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'NOVA API is running!',
  });
});

// Login API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required.',
    });
  }

  // Demo credentials
  if (
    email === 'demo@nova.com' &&
    password === 'Nova123'
  ) {
    return res.json({
      success: true,
      message: 'Login successful!',
      user: { email },
    });
  }

  return res.status(401).json({
    message: 'Invalid email or password.',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`NOVA API running on port ${PORT}`);
});
