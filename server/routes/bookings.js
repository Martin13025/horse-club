const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Horse = require('../models/Horse');

router.get('/', async (req,res)=>{
  const list = await Booking.find().populate('horse rider');
  res.json(list);
});

router.post('/', async (req,res)=>{
  const { horse: horseId, rider: riderId, date, durationHours } = req.body;
  const horse = await Horse.findById(horseId);
  if (!horse) return res.status(400).json({ message: 'Horse not found' });
  if (!horse.available) return res.status(400).json({ message: 'Horse not available' });

  const booking = new Booking({ horse: horseId, rider: riderId, date, durationHours });
  await booking.save();

  horse.available = false;
  await horse.save();

  res.status(201).json(await booking.populate('horse rider'));
});

module.exports = router;
