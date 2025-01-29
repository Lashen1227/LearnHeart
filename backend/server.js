const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const PORT = 3001;

const organizationRoutes = require('./routes/organizationRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const seminarRoutes = require('./routes/seminarRoutes');

// Middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

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
