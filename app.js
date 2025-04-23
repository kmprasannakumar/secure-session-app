// app.js
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const app = express();

dotenv.config(); // Load .env variables

// Middleware to parse JSON
app.use(express.json());

// Session Configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,            // Prevents client-side JS access
    secure: process.env.NODE_ENV === 'production', // True only in HTTPS
    maxAge: 1000 * 60 * 15     // 15 minutes
  }
}));

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/login', (req, res) => {
  req.session.user = 'Prasanna';
  res.send('User logged in!');
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome back, ${req.session.user}`);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('User logged out!');
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
