import React from 'react';

const GameDetails = ({game}) => {
    return (
        <div>
            <p>Название игры</p>
            <p>{game.title}</p>
        </div>
    );
};

export default GameDetails;