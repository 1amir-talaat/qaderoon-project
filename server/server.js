const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const adminRoutes = require("./Routes/adminRoutes");
const articlesRoutes = require("./Routes/articlesRoutes");
const newsRoutes = require("./Routes/newsRoutes");
const authorRoutes = require("./Routes/authorRoutes");

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

app.use(cors((req, callback) => {
  const allowedOrigins = [
  'https://qyf-eg.org',
  'https://www.qyf-eg.org'
]; 
  const origin = req.header('Origin');
  
  if (allowedOrigins.includes(origin)) {
      callback(null, { origin: true });
  } else {
      callback(null, { origin: false });
  }
}));

app.use((req, res, next) => {
  const allowedReferer = 'https://qyf-eg.org';
  const referer = req.headers.referer || req.headers.origin;

  if (!referer || !referer.startsWith(allowedReferer)) {
      return res.status(403).json({ message: 'Forbidden: Invalid Referer' });
  }
  next();
});

app.use(express.json());
// to use anything in Public
app.use(express.static("Public"));
app.use("/imgs", express.static(path.join(__dirname, "Public/imgs")));

// to access routes
app.use("/articles", articlesRoutes);
app.use("/news", newsRoutes);
app.use("/authors", authorRoutes);
app.use("/admin", adminRoutes);

// if the database connection failed don't run the server
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(-1);
  });
