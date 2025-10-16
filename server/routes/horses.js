const express = require('express');
const router = express.Router();
const Horse = require('../models/Horse');

// list with optional level filter
router.get('/', async (req, res) => {
  const q = {};
  if (req.query.level) q.level = req.query.level;
  const list = await Horse.find(q);
  res.json(list);
});

// create
router.post('/', async (req, res) => {
  const horse = new Horse(req.body);
  await horse.save();
  res.status(201).json(horse);
});

// get
router.get('/:id', async (req, res) => {
  const horse = await Horse.findById(req.params.id);
  if (!horse) return res.status(404).json({ message: 'Not found' });
  res.json(horse);
});

// update
router.put('/:id', async (req, res) => {
  const horse = await Horse.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(horse);
});

// delete
router.delete('/:id', async (req, res) => {
  await Horse.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
