#  V-School API - Lesson Assignment System



## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- REST API

---

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vschool-api.git
   cd vschool-api
   npm install

   npm run dev


1. Assign a Lesson
POST /api/assignments

Request Body:


{
  "teacherId": "t123",
  "studentId": "s456",
  "lessonId": "l789"
}
Response:

{
  "_id": "assignmentId",
  "teacherId": "t123",
  "studentId": "s456",
  "lessonId": "l789",
  "status": "incomplete",
  "assignedAt": "2025-06-24T12:00:00Z"
}

GET /api/students/s456/assignments?status=incomplete

PATCH /api/assignments/60dcb457abc1234567890/complete

GET /api/teachers/t123/assignments/status
