import React from 'react';

const CreateGameForm = () => {
    const onSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Название игры <input type="text" name="title"/></label>
                <button type="submit">Создать игру</button>
            </form>
        </div>
    );
};

export default CreateGameForm;