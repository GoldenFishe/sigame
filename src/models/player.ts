import {query} from "../utils/db";
import {Player} from "../interfaces/Player";
import {Role} from "../enums/Role";

export const getAllPlayers = (): Promise<Player[]> => {
    return query(`SELECT * FROM players`);
};

export const getPlayerById = (id: number): Promise<Player[]> => {
    return query(`SELECT * FROM players WHERE id = ${id}`);
};

export const insertPlayer = (name: string, role: keyof typeof Role): Promise<Player[]> => {
    return query(`INSERT INTO players (name, role) VALUES ('${name}', '${role}') RETURNING *`);
};

export const appendPlayerToGame = (playerId: number, gameId: number): Promise<Player[]> => {
    return query(`UPDATE players SET current_game_id = ${gameId} WHERE id = ${playerId} RETURNING *`);
};