const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  horse: { type: mongoose.Schema.Types.ObjectId, ref: 'Horse', required: true },
  rider: { type: mongoose.Schema.Types.ObjectId, ref: 'Rider', required: true },
  date: { type: Date, required: true },
  durationHours: { type: Number, default: 1 },
  notes: String
}, { timestamps: true });
module.exports = mongoose.model('Booking', BookingSchema);
