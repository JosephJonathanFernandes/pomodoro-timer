# API Documentation

## Timer Class API

### PomodoroTimer

Main timer class that manages the Pomodoro timer logic.

#### Constructor

```javascript
new PomodoroTimer(elements)
```

**Parameters:**
- `elements` (Object): DOM element references

**Example:**
```javascript
const timer = new PomodoroTimer({
  startBtn: document.getElementById('start'),
  resetBtn: document.getElementById('reset'),
  // ... other elements
});
```

#### Methods

##### `start()`
Starts or pauses the timer.

```javascript
timer.start();
```

##### `stop()`
Stops the timer.

```javascript
timer.stop();
```

##### `reset()`
Resets the timer to the current mode's duration.

```javascript
timer.reset();
```

##### `setMode(mode)`
Changes the timer mode.

**Parameters:**
- `mode` (String): One of 'pomodoro', 'short-break', 'long-break'

```javascript
timer.setMode('short-break');
```

##### `initialize()`
Initializes the timer and UI.

```javascript
timer.initialize();
```

---

## Storage Manager API

### StorageManager

Manages localStorage operations for statistics.

#### Methods

##### `getSessions()`
Returns the number of completed sessions.

```javascript
const sessions = storage.getSessions();
```

##### `getTotalMinutes()`
Returns total minutes tracked.

```javascript
const minutes = storage.getTotalMinutes();
```

##### `incrementSession()`
Increments session count and returns new value.

```javascript
const newCount = storage.incrementSession();
```

##### `addMinutes(minutes)`
Adds minutes to total and returns new value.

```javascript
const newTotal = storage.addMinutes(25);
```

---

## Audio Manager API

### AudioManager

Manages sound effects using Web Audio API.

#### Constructor

```javascript
new AudioManager(soundToggle)
```

**Parameters:**
- `soundToggle` (HTMLElement): Checkbox element for sound toggle

#### Methods

##### `playStartSound()`
Plays the start sound effect.

```javascript
audio.playStartSound();
```

##### `playStopSound()`
Plays the stop sound effect.

```javascript
audio.playStopSound();
```

##### `playCompleteSound()`
Plays the completion melody.

```javascript
audio.playCompleteSound();
```

---

## UI Manager API

### UIManager

Handles all UI updates and DOM manipulations.

#### Constructor

```javascript
new UIManager(elements)
```

#### Methods

##### `updateTimer(timeLeft, isRunning, modeLabel)`
Updates the timer display.

**Parameters:**
- `timeLeft` (Number): Seconds remaining
- `isRunning` (Boolean): Timer running state
- `modeLabel` (String): Current mode label

##### `updateProgressRing(timeLeft, totalTime)`
Updates the progress ring.

**Parameters:**
- `timeLeft` (Number): Seconds remaining
- `totalTime` (Number): Total seconds for mode

##### `updateStats(sessions, totalMinutes)`
Updates session statistics display.

**Parameters:**
- `sessions` (Number): Completed sessions
- `totalMinutes` (Number): Total tracked minutes

##### `addShakeAnimation()`
Adds shake animation to timer card.

```javascript
ui.addShakeAnimation();
```

---

## Notification Manager API

### NotificationManager

Handles browser notifications.

#### Methods

##### `requestPermission()`
Requests notification permission from user.

```javascript
notifications.requestPermission();
```

##### `show(title, body)`
Shows a notification.

**Parameters:**
- `title` (String): Notification title
- `body` (String): Notification body

```javascript
notifications.show('Timer Complete!', 'Great job!');
```

---

## Configuration

### MODES

Timer mode configurations.

```javascript
{
  pomodoro: { time: 1500, label: 'Focus Session' },
  'short-break': { time: 300, label: 'Short Break' },
  'long-break': { time: 900, label: 'Long Break' }
}
```

### Constants

```javascript
CIRCLE_RADIUS = 120
CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS
```

---

## Events

### Keyboard Shortcuts

- `Space` - Start/Pause timer
- `Ctrl + R` - Reset timer

### Button Events

All buttons use click event listeners attached in `main.js`.
