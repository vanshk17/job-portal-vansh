🚀 Job Portal Web Application (MERN Stack)
A full-featured Job Portal web application where job seekers can register, apply for jobs, and track their applications, while recruiters can post and manage job listings. Built using the MERN Stack and structured for real-world deployment.

<img width="1440" alt="459928026-815dda0d-bf71-41ec-829c-1826abd02559" src="https://github.com/user-attachments/assets/b0ac27eb-8866-4fcd-bef2-9c1917fc43b8" />
🛠️ Tech Stack
💻 Frontend
React.js – UI framework

React Router – Client-side routing

Axios – For API calls

Tailwind CSS / Bootstrap / CSS Modules – Styling (based on preference)

🌐 Backend
Node.js – JavaScript runtime

Express.js – Backend framework

Mongoose – ODM for MongoDB

JWT – Authentication

Bcrypt.js – Password hashing

🛢️ Database
MongoDB Atlas or Local MongoDB

🔧 Development Tools
VS Code – Code editor

Postman – API testing

Nodemon – Auto-reloads backend server

dotenv – Manage environment variables

📁 Folder Structure
pgsql
Copy
Edit
job-portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── .env
├── README.md
✅ Features
👤 Job Seekers
Register/Login

View job listings

Apply to jobs

Track application status

🏢 Recruiters
Create and manage job listings

View applicants

Update/delete job posts

🔒 Authentication & Authorization
JWT-based secure login

Password hashing with Bcrypt

Role-based protected routes

🚦 Getting Started
📦 Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run dev
Create a .env file inside /backend:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
🌐 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Make sure to update API endpoints in your frontend to match the backend routes:

bash
Copy
Edit
http://localhost:5000/api/...
📈 Future Enhancements
✅ Resume upload (via Cloudinary)

✅ Admin dashboard for platform metrics

✅ Email notifications for job applications

✅ Search and filters (by role, experience, location)

📌 License
This project is open-source and available under the MIT License.
<img width="1440" alt="459928191-f40e68d1-9e7d-4acf-8a02-3275a11addcd" src="https://github.com/user-attachments/assets/8636c884-b56b-4cbd-97d8-c9e4d20bb5f3" />

