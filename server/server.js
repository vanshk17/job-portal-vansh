import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webHooks.js';
import serverless from 'serverless-http';

const app = express();

Sentry.setupExpress(app);

// Middleware
app.use(cors());
app.use(express.json());

await connectDB();

// Debug logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('API Working');
});

app.get("/debug-sentry", (req, res) => {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhooks);

Sentry.setupExpressErrorHandler(app);

// ❌ DO NOT use `app.listen(...)` in Vercel

// ✅ Export the handler for Vercel
export const handler = serverless(app);
