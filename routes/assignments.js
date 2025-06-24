const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Assign a lesson
router.post('/assignments', async (req, res) => {
  try {
    const { teacherId, studentId, lessonId } = req.body;
    const assignment = new Assignment({ teacherId, studentId, lessonId });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to assign lesson' });
  }
});

// Get incomplete lessons for a student
router.get('/students/:id/assignments', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.query;
    const filter = { studentId: id };
    if (status) filter.status = status;
    const assignments = await Assignment.find(filter);
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch assignments' });
  }
});

// Mark lesson as complete
router.patch('/assignments/:id/complete', async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Assignment.findByIdAndUpdate(
      id,
      { status: 'complete' },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Assignment not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark complete' });
  }
});

// View assignment status by teacher
router.get('/teachers/:id/assignments/status', async (req, res) => {
  try {
    const { id } = req.params;
    const assignments = await Assignment.find({ teacherId: id });
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teacher assignments' });
  }
});

module.exports = router;
