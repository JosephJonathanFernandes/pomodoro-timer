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

### Option 1: Direct Open
```bash
# Clone the repository
git clone https://github.com/yourusername/pomodoro-timer.git
cd pomodoro-timer

# Open index.html in browser
start index.html  # Windows
open index.html   # macOS
```

### Option 2: Local Server (Recommended for modules)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# Visit http://localhost:8000
```

### Browser Requirements
- Modern browser with ES6 module support
- Chrome 61+, Firefox 60+, Safari 11+, Edge 16+

---

##  Usage

### Basic Controls

| Action | Button | Keyboard |
|--------|--------|----------|
| Start/Pause |  Start | `Space` |
| Reset |  Reset | `Ctrl + R` |
| Switch Mode | Mode tabs | Click |

### Timer Modes

- ** Focus** (25min): Deep work session
- ** Short Break** (5min): Quick rest
- ** Long Break** (15min): Extended rest after 4 sessions

### Features

1. **Session Tracking**: Automatically counts completed focus sessions
2. **Smart Breaks**: Suggests short break after each session, long break after 4
3. **Sound Effects**: Toggle audio feedback on/off
4. **Notifications**: Get alerted when timer completes (permission required)
5. **Persistent Stats**: Your progress is saved in localStorage

---

##  Development

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

##  Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/pomodoro-timer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/pomodoro-timer/discussions)
- **Email**: your.email@example.com

---

<div align="center">

** Star this repo if you find it helpful!**

Made with  using the Pomodoro Technique

[ Back to top](#-focus-timer---professional-pomodoro-app)

</div>
