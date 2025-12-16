/**
 * Main Application Entry Point
 * Initializes and coordinates all modules
 */

import { PomodoroTimer } from './timer.js';

class App {
  constructor() {
    this.timer = null;
    this.elements = {};
  }

  getDOMElements() {
    this.elements = {
      startBtn: document.getElementById('start'),
      resetBtn: document.getElementById('reset'),
      timerDisplay: document.getElementById('timer'),
      sessionLabel: document.getElementById('session-label'),
      startIcon: document.getElementById('start-icon'),
      pomodoroBtn: document.getElementById('pomodoro'),
      shortBreakBtn: document.getElementById('short-break'),
      longBreakBtn: document.getElementById('long-break'),
      progressCircle: document.getElementById('progress-circle'),
      sessionsCount: document.getElementById('sessions-count'),
      totalTimeDisplay: document.getElementById('total-time'),
      soundToggle: document.getElementById('sound-toggle')
    };

    // Validate required elements
    if (!this.elements.startBtn || !this.elements.resetBtn || !this.elements.timerDisplay) {
      throw new Error('Required DOM elements not found');
    }
  }

  attachEventListeners() {
    const { startBtn, resetBtn, pomodoroBtn, shortBreakBtn, longBreakBtn } = this.elements;
    
    if (startBtn) {
      startBtn.addEventListener('click', () => this.timer.start());
    }
    
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.timer.reset());
    }
    
    if (pomodoroBtn) {
      pomodoroBtn.addEventListener('click', () => this.timer.setMode('pomodoro'));
    }
    
    if (shortBreakBtn) {
      shortBreakBtn.addEventListener('click', () => this.timer.setMode('short-break'));
    }
    
    if (longBreakBtn) {
      longBreakBtn.addEventListener('click', () => this.timer.setMode('long-break'));
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        this.timer.start();
      } else if (e.code === 'KeyR' && e.ctrlKey) {
        e.preventDefault();
        this.timer.reset();
      }
    });
  }

  initialize() {
    try {
      this.getDOMElements();
      this.timer = new PomodoroTimer(this.elements);
      this.attachEventListeners();
      this.timer.initialize();
      
      console.log('✅ Pomodoro Timer initialized successfully!');
      console.log('⌨️ Shortcuts: Space = Start/Pause, Ctrl+R = Reset');
    } catch (error) {
      console.error('❌ Failed to initialize timer:', error);
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new App().initialize());
} else {
  new App().initialize();
}
