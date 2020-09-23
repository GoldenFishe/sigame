import {Request, Response} from "express";

export const getGames = async (req: Request, res: Response): Promise<void> => {
    res.send(200);
};

export const getGame = async (req: Request, res: Response): Promise<void> => {
    res.send(200);
};

export const createGame = async (req: Request, res: Response): Promise<void> => {
    res.send(200);
};