import express, {Express} from "express";
import http from "http";
import bodyParser from "body-parser";
import socket, {Namespace, Server, Socket} from "socket.io";

import {createGame, getGame, getGames} from "./controllers/game";
import {createPlayer, getPlayer, getPlayers} from "./controllers/player";

const PORT: number | string = process.env.POR || 8080;
const app: Express = express();
const server = http.createServer(app);
const io: Server = socket(server, {cookie: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/games', getGames);
app.get('/api/game/:id', getGame);
app.post('/api/game/create', createGame);

app.get('/api/players', getPlayers);
app.get('/api/player/:id', getPlayer);
app.post('/api/player/create', createPlayer);

server.listen(PORT, () => console.log(`Server is listening port ${PORT}`));
