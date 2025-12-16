/* ============================================
   POMODORO TIMER - ENHANCED FUNCTIONALITY
   Human-Centered Design with Professional UX
   ============================================ */

// Timer State
let interval = null;
let timeLeft = 1500;
let totalTime = 1500;
let currentMode = ''pomodoro'';
let isRunning = false;

// Statistics (stored in localStorage)
let completedSessions = parseInt(localStorage.getItem(''sessions'') || ''0'');
let totalMinutes = parseInt(localStorage.getItem(''totalMinutes'') || ''0'');

// Timer Configurations
const MODES = {
  pomodoro: { 
    time: 1500, 
    label: ''Focus Session'',
    color: ''#ff6b6b''
  },
  ''short-break'': { 
    time: 300, 
    label: ''Short Break'',
    color: ''#4ecdc4''
  },
  ''long-break'': { 
    time: 900, 
    label: ''Long Break'',
    color: ''#51cf66''
  }
};

// Progress Circle Configuration
const CIRCLE_RADIUS = 120;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

// DOM Elements - will be initialized after DOM loads
let startBtn, resetBtn, timerDisplay, sessionLabel, startIcon;
let pomodoroBtn, shortBreakBtn, longBreakBtn;
let progressCircle, sessionsCount, totalTimeDisplay, soundToggle;

/* ============================================
   AUDIO FEEDBACK
   ============================================ */

function playSound(frequency = 440, duration = 200, type = ''sine'') {
  if (!soundToggle || !soundToggle.checked) return;
  
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  } catch (e) {
    console.log(''Audio not supported'');
  }
}

function playStartSound() {
  playSound(523.25, 150);
}

function playStopSound() {
  playSound(392, 150);
}

function playCompleteSound() {
  setTimeout(() => playSound(523.25, 200), 0);
  setTimeout(() => playSound(659.25, 200), 200);
  setTimeout(() => playSound(783.99, 400), 400);
}

/* ============================================
   NOTIFICATION SYSTEM
   ============================================ */

function requestNotificationPermission() {
  if (''Notification'' in window && Notification.permission === ''default'') {
    Notification.requestPermission();
  }
}

function showNotification(title, body) {
  if (''Notification'' in window && Notification.permission === ''granted'') {
    new Notification(title, {
      body: body,
      icon: ''data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"%23ff6b6b\"/></svg>'',
      badge: ''data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"%23ff6b6b\"/></svg>''
    });
  }
}

