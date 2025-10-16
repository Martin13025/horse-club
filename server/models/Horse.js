const mongoose = require('mongoose');
const HorseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: String,
  age: Number,
  level: { type: String, enum: ['Beginner','Intermediate','Advanced'], default: 'Beginner' },
  available: { type: Boolean, default: true },
  photoUrl: String
}, { timestamps: true });
module.exports = mongoose.model('Horse', HorseSchema);
