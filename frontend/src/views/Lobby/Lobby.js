import React, {useState} from 'react';

import GamesList from "./components/GamesList/GamesList";
import GameDetails from "./components/GameDetails/GameDetails";
import CreateGameForm from "./components/CreateGameForm/CreateGameForm";
import css from './style.module.css';

const Lobby = () => {
    const [selectedGame, selectGame] = useState(null);
    return (
        <div>
            <GamesList selectedGame={selectedGame}
                       onSelectGame={selectGame}/>
            {selectedGame ?
                <GameDetails game={selectedGame}/> :
                <CreateGameForm/>}

        </div>
    );
};

export default Lobby;