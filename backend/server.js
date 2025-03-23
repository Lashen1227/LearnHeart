const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path');
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Create HTTP Server and WebSocket
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173", 
      "https://learnheart.vercel.app", 
      "https://learnheart-git-deployment-lashens-projects.vercel.app", 
      "https://learnheart-1l82xvys9-lashens-projects.vercel.app", 
      "https://learnheart-r66nw2b17-lashens-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  }
});

// WebSocket Connection
io.on('connection', (socket) => {
  console.log(`🔵 User Connected: ${socket.id}`);

  socket.on('message', (data) => {
    console.log(`📩 Message from ${socket.id}:`, data);
    io.emit('message', data); // Broadcast message to all clients
  });

  socket.on('disconnect', () => {
    console.log(`🔴 User Disconnected: ${socket.id}`);
  });
});

// CORS Middleware
const allowedOrigins = [
  "http://localhost:5173", 
  "https://learnheart.vercel.app",
  "https://learnheart-git-deployment-lashens-projects.vercel.app",
  "https://learnheart-1l82xvys9-lashens-projects.vercel.app",
  "https://learnheart-r66nw2b17-lashens-projects.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Database connected'))
  .catch(err => console.log('❌ Database not connected:', err));

// Routes
const organizationRoutes = require('./routes/organizationRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const seminarRoutes = require('./routes/seminarRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const postRoutes = require('./routes/postRoute');
const resourceRoutes = require('./routes/resourceRoutes');
const pastEventRoutes = require('./routes/pastEventRoutes');

app.use('/api/organizations', organizationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/seminars', seminarRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/past-events', pastEventRoutes);

// Start Server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
