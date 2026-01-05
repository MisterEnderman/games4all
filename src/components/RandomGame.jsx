import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFetchGames } from '../hooks/useFetchGames'

const RandomGame = () => {
    const { games, isLoading, error } = useFetchGames();
    const navigate = useNavigate();

    const ids = useMemo(() => {
        if (!games) return [];
        const allIds = games.map(game => game.id);
        return allIds;
    }, [games]);

    const randomGame = () => {
        const randomNumber = Math.round(Math.random() * ids.length);
        navigate(`/game/${ids[randomNumber]}`);
    }

    return (
        <p onClick={randomGame} className='pointer'>
            <div>🎲RANDOM GAME🎮</div>
        </p>
    )
}

export default RandomGame