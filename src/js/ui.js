/**
 * UI Module
 * Handles all UI updates and DOM manipulations
 */

import { CIRCLE_CIRCUMFERENCE } from './config.js';

export class UIManager {
  constructor(elements) {
    this.elements = elements;
  }

  updateTimer(timeLeft, isRunning, modeLabel) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (this.elements.timerDisplay) {
      this.elements.timerDisplay.textContent = formattedTime;
    }
    
    document.title = isRunning 
      ? `${formattedTime} - ${modeLabel}` 
      : 'Focus Timer - Pomodoro';
  }

  updateProgressRing(timeLeft, totalTime) {
    if (!this.elements.progressCircle) return;
    
    const progress = (totalTime - timeLeft) / totalTime;
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progress);
    this.elements.progressCircle.style.strokeDashoffset = offset;
    
    this.ensureGradient();
  }

  ensureGradient() {
    if (document.querySelector('#gradient')) return;
    
    const svg = document.querySelector('.progress-ring');
    if (!svg) return;
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.style.stopColor = '#ff6b6b';
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.style.stopColor = '#ff8787';
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
  }

  updateStartButton(isRunning) {
    const { startBtn, startIcon } = this.elements;
    if (!startBtn) return;
    
    if (isRunning) {
      startBtn.classList.add('running');
      if (startIcon) startIcon.textContent = '⏸';
      const startText = startBtn.querySelector('.btn-text');
      if (startText) startText.textContent = 'Pause';
    } else {
      startBtn.classList.remove('running');
      if (startIcon) startIcon.textContent = '▶';
      const startText = startBtn.querySelector('.btn-text');
      if (startText) startText.textContent = 'Start';
    }
  }

  updateTimerClass(isRunning) {
    if (!this.elements.timerDisplay) return;
    
    if (isRunning) {
      this.elements.timerDisplay.classList.add('running');
    } else {
      this.elements.timerDisplay.classList.remove('running');
    }
  }

  updateModeButtons(activeMode) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    
    const activeBtn = document.getElementById(activeMode);
    if (activeBtn) {
      activeBtn.classList.add('active');
      activeBtn.setAttribute('aria-selected', 'true');
    }
  }

  updateSessionLabel(label) {
    if (this.elements.sessionLabel) {
      this.elements.sessionLabel.textContent = label;
    }
  }

  updateStats(sessions, totalMinutes) {
    if (this.elements.sessionsCount) {
      this.elements.sessionsCount.textContent = sessions;
    }
    
    if (this.elements.totalTimeDisplay) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      this.elements.totalTimeDisplay.textContent = hours > 0 
        ? `${hours}h ${minutes}m` 
        : `${minutes}m`;
    }
  }

  addShakeAnimation() {
    const timerCard = document.querySelector('.timer-card');
    if (timerCard) {
      timerCard.classList.add('shake');
      setTimeout(() => timerCard.classList.remove('shake'), 500);
    }
  }

  initializeProgressRing() {
    if (this.elements.progressCircle) {
      this.elements.progressCircle.style.strokeDasharray = CIRCLE_CIRCUMFERENCE;
      this.elements.progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
    }
  }
}
