const express = require('express');
const { blogs } = require('./database/connection');
const blogRoutes = require('./Routes/blogsRoutes');
const cors = require('cors');
require('./database/connection');

const App = express();

// Middleware
App.use(express.json());

// ✅ Allow CORS from your Vercel frontend
App.use(cors({
  origin: "https://blog-management-system-frontend.vercel.app",
  credentials: true
}));

// API Routes
App.use("/", blogRoutes);

App.get("/lala", (req, res) => {
  res.send("Backend is working!");
});


// ✅ Use dynamic port for deployment
const PORT = process.env.PORT || 3500;
App.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
