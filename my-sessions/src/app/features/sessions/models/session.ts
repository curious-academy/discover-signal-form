import { Player } from "./player";

// session of a game with many friends
export interface GameSession {
  id: string;
  name: string;
  description: string;
  date: Date;
  players: Player[];
  durationMinutes: number;
  notes: string;
}

export function createEmptySession(): GameSession {
  return {
    id: '',
    name: '',
    description: '',
    date: new Date(),
    players: [],
    durationMinutes: 0,
    notes: ''
  };
}
