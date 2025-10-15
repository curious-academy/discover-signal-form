import { Card } from "./card";
import { Player } from "./player";

// session of a game with many friends
export interface GameSession {
  id: string;
  name: string;
  description: string;
  date: Date;
  winnerId: number;
  players: number[];
  durationMinutes: number;
  notes: string;
  cardsUsed: Card[];
}

export function createEmptySession(): GameSession {
  return {
    id: '',
    name: '',
    description: '',
    date: new Date(),
    players: [],
    winnerId: 0,
    durationMinutes: 0,
    notes: '',
    cardsUsed: []
  };
}
