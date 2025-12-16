/**
 * Audio Module
 * Handles sound effects and audio feedback
 */

export class AudioManager {
  constructor(soundToggle) {
    this.soundToggle = soundToggle;
  }

  playSound(frequency = 440, duration = 200) {
    if (!this.soundToggle || !this.soundToggle.checked) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (e) {
      console.warn('Audio not supported');
    }
  }

  playStartSound() {
    this.playSound(523.25, 150); // C5
  }

  playStopSound() {
    this.playSound(392, 150); // G4
  }

  playCompleteSound() {
    setTimeout(() => this.playSound(523.25, 200), 0);    // C5
    setTimeout(() => this.playSound(659.25, 200), 200);  // E5
    setTimeout(() => this.playSound(783.99, 400), 400);  // G5
  }
}
