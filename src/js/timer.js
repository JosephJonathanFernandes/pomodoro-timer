/**
 * Timer Core Module
 * Main timer logic and state management
 */

import { MODES } from './config.js';
import { AudioManager } from './audio.js';
import { NotificationManager } from './notifications.js';
import { StorageManager } from './storage.js';
import { UIManager } from './ui.js';

export class PomodoroTimer {
  constructor(elements) {
    this.elements = elements;
    this.ui = new UIManager(elements);
    this.audio = new AudioManager(elements.soundToggle);
    this.notifications = new NotificationManager();
    this.storage = new StorageManager();
    
    // Timer state
    this.interval = null;
    this.timeLeft = MODES.pomodoro.time;
    this.totalTime = MODES.pomodoro.time;
    this.currentMode = 'pomodoro';
    this.isRunning = false;
    
    // Load statistics
    this.completedSessions = this.storage.getSessions();
    this.totalMinutes = this.storage.getTotalMinutes();
  }

  start() {
    if (this.isRunning) {
      this.stop();
      return;
    }
    
    this.isRunning = true;
    this.audio.playStartSound();
    this.ui.updateStartButton(true);
    this.ui.updateTimerClass(true);
    this.notifications.requestPermission();
    
    this.interval = setInterval(() => {
      this.timeLeft--;
      this.updateDisplay();
      
      if (this.timeLeft === 0) {
        this.complete();
      }
    }, 1000);
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.interval = null;
    
    this.audio.playStopSound();
    this.ui.updateStartButton(false);
    this.ui.updateTimerClass(false);
  }

  reset() {
    this.stop();
    this.timeLeft = MODES[this.currentMode].time;
    this.totalTime = MODES[this.currentMode].time;
    this.updateDisplay();
  }

  complete() {
    this.stop();
    this.audio.playCompleteSound();
    this.ui.addShakeAnimation();
    
    const modeConfig = MODES[this.currentMode];
    this.notifications.show(
      'Timer Complete!',
      `Your ${modeConfig.label.toLowerCase()} is finished. Great job!`
    );
    
    if (this.currentMode === 'pomodoro') {
      this.completedSessions = this.storage.incrementSession();
      this.totalMinutes = this.storage.addMinutes(25);
      this.ui.updateStats(this.completedSessions, this.totalMinutes);
    }
    
    const nextMode = this.currentMode === 'pomodoro'
      ? (this.completedSessions % 4 === 0 ? 'long-break' : 'short-break')
      : 'pomodoro';
    
    setTimeout(() => this.setMode(nextMode), 1000);
  }

  setMode(mode) {
    this.currentMode = mode;
    const config = MODES[mode];
    
    this.timeLeft = config.time;
    this.totalTime = config.time;
    
    this.ui.updateSessionLabel(config.label);
    this.ui.updateModeButtons(mode);
    
    this.stop();
    this.updateDisplay();
  }

  updateDisplay() {
    this.ui.updateTimer(this.timeLeft, this.isRunning, MODES[this.currentMode].label);
    this.ui.updateProgressRing(this.timeLeft, this.totalTime);
  }

  initialize() {
    this.ui.initializeProgressRing();
    this.ui.updateStats(this.completedSessions, this.totalMinutes);
    this.updateDisplay();
  }
}
