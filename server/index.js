require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const horsesRouter = require('./routes/horses');
const ridersRouter = require('./routes/riders');
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/horse_club';
mongoose.connect(MONGO)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error('Mongo connect error', err));

app.use('/api/horses', horsesRouter);
app.use('/api/riders', ridersRouter);
app.use('/api/bookings', bookingsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
