{
  /*import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webHooks.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

await connectDB()

// Debug logger to check if requests are hitting the server
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// Routes
app.get('/', (req, res) => res.send("API Working"));

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhooks);




// Port
const PORT = process.env.PORT || 5001;
Sentry.setupExpressErrorHandler(app)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
*/}
// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import jobRoutes from './routes/jobs.js';
import clerkWebhooks from './controllers/clerk.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/jobs', jobRoutes);
app.post('/webhooks', clerkWebhooks);  // ✅ Corrected the route path (was './webhooks')

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ❌ Do NOT use app.listen() with Vercel — Vercel handles this
// ✅ Instead, export the app for Vercel to use
export default app;

