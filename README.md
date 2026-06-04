# MAGESH.L :: Portfolio OS
### Hacker Terminal Aesthetic Portfolio

---

## 📁 File Structure

```
magesh-portfolio/
├── index.html       ← Frontend (open directly in browser)
├── style.css        ← Stylesheet (hacker OS theme)
├── backend.js       ← Node.js + Express API server
├── package.json     ← Backend dependencies
└── README.md
```

---

## 🚀 Running the Project

### Frontend Only (no backend needed)
Simply open `index.html` in any modern browser.
The frontend uses local data fallback when the API is offline.

### Full Stack (Frontend + Backend)

1. **Install backend dependencies:**
   ```bash
   npm install
   ```

2. **Start the API server:**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```
   Server runs at: `http://localhost:3000`

3. **Open the frontend:**
   Open `index.html` in your browser.
   The site will auto-detect the API and switch to ONLINE mode.

---

## 🔌 API Endpoints

| Method | Route              | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/ping          | Health check            |
| GET    | /api/portfolio     | Full portfolio data     |
| GET    | /api/meta          | Profile meta info       |
| GET    | /api/skills        | All skills              |
| GET    | /api/skills?category=TECH | Filtered skills  |
| GET    | /api/experience    | Work experience         |
| GET    | /api/education     | Education records       |
| GET    | /api/publications  | Research publications   |
| GET    | /api/patents       | Patent records          |
| GET    | /api/certifications| Certifications          |
| POST   | /api/terminal      | Terminal command runner |
| POST   | /api/contact       | Contact form submission |

---

## 🎨 Design System

- **Theme:** Hacker OS / Terminal Aesthetic
- **Fonts:** JetBrains Mono · Bebas Neue · Oxanium
- **Palette:**
  - Neon Green: `#00ff41`
  - Cyan: `#00e5ff`
  - Amber: `#ffb700`
  - Background: `#050709`

---

## 🖥 Terminal Commands (in /terminal section)

| Command            | Output                             |
|--------------------|------------------------------------|
| `help`             | List all commands                  |
| `whoami`           | Profile summary                    |
| `ls skills/`       | List skill directories             |
| `cat patent.txt`   | Patent info                        |
| `ping linkedin.com`| LinkedIn connection status         |
| `status --system`  | Fun system status                  |
| `pwd`              | Current directory                  |
| `date`             | Current date/time                  |
| `uname`            | OS info                            |
| `clear`            | Clear terminal                     |

---

Built with ❤️ for Magesh.L — CSE Student, AI Researcher, Patent Holder
"# Magesh-portfolio" 
