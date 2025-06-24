const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  teacherId: { type: String, required: true },
  studentId: { type: String, required: true },
  lessonId: { type: String, required: true },
  status: { type: String, default: 'incomplete' },
  assignedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
