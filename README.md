🚀 Job Portal Web Application (MERN Stack)
A full-featured Job Portal web application where job seekers can register, apply for jobs, and track their applications, while recruiters can post and manage job listings. Built using the MERN stack and structured for real-world deployment.

🛠️ Tech Stack
💻 Frontend
React.js – UI framework
React Router – client-side routing
Axios – for API calls
Tailwind CSS / Bootstrap / CSS Modules – styling (choose based on your usage)
🌐 Backend
Node.js – JavaScript runtime
Express.js – backend framework
Mongoose – ODM for MongoDB
JWT – authentication
Bcrypt.js – password hashing
🛢️ Database
MongoDB Atlas / Local MongoDB
🔧 Dev Tools
VS Code – code editor
Postman – API testing
Nodemon – auto-reload backend
dotenv – manage environment variables
📁 Folder Structure
job-portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
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
Protected routes based on roles
🚦 Getting Started
📦 Backend Setup
cd backend
npm install
npm run dev
Create a .env file in /backend:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
🌐 Frontend Setup
cd frontend
npm install
npm start
Update API endpoints in your frontend to match backend routes (http://localhost:5000/api/...).

📈 Future Enhancements
Resume upload (via Cloudinary)
Admin dashboard for monitoring platform metrics
Email notifications on job applications
Search & filters by role, experience, location
Screenshot 2025-06-27 at 5 29 04 PM Screenshot 2025-06-27 at 5 29 33 PM
About
job-portal-pp-front.vercel.app/
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Report repository
Releases
No releases published
Packages
No packages published
Deployments
50
 Production – job-portal-pp 2 weeks ago
 Production – job-portal-latest 2 weeks ago
 Production last month
+ 47 deployments
Languages
JavaScript
98.8%
 
Other
1.2%
Footer
