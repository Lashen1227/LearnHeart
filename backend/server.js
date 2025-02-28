const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();
const PORT = 3003;

const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

const organizationRoutes = require('./routes/organizationRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const seminarRoutes = require('./routes/seminarRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const postRoutes = require('./routes/postRoute');
const resourceRoutes = require('./routes/resourceRoutes');
const eventRoutes = require("./routes/eventRoutes");



// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Serve uploaded PDF files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connecting database
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database not connected', err));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

// Routes
app.use('/api/organizations', organizationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/seminars', seminarRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/resources', resourceRoutes);
app.use("/api/events", eventRoutes);

