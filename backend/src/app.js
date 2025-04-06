// app.js
import express from "express";
import cors from "cors";
const app = express();

// Middlewares
app.use(express.json());
// amazonq-ignore-next-line
app.use(cors())

// Routes
import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);

// Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
