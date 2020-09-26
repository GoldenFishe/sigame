import {Request, Response} from "express";
import {appendPlayerToGame, getAllPlayers, getPlayerById, insertPlayer} from '../models/player';
import {Role} from "../enums/Role";

export const getPlayers = async (req: Request, res: Response): Promise<void> => {
    const players = await getAllPlayers();
    res.send(players);
};

export const getPlayer = async (req: Request, res: Response): Promise<void> => {
    const id = Number.parseInt(req.params.id);
    const [player] = await getPlayerById(id);
    res.send(player);
};

export const createPlayer = async (req: Request, res: Response): Promise<void> => {
    const {name, role}: { name: string, role: keyof typeof Role } = req.body;
    const [player] = await insertPlayer(name, role);
    res.send(player);
};

export const joinGame = async (req: Request, res: Response): Promise<void> => {
    const {playerId, gameId}: { playerId: number, gameId: number } = req.body;
    const [player] = await appendPlayerToGame(playerId, gameId);
    res.send(player);
};