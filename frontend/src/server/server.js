// server/server.js
import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch"; // remove this line if using Node 18+ and built-in fetch
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const TMDB_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE = process.env.TMDB_BASE_URL || "https://api.themoviedb.org/3";

if (!TMDB_KEY) {
  console.error("TMDB_API_KEY not set in .env");
  process.exit(1);
}

// Basic rate limiter: 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Simple in-memory cache for popular movies (ttl 60s)
let popularCache = { ts: 0, data: null, ttl: 60 * 1000 };

app.get("/api/popular", async (req, res) => {
  try {
    const now = Date.now();
    if (popularCache.data && now - popularCache.ts < popularCache.ttl) {
      return res.json(popularCache.data);
    }

    const url = `${TMDB_BASE}/movie/popular?api_key=${TMDB_KEY}`;
    const r = await fetch(url);
    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status).send(text);
    }
    const json = await r.json();
    // cache the results
    popularCache = { ts: now, data: json, ttl: 60 * 1000 };
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: "Missing q query parameter" });

    // encode query and forward to TMDB
    const url = `${TMDB_BASE}/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(q)}`;
    const r = await fetch(url);
    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status).send(text);
    }
    const json = await r.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
});
