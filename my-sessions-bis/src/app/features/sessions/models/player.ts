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