/* ============================================
   TIMER FUNCTIONS
   ============================================ */

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, ''0'')}:${seconds.toString().padStart(2, ''0'')}`;
  
  if (timerDisplay) timerDisplay.textContent = formattedTime;
  document.title = isRunning ? `${formattedTime} - ${MODES[currentMode].label}` : ''Focus Timer - Pomodoro'';
  
  updateProgressRing();
}

function updateProgressRing() {
  if (!progressCircle) return;
  
  const progress = (totalTime - timeLeft) / totalTime;
  const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
  progressCircle.style.strokeDashoffset = offset;
  
  if (!document.querySelector(''#gradient'')) {
    const defs = document.createElementNS(''http://www.w3.org/2000/svg'', ''defs'');
    const gradient = document.createElementNS(''http://www.w3.org/2000/svg'', ''linearGradient'');
    gradient.setAttribute(''id'', ''gradient'');
    gradient.setAttribute(''x1'', ''0%'');
    gradient.setAttribute(''y1'', ''0%'');
    gradient.setAttribute(''x2'', ''100%'');
    gradient.setAttribute(''y2'', ''100%'');
    
    const stop1 = document.createElementNS(''http://www.w3.org/2000/svg'', ''stop'');
    stop1.setAttribute(''offset'', ''0%'');
    stop1.style.stopColor = ''#ff6b6b'';
    
    const stop2 = document.createElementNS(''http://www.w3.org/2000/svg'', ''stop'');
    stop2.setAttribute(''offset'', ''100%'');
    stop2.style.stopColor = ''#ff8787'';
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    document.querySelector(''.progress-ring'').appendChild(defs);
  }
}

function startTimer() {
  if (isRunning) {
    stopTimer();
    return;
  }
  
  isRunning = true;
  playStartSound();
  
  if (startBtn) startBtn.classList.add(''running'');
  if (startIcon) startIcon.textContent = '''';
  const startText = startBtn ? startBtn.querySelector(''.btn-text'') : null;
  if (startText) startText.textContent = ''Pause'';
  if (timerDisplay) timerDisplay.classList.add(''running'');
  
  requestNotificationPermission();
  
  interval = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft === 0) {
      completeSession();
    }
  }, 1000);
}

function stopTimer() {
  isRunning = false;
  clearInterval(interval);
  interval = null;
  
  playStopSound();
  
  if (startBtn) startBtn.classList.remove(''running'');
  if (startIcon) startIcon.textContent = '''';
  const startText = startBtn ? startBtn.querySelector(''.btn-text'') : null;
  if (startText) startText.textContent = ''Start'';
  if (timerDisplay) timerDisplay.classList.remove(''running'');
}

function resetTimer() {
  stopTimer();
  timeLeft = MODES[currentMode].time;
  totalTime = MODES[currentMode].time;
  updateDisplay();
  
  if (progressCircle) {
    progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
  }
}

function completeSession() {
  stopTimer();
  playCompleteSound();
  
  const timerCard = document.querySelector(''.timer-card'');
  if (timerCard) {
    timerCard.classList.add(''shake'');
    setTimeout(() => timerCard.classList.remove(''shake''), 500);
  }
  
  const modeConfig = MODES[currentMode];
  showNotification(''Timer Complete!'', `Your ${modeConfig.label.toLowerCase()} is finished. Great job!`);
  
  if (currentMode === ''pomodoro'') {
    completedSessions++;
    totalMinutes += 25;
    localStorage.setItem(''sessions'', completedSessions.toString());
    localStorage.setItem(''totalMinutes'', totalMinutes.toString());
    updateStats();
  }
  
  if (currentMode === ''pomodoro'') {
    const nextMode = completedSessions % 4 === 0 ? ''long-break'' : ''short-break'';
    setTimeout(() => setMode(nextMode), 1000);
  } else {
    setTimeout(() => setMode(''pomodoro''), 1000);
  }
}

function setMode(mode) {
  currentMode = mode;
  const config = MODES[mode];
  
  timeLeft = config.time;
  totalTime = config.time;
  if (sessionLabel) sessionLabel.textContent = config.label;
  
  document.querySelectorAll(''.mode-btn'').forEach(btn => {
    btn.classList.remove(''active'');
    btn.setAttribute(''aria-selected'', ''false'');
  });
  
  const activeBtn = document.getElementById(mode);
  if (activeBtn) {
    activeBtn.classList.add(''active'');
    activeBtn.setAttribute(''aria-selected'', ''true'');
  }
  
  stopTimer();
  updateDisplay();
  
  if (progressCircle) {
    progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
  }
}

function updateStats() {
  if (sessionsCount) sessionsCount.textContent = completedSessions;
  
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  if (totalTimeDisplay) {
    if (hours > 0) {
      totalTimeDisplay.textContent = `${hours}h ${minutes}m`;
    } else {
      totalTimeDisplay.textContent = `${minutes}m`;
    }
  }
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

function attachEventListeners() {
  if (startBtn) startBtn.addEventListener(''click'', startTimer);
  if (resetBtn) resetBtn.addEventListener(''click'', resetTimer);
  if (pomodoroBtn) pomodoroBtn.addEventListener(''click'', () => setMode(''pomodoro''));
  if (shortBreakBtn) shortBreakBtn.addEventListener(''click'', () => setMode(''short-break''));
  if (longBreakBtn) longBreakBtn.addEventListener(''click'', () => setMode(''long-break''));
  
  document.addEventListener(''keydown'', (e) => {
    if (e.code === ''Space'' && e.target.tagName !== ''INPUT'') {
      e.preventDefault();
      startTimer();
    } else if (e.code === ''KeyR'' && e.ctrlKey) {
      e.preventDefault();
      resetTimer();
    }
  });
}

/* ============================================
   INITIALIZATION
   ============================================ */

function initialize() {
  // Get DOM elements
  startBtn = document.getElementById(''start'');
  resetBtn = document.getElementById(''reset'');
  timerDisplay = document.getElementById(''timer'');
  sessionLabel = document.getElementById(''session-label'');
  startIcon = document.getElementById(''start-icon'');
  pomodoroBtn = document.getElementById(''pomodoro'');
  shortBreakBtn = document.getElementById(''short-break'');
  longBreakBtn = document.getElementById(''long-break'');
  progressCircle = document.getElementById(''progress-circle'');
  sessionsCount = document.getElementById(''sessions-count'');
  totalTimeDisplay = document.getElementById(''total-time'');
  soundToggle = document.getElementById(''sound-toggle'');
  
  if (!startBtn || !resetBtn || !timerDisplay) {
    console.error(''Required DOM elements not found'');
    return;
  }
  
  attachEventListeners();
  updateStats();
  
  if (progressCircle) {
    progressCircle.style.strokeDasharray = CIRCLE_CIRCUMFERENCE;
    progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
  }
  
  updateDisplay();
  
  console.log('' Pomodoro Timer initialized successfully!'');
  console.log('' Keyboard shortcuts: Space = Start/Pause, Ctrl+R = Reset'');
}

if (document.readyState === ''loading'') {
  document.addEventListener(''DOMContentLoaded'', initialize);
} else {
  initialize();
}
