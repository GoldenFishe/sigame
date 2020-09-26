import {Role} from "../enums/Role";

export interface Player {
    id: number;
    name: string;
    role: keyof typeof Role,
    points: number | null;
    current_game_id: number | null;
}