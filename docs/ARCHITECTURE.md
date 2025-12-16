# Architecture Documentation

## Project Structure

```
pomodoro-timer/
├── .github/                    # GitHub configuration
│   └── ISSUE_TEMPLATE/        # Issue templates
├── src/                        # Source files
│   ├── css/                   # Stylesheets (modular)
│   │   ├── variables.css      # CSS custom properties
│   │   ├── base.css           # Base styles
│   │   ├── components.css     # Component styles
│   │   ├── animations.css     # Animations
│   │   ├── responsive.css     # Responsive design
│   │   └── accessibility.css  # Accessibility features
│   ├── js/                    # JavaScript modules
│   │   ├── config.js          # Configuration constants
│   │   ├── audio.js           # Audio manager
│   │   ├── notifications.js   # Notification manager
│   │   ├── storage.js         # LocalStorage manager
│   │   ├── ui.js              # UI manager
│   │   ├── timer.js           # Core timer logic
│   │   └── main.js            # Application entry point
│   └── assets/                # Static assets
├── docs/                       # Documentation
├── index.html                  # Main HTML file
├── README.md                   # Project documentation
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # MIT License
└── .gitignore                 # Git ignore file
```

## Module Architecture

### JavaScript Modules

#### 1. **config.js**
- Defines timer modes and constants
- Exports configuration objects
- No dependencies

#### 2. **storage.js** (StorageManager)
- Handles localStorage operations
- Manages session statistics
- Methods: getSessions(), getTotalMinutes(), incrementSession(), etc.

#### 3. **audio.js** (AudioManager)
- Manages sound effects using Web Audio API
- Methods: playStartSound(), playStopSound(), playCompleteSound()
- Requires soundToggle element

#### 4. **notifications.js** (NotificationManager)
- Handles browser notifications
- Methods: requestPermission(), show()
- Uses Notification API

#### 5. **ui.js** (UIManager)
- All DOM manipulations
- Updates timer display, progress ring, buttons, stats
- Methods: updateTimer(), updateProgressRing(), updateStats(), etc.

#### 6. **timer.js** (PomodoroTimer)
- Core timer logic and state management
- Coordinates all other modules
- Methods: start(), stop(), reset(), complete(), setMode()

#### 7. **main.js** (App)
- Application entry point
- Initializes all modules
- Attaches event listeners
- Handles keyboard shortcuts

### CSS Modules

#### 1. **variables.css**
- CSS custom properties (colors, spacing, typography)
- Single source of truth for design tokens

#### 2. **base.css**
- Reset styles and base layout
- Body and container styles

#### 3. **components.css**
- All component styles (card, buttons, timer, etc.)
- Largest CSS file

#### 4. **animations.css**
- Keyframe animations
- Animation classes

#### 5. **responsive.css**
- Media queries for mobile devices
- Responsive adjustments

#### 6. **accessibility.css**
- Focus states
- Reduced motion support
- Accessibility features

## Data Flow

```
User Action
    ↓
Event Listener (main.js)
    ↓
Timer Method (timer.js)
    ↓
├── UI Update (ui.js)
├── Audio Feedback (audio.js)
├── Storage Update (storage.js)
└── Notification (notifications.js)
```

## State Management

State is managed in the `PomodoroTimer` class:
- `timeLeft`: Current time remaining
- `totalTime`: Total time for current mode
- `currentMode`: Active timer mode
- `isRunning`: Timer running state
- `completedSessions`: Session count
- `totalMinutes`: Total tracked time

## Browser Compatibility

- **ES6 Modules**: Modern browsers only
- **Web Audio API**: Chrome 34+, Firefox 25+, Safari 14+
- **Notification API**: Chrome 22+, Firefox 22+, Safari 16+
- **CSS Grid**: Chrome 57+, Firefox 52+, Safari 10.1+

## Future Enhancements

1. Service Worker for offline support
2. Custom timer durations
3. Task management integration
4. Export statistics
5. Themes support
6. Multi-language support
