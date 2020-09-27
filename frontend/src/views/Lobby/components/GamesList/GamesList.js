import React, {useEffect, useState} from 'react';

const GamesList = ({selectedGame, onSelectGame}) => {
    const [games, setGamesList] = useState([]);
    useEffect(() => {
        fetch('/api/games').then(res => res.json()).then(setGamesList)
    }, []);
    return (
        <div>
            <ul>
                {games.map(game => {
                    return (
                        <li key={game.id}
                            style={{color: selectedGame && selectedGame.id === game.id ? 'green' : ''}}
                            onClick={() => onSelectGame(game)}>
                            {game.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default GamesList;