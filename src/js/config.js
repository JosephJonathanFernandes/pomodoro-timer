/**
 * Timer Configuration
 * Defines timer modes and settings
 */

export const MODES = {
  pomodoro: { 
    time: 1500, // 25 minutes
    label: 'Focus Session' 
  },
  'short-break': { 
    time: 300, // 5 minutes
    label: 'Short Break' 
  },
  'long-break': { 
    time: 900, // 15 minutes
    label: 'Long Break' 
  }
};

export const CIRCLE_RADIUS = 120;
export const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
