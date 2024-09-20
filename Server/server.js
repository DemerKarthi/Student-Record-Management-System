const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const PORT = 5000;
// Import routes
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use the user routes
app.use('/user', userRoutes);

// Create an HTTP server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
