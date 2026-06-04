/**
 * MAGESH.L — Portfolio Backend API
 * Stack: Node.js + Express
 * Run: node backend.js
 * Serves: http://localhost:3000
 */

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ──────────────────────────────────────────────
// DATA STORE
// ──────────────────────────────────────────────

const portfolioData = {
  meta: {
    name: "Magesh .L",
    title: "CSE Student | AI & Data Analytics Researcher",
    subtitle: "Quantum Computing Enthusiast | Patent Holder | CSI Vice President",
    location: "Madurantakam, Tamil Nadu, India",
    email: "magimagesh333666@gmail.com",
    phone: "+91 9094854477",
    linkedin: "https://www.linkedin.com/in/magesh1718",
    status: "ONLINE",
    uptime: "99.97%",
  },

  summary:
    "BE student in Computer Science and Engineering at Karpaga Vinayaga College of Engineering and Technology. Passionate about technology, data analytics, AI research, and quantum computing. Active patent holder and CSI Vice President.",

  skills: [
    { id: "SK001", name: "Research Skills", level: 92, category: "CORE" },
    { id: "SK002", name: "Intellectual Property", level: 88, category: "CORE" },
    { id: "SK003", name: "Open Innovation", level: 85, category: "CORE" },
    { id: "SK004", name: "Data Science", level: 80, category: "TECH" },
    { id: "SK005", name: "Machine Learning", level: 78, category: "TECH" },
    { id: "SK006", name: "AI & Analytics", level: 82, category: "TECH" },
    { id: "SK007", name: "Quantum Computing", level: 70, category: "EMERGING" },
    { id: "SK008", name: "Python", level: 75, category: "LANG" },
    { id: "SK009", name: "Project Management", level: 83, category: "SOFT" },
  ],

  experience: [
    {
      id: "EX001",
      company: "SRI SAIRAM TECHNO INCUBATOR FOUNDATION",
      role: "Project Management Intern",
      period: "December 2025",
      duration: "1 month",
      location: "Tambaram",
      type: "INTERNSHIP",
    },
    {
      id: "EX002",
      company: "upSkill Campus",
      role: "Data Science and Machine Learning",
      period: "October 2025 – December 2025",
      duration: "3 months",
      location: "Remote",
      type: "TRAINING",
    },
  ],

  education: [
    {
      id: "ED001",
      institution: "Karpaga Vinayaga College of Engineering and Technology",
      degree: "Bachelor of Engineering – Computer Science Engineering",
      period: "August 2024 – April 2028",
      status: "IN_PROGRESS",
      cgpa: "ACTIVE",
    },
  ],

  certifications: [
    { id: "CE001", name: "World Entrepreneurship Day Certificate", issuer: "WED", year: 2025 },
    { id: "CE002", name: "Certificate of Presentation – The Electric Revolution", issuer: "Conference", year: 2025 },
  ],

  publications: [
    {
      id: "PB001",
      title: "E-Waste Management Through Innovative Coding Solutions",
      type: "RESEARCH",
      status: "PUBLISHED",
    },
    {
      id: "PB002",
      title: "The Electric Revolution",
      type: "PAPER",
      status: "PUBLISHED",
    },
  ],

  patents: [
    {
      id: "PT001",
      title: "Categorised Career Guidance Using Digital Platform for Educational Augmentation – Computer Science",
      status: "GRANTED",
      field: "EdTech / AI",
    },
  ],

  languages: [
    { name: "English", proficiency: "PROFESSIONAL" },
    { name: "Tamil", proficiency: "NATIVE" },
  ],

  terminal: {
    commands: [
      { cmd: "whoami", response: "magesh_l :: CSE Student | Researcher | Patent Holder" },
      { cmd: "ls skills/", response: "research/  ML/  AI/  quantum/  ip/  innovation/" },
      { cmd: "cat patent.txt", response: "Patent: Career Guidance via Digital Platform [GRANTED]" },
      { cmd: "ping linkedin.com", response: "64 bytes from linkedin.com: seq=0 ttl=64 time=1.2ms — CONNECTED" },
      { cmd: "status --system", response: "All systems nominal. Ambition: OVERCLOCKED. Caffeine: CRITICAL." },
    ],
  },
};

// ──────────────────────────────────────────────
// ROUTES
// ──────────────────────────────────────────────

// Health check
app.get("/api/ping", (req, res) => {
  res.json({ status: "ONLINE", timestamp: new Date().toISOString(), message: "Portfolio API running." });
});

// Full data dump
app.get("/api/portfolio", (req, res) => {
  res.json({ success: true, data: portfolioData });
});

// Meta info
app.get("/api/meta", (req, res) => {
  res.json({ success: true, data: portfolioData.meta });
});

// Skills
app.get("/api/skills", (req, res) => {
  const { category } = req.query;
  const skills = category
    ? portfolioData.skills.filter((s) => s.category === category.toUpperCase())
    : portfolioData.skills;
  res.json({ success: true, count: skills.length, data: skills });
});

// Experience
app.get("/api/experience", (req, res) => {
  res.json({ success: true, count: portfolioData.experience.length, data: portfolioData.experience });
});

// Education
app.get("/api/education", (req, res) => {
  res.json({ success: true, data: portfolioData.education });
});

// Publications
app.get("/api/publications", (req, res) => {
  res.json({ success: true, count: portfolioData.publications.length, data: portfolioData.publications });
});

// Patents
app.get("/api/patents", (req, res) => {
  res.json({ success: true, count: portfolioData.patents.length, data: portfolioData.patents });
});

// Certifications
app.get("/api/certifications", (req, res) => {
  res.json({ success: true, data: portfolioData.certifications });
});

// Terminal command simulator
app.post("/api/terminal", (req, res) => {
  const { command } = req.body;
  if (!command) return res.status(400).json({ error: "No command provided." });

  const known = portfolioData.terminal.commands.find(
    (c) => c.cmd.toLowerCase() === command.trim().toLowerCase()
  );

  if (known) {
    return res.json({ success: true, output: known.response });
  }

  // Dynamic fallback responses
  const fallbacks = {
    help: "Available: whoami | ls skills/ | cat patent.txt | ping linkedin.com | status --system | clear",
    clear: "__CLEAR__",
    pwd: "/home/magesh/portfolio",
    date: new Date().toString(),
    uname: "MageshOS v1.7.2 (Tamil Nadu) #AI-RESEARCH SMP",
  };

  const fb = fallbacks[command.trim().toLowerCase()];
  if (fb) return res.json({ success: true, output: fb });

  res.json({
    success: false,
    output: `bash: ${command}: command not found. Type 'help' for available commands.`,
  });
});

// Contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message" });
  }
  console.log(`[CONTACT] From: ${name} <${email}> — ${message}`);
  res.json({ success: true, message: "Message received. Magesh will respond shortly." });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found", available: "/api/portfolio | /api/skills | /api/experience | /api/patents | /api/terminal" });
});

// ──────────────────────────────────────────────
// START
// ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════╗
║   MAGESH.L :: PORTFOLIO BACKEND API      ║
║   Running on http://localhost:${PORT}       ║
║   Status: ONLINE                         ║
╚══════════════════════════════════════════╝
  `);
});

module.exports = app;
