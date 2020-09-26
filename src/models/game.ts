import {query} from "../utils/db";
import {Game} from "../interfaces/Game";
import {getPlayerById} from "./player";

export const getAllGames = (): Promise<Game[]> => {
    return query(`SELECT * FROM games`);
};

export const getGameById = (id: number): Promise<Game[]> => {
    return query(`SELECT * FROM games WHERE id = ${id}`);
};

export const insertGame = (title: string): Promise<Game[]> => {
    return query(`INSERT INTO games (title) VALUES ('${title}') RETURNING *`);
};

export const setCurrentActiveQuestion = (questionId: number, gameId: number): Promise<Game[]> => {
    return query(`UPDATE games SET current_active_question_id = ${questionId} WHERE id = ${gameId} RETURNING *`);
};

export const setCurrentActivePlayer = (playerId: number, gameId: number): Promise<Game[]> => {
    return query(`UPDATE games SET current_active_player_id = ${playerId} WHERE id = ${gameId} RETURNING *`);
};

export const setAnswer = (answer: string, gameId: number): Promise<Game[]> => {
    return query(`UPDATE games SET answer = '${answer}' WHERE id = ${gameId} RETURNING *`);
};

export const correctAnswer = async (points: number, gameId: number): Promise<Game[]> => {
    const [game] = await getGameById(gameId);
    if (game.current_active_player_id) {
        query(`UPDATE players SET points += ${points} WHERE id = ${game.current_active_player_id} RETURNING *`)
    }
    return query(`UPDATE games SET answer = null, current_active_question_id = null WHERE id = ${gameId} RETURNING *`);
};

export const incorrectAnswer = async (points: number, gameId: number): Promise<Game[]> => {
    const [game] = await getGameById(gameId);
    if (game.current_active_player_id) {
        query(`UPDATE players SET points -= ${points} WHERE id = ${game.current_active_player_id} RETURNING *`)
    }
    return query(`UPDATE games SET answer = null, current_active_player_id = null WHERE id = ${gameId} RETURNING *`);
};
