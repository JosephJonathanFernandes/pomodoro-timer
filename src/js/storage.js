/**
 * Storage Module
 * Handles localStorage operations for statistics
 */

export class StorageManager {
  constructor() {
    this.SESSIONS_KEY = 'sessions';
    this.TOTAL_MINUTES_KEY = 'totalMinutes';
  }

  getSessions() {
    return parseInt(localStorage.getItem(this.SESSIONS_KEY) || '0');
  }

  getTotalMinutes() {
    return parseInt(localStorage.getItem(this.TOTAL_MINUTES_KEY) || '0');
  }

  saveSessions(count) {
    localStorage.setItem(this.SESSIONS_KEY, count.toString());
  }

  saveTotalMinutes(minutes) {
    localStorage.setItem(this.TOTAL_MINUTES_KEY, minutes.toString());
  }

  incrementSession() {
    const sessions = this.getSessions() + 1;
    this.saveSessions(sessions);
    return sessions;
  }

  addMinutes(minutes) {
    const total = this.getTotalMinutes() + minutes;
    this.saveTotalMinutes(total);
    return total;
  }
}
