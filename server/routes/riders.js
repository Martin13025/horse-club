const express = require('express');
const router = express.Router();
const Rider = require('../models/Rider');

router.get('/', async (req,res)=>{
  const list = await Rider.find();
  res.json(list);
});

router.post('/', async (req,res)=>{
  const rider = new Rider(req.body);
  await rider.save();
  res.status(201).json(rider);
});

router.get('/:id', async (req,res)=>{
  const rider = await Rider.findById(req.params.id);
  if (!rider) return res.status(404).json({ message: 'Not found' });
  res.json(rider);
});

router.put('/:id', async (req,res)=>{
  const rider = await Rider.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(rider);
});

router.delete('/:id', async (req,res)=>{
  await Rider.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
