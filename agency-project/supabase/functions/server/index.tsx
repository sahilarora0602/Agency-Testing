import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a6644f88/health", (c) => {
  return c.json({ status: "ok" });
});

// Quiz Submission Endpoint
app.post("/make-server-a6644f88/submit-quiz", async (c) => {
  try {
    const data = await c.req.json();
    const leadId = `lead:${Date.now()}:${Math.random().toString(36).substring(7)}`;
    
    // Store in KV
    await kv.set(leadId, data);
    
    // In a real scenario, we would trigger an email automation here
    console.log(`[Automation] PDF generation triggered for lead: ${data.email}`);
    console.log(`[Automation] Email sequence scheduled for: ${data.email}`);
    
    return c.json({ 
      success: true, 
      message: "Quiz submitted and automation triggered",
      leadId 
    });
  } catch (err) {
    console.error("Error submitting quiz:", err);
    return c.json({ success: false, error: "Failed to submit quiz" }, 500);
  }
});

Deno.serve(app.fetch);