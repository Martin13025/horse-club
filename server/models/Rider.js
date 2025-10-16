const mongoose = require('mongoose');
const RiderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String
}, { timestamps: true });
module.exports = mongoose.model('Rider', RiderSchema);
