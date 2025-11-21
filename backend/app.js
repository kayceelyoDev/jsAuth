require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');

// --- THIS WAS MISSING ---
const app = express();
// ------------------------

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.use('/auth', authRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});