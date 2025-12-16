#  Focus Timer - Professional Pomodoro App

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**A beautiful, modular, and accessible Pomodoro Timer with modern architecture**

[Features](#-features)  [Demo](#-quick-start)  [Architecture](#-architecture)  [Contributing](#-contributing)

</div>

---

##  Overview

Focus Timer is a production-ready Pomodoro Timer built with vanilla JavaScript using ES6 modules, following best practices for code organization, accessibility, and user experience. The project demonstrates professional front-end development with a clean modular architecture.

###  Design Principles

- **Modular Architecture**: Separated concerns with ES6 modules
- **Human-Centered Design**: Intuitive interface with accessibility first
- **Progressive Enhancement**: Core functionality works, enhancements layer on top
- **Performance Focused**: Lightweight with no framework dependencies
- **Maintainable Code**: Well-documented, tested, and organized

---

##  Features

### Core Functionality
-  **Three Timer Modes**: Focus (25min), Short Break (5min), Long Break (15min)
-  **Smart Controls**: Start/Pause and Reset with keyboard shortcuts
-  **Auto-Switching**: Automatically suggests breaks after sessions

### User Experience
-  **Modern UI**: Gradient theme with smooth animations
-  **Progress Ring**: SVG-based visual countdown
-  **Audio Feedback**: Pleasant sounds for actions (Web Audio API)
-  **Notifications**: Browser notifications when timer completes
-  **Statistics**: Track sessions and total time (localStorage)
-  **Keyboard Shortcuts**: Space (start/pause), Ctrl+R (reset)

### Technical Features
-  **Modular Architecture**: ES6 modules for maintainability
-  **WCAG 2.1 Compliant**: Full accessibility support
-  **Responsive Design**: Works on all devices
-  **No Dependencies**: Pure vanilla JavaScript
-  **TypeScript Ready**: Easy to migrate to TypeScript

---

##  Architecture

### Project Structure

```
pomodoro-timer/
├── src/
│   ├── css/                   # Modular stylesheets
│   │   ├── variables.css      # Design tokens
│   │   ├── base.css           # Base styles
│   │   ├── components.css     # UI components
│   │   ├── animations.css     # Animations
│   │   ├── responsive.css     # Media queries
│   │   └── accessibility.css  # A11y styles
│   └── js/                    # JavaScript modules
│       ├── config.js          # Configuration
│       ├── audio.js           # Audio manager
│       ├── notifications.js   # Notification manager
│       ├── storage.js         # Storage manager
│       ├── ui.js              # UI manager
│       ├── timer.js           # Timer logic
│       └── main.js            # Entry point
├── docs/                      # Documentation
│   ├── ARCHITECTURE.md        # Architecture details
│   └── API.md                 # API documentation
├── .github/                   # GitHub templates
├── index.html                 # Main HTML
├── README.md                  # This file
├── CONTRIBUTING.md            # Contribution guide
├── LICENSE                    # MIT License
└── .gitignore                 # Git ignore
```

### Module Dependencies

```
main.js
  └── timer.js
       ├── config.js
       ├── audio.js
       ├── notifications.js
       ├── storage.js
       └── ui.js
```

See [Architecture Documentation](docs/ARCHITECTURE.md) for details.

---

##  Quick Start

### Prerequisites

**Required:**
- **Node.js** v22.21.1+ (or any modern version)
- **npm** v10.5.0 or v10.8.2 recommended
  - ⚠️ **Avoid npm v10.9.x** - has postinstall script bugs
- **Modern Browser** with ES6 module support (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)

**Environment Notes:**
- Project uses **Vite** v4.5.14 as dev server
- ES6 modules require proper module loading (local server or Vite)
- Windows users may need to run PowerShell with appropriate permissions

---

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/pomodoro-timer.git
cd pomodoro-timer
```

#### 2. Install Dependencies
```bash
npm install
```

**⚠️ Troubleshooting npm Issues:**

If you encounter `ERR_INVALID_ARG_TYPE` errors:

```bash
# Downgrade npm to a stable version
npm install -g npm@10.5.0

# Clear npm cache
npm cache clean --force

# Remove node_modules if corrupted
Remove-Item -Path node_modules -Recurse -Force  # Windows PowerShell
rm -rf node_modules                              # macOS/Linux

# Reinstall
npm install
```

**Common Issues:**
- **Locked node_modules folders**: Close all editors/terminals accessing the project, wait 10 seconds, then retry
- **Permission errors on Windows**: Run PowerShell as Administrator or use alternative shells
- **EPERM errors**: Some Windows system commands may be restricted; use direct Vite binary if needed

#### 3. Run Development Server

**Method 1: Using npm scripts (Recommended)**
```bash
npm run dev
```

**Method 2: Direct Vite binary (If npm scripts fail)**
```bash
.\node_modules\.bin\vite           # Windows
./node_modules/.bin/vite           # macOS/Linux
```

**Method 3: Python server (Fallback)**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

#### 4. Open in Browser

Once Vite starts, open:
```
http://localhost:5173
```

You should see:
```
VITE v4.5.14 ready
Local: http://localhost:5173/
```

---

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

Output will be in `dist/` folder.

---

##  Usage

### Basic Controls

| Action | Button | Keyboard |
|--------|--------|----------|
| Start/Pause |  Start | `Space` |
| Reset |  Reset | `Ctrl + R` |
| Switch Mode | Mode tabs | Click |

### Timer Modes

- **Focus** (25min): Deep work session
- **Short Break** (5min): Quick rest
- **Long Break** (15min): Extended rest after 4 sessions

### Features

1. **Session Tracking**: Automatically counts completed focus sessions
2. **Smart Breaks**: Suggests short break after each session, long break after 4
3. **Sound Effects**: Toggle audio feedback on/off
4. **Notifications**: Get alerted when timer completes (permission required)
5. **Persistent Stats**: Your progress is saved in localStorage

---

##  Development

### Environment Setup

**Tech Stack:**
- **Vite** v4.5.14 - Fast HMR and optimized builds
- **ES6 Modules** - Modern JavaScript module system
- **No Framework** - Pure vanilla JavaScript
- **LocalStorage** - Client-side persistence
- **Web Audio API** - Sound effects
- **Notifications API** - Browser notifications

**Development Server Features:**
- ⚡ Hot Module Replacement (HMR)
- 🔧 Error overlay in browser
- 📦 Automatic dependency resolution
- 🎯 TypeScript ready (can migrate easily)

### Known Issues & Solutions

#### Issue 1: npm v10.9.x Postinstall Bug
**Symptom:** `ERR_INVALID_ARG_TYPE: The "file" argument must be of type string`

**Cause:** npm v10.9.x has a bug with esbuild/rollup postinstall scripts

**Solution:**
```bash
npm install -g npm@10.5.0
# or
npm install -g npm@10.8.2
```

#### Issue 2: Corrupted node_modules
**Symptom:** `EPERM: operation not permitted, rmdir`

**Solution:**
```bash
# Close ALL editors, terminals, and IDEs
# Wait 10 seconds for file handles to release
Remove-Item -Path node_modules -Recurse -Force
npm cache clean --force
npm install
```

#### Issue 3: PowerShell Command Restrictions
**Symptom:** `cmd`, `robocopy`, `takeown` not recognized

**Cause:** Restricted PowerShell profile or execution policy

**Solution:** Use direct Node.js/npm commands or switch to Windows Terminal with full permissions

#### Issue 4: Vite Binary Not Found
**Symptom:** `npm run dev` fails but Vite is installed

**Solution:** Run Vite directly:
```bash
.\node_modules\.bin\vite  # Windows
./node_modules/.bin/vite  # macOS/Linux
```

### Code Style

- **JavaScript**: ES6+ with modules, JSDoc comments
- **CSS**: Modular with custom properties, BEM-inspired naming
- **HTML**: Semantic HTML5 with ARIA attributes

### Adding Features

1. **New Timer Mode**:
   - Add to `src/js/config.js` MODES
   - Update HTML with new button
   - Test UI updates

2. **New Audio Effect**:
   - Add method in `src/js/audio.js`
   - Call from appropriate timer event

3. **New Stat**:
   - Add storage methods in `src/js/storage.js`
   - Update UI display in `src/js/ui.js`

See [API Documentation](docs/API.md) for module APIs.

---

##  Project Configuration

### package.json Structure

```json
{
  "name": "pomodoro-timer",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.5.0"
  }
}
```

**Key Points:**
- `"type": "module"` - Enables ES6 modules
- `"private": true"` - Prevents accidental npm publish
- Vite scripts for dev, build, and preview

### Vite Configuration

No custom `vite.config.js` needed - uses defaults:
- Entry: `index.html`
- Base URL: `/`
- Port: `5173`
- HMR: Enabled
- Build output: `dist/`

### File Structure Requirements

```
pomodoro-timer/
├── index.html          # MUST be at root (Vite entry point)
├── package.json        # npm configuration
├── node_modules/       # Dependencies (git-ignored)
├── src/
│   ├── css/           # Stylesheets
│   └── js/            # JavaScript modules
└── dist/              # Production build output (git-ignored)
```

**Important:**
- `index.html` must import JS as `<script type="module">`
- CSS can be linked normally in HTML
- All JS files use `.js` extension
- Relative imports must include file extension

---

##  Testing

### Manual Testing Checklist

- [ ] All three modes work correctly
- [ ] Start/Pause toggles properly
- [ ] Reset returns to mode default
- [ ] Progress ring animates smoothly
- [ ] Audio plays on actions (if enabled)
- [ ] Notifications show on completion
- [ ] Stats update correctly
- [ ] Keyboard shortcuts work
- [ ] Responsive on mobile
- [ ] Accessible with keyboard
- [ ] Works in all major browsers

---

##  Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Steps

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code of Conduct

- Be respectful and inclusive
- Follow the code style
- Write clear commit messages
- Test your changes
- Update documentation

---

##  License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file.

---

##  Acknowledgments

- **Pomodoro Technique** by Francesco Cirillo
- **Inter Font** by Rasmus Andersson
- **Inspiration** from modern productivity tools
- **Community** for feedback and contributions

---

##  Troubleshooting Guide

### Installation Problems

| Error | Cause | Solution |
|-------|-------|----------|
| `ERR_INVALID_ARG_TYPE` | npm v10.9.x bug | Downgrade: `npm install -g npm@10.5.0` |
| `EPERM` on node_modules | File handles locked | Close all apps, wait 10s, retry |
| `Cannot find module` | Missing dependencies | Run `npm install` |
| `spawn cmd ENOENT` | Restricted shell | Use direct commands: `.\node_modules\.bin\vite` |
| Vite not found | Local install issue | Check `.\node_modules\.bin\vite --version` |

### Runtime Problems

| Issue | Possible Cause | Fix |
|-------|----------------|-----|
| Blank page | Module loading error | Check browser console, use local server |
| Timer doesn't start | JS error | Open DevTools console |
| No notifications | Permission denied | Enable in browser settings |
| No sound | Audio toggle off | Check sound toggle, browser autoplay policy |
| Stats not saving | localStorage disabled | Enable cookies/storage in browser |

### Environment Checks

**Verify Installation:**
```bash
node --version    # Should show v22.21.1 or similar
npm --version     # Should show v10.5.0 or v10.8.2
```

**Test Vite:**
```bash
.\node_modules\.bin\vite --version
# Should show: vite/4.5.14 win32-x64 node-v22.21.1
```

**Check Project Structure:**
```bash
ls index.html     # Must exist at root
ls src/js/main.js # Entry point
ls node_modules/vite  # Vite installed
```

### Getting Help

If issues persist:

1. **Check existing issues**: [GitHub Issues](https://github.com/yourusername/pomodoro-timer/issues)
2. **Create new issue** with:
   - Node/npm versions (`node -v`, `npm -v`)
   - Operating system
   - Full error message
   - Steps to reproduce
3. **Ask in discussions**: [GitHub Discussions](https://github.com/yourusername/pomodoro-timer/discussions)

---

##  Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/pomodoro-timer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/pomodoro-timer/discussions)
- **Email**: your.email@example.com

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ using the Pomodoro Technique

[ Back to top](#-focus-timer---professional-pomodoro-app)

</div>
