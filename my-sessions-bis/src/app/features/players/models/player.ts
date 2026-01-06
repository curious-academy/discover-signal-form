import { required, schema } from "@angular/forms/signals";

export interface Player {
  id: string;
  name: string;
  avatarUrl?: string;
}

export function createEmptyPlayer(): Player {
  return {
    id: '',
    name: '',
    avatarUrl: ''
  };
}

export const playerSchema = schema<Player>(user => {
  required(user.name)
})
