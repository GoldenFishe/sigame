import {Request, Response} from "express";
import {
    getAllGames,
    getGameById,
    insertGame,
    setCurrentActiveQuestion,
    setCurrentActivePlayer,
    setAnswer,
    correctAnswer,
    incorrectAnswer
} from "../models/game";

export const getGames = async (req: Request, res: Response): Promise<void> => {
    const games = await getAllGames();
    res.send(games);
};

export const getGame = async (req: Request, res: Response): Promise<void> => {
    const id = Number.parseInt(req.params.id);
    const [game] = await getGameById(id);
    res.send(game);
};

export const createGame = async (req: Request, res: Response): Promise<void> => {
    const {title}: { title: string } = req.body;
    const [game] = await insertGame(title);
    res.send(game);
};

export const selectQuestion = async (req: Request, res: Response): Promise<void> => {
    const {questionId, gameId}: { questionId: number, gameId: number } = req.body;
    const [game] = await setCurrentActiveQuestion(questionId, gameId);
    res.send(game);
};

export const selectPlayer = async (req: Request, res: Response): Promise<void> => {
    const {playerId, gameId}: { playerId: number, gameId: number } = req.body;
    const [game] = await setCurrentActivePlayer(playerId, gameId);
    res.send(game);
};

export const answer = async (req: Request, res: Response): Promise<void> => {
    const {answer, gameId}: { answer: string, gameId: number } = req.body;
    const [game] = await setAnswer(answer, gameId);
    res.send(game);
};

export const revise = async (req: Request, res: Response): Promise<void> => {
    const {isCorrectAnswer, gameId, points}: { isCorrectAnswer: boolean, gameId: number, points: number } = req.body;
    const [game] = isCorrectAnswer ?
        await correctAnswer(points, gameId) :
        await incorrectAnswer(points, gameId);
    res.send(game);
};