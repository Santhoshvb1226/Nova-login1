
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
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== "demo@nova.com" || password !== "123456") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login success" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));