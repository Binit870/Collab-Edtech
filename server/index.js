// Import core dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import DB connection and routes
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import mentorRoutes from './routes/mentorRoutes.js';

dotenv.config(); // Load environment variables from .env

connectDB(); // Connect to MongoDB

const app = express();

// Enable CORS to allow frontend requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// ROUTES
// Auth Routes - Register/Login
app.use('/api/auth', authRoutes);

// User-related routes (e.g., profile, settings)
app.use('/api/users', userRoutes);

// Project-related routes (e.g., create/join projects)
app.use('/api/projects', projectRoutes);

// Mentor-related routes (e.g., mentor discovery)
app.use('/api/mentors', mentorRoutes);

// Default route for sanity check
app.get('/', (req, res) => res.send('API is running...'));

// Start server on defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
