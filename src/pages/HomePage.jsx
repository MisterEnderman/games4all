import React, { useMemo, useState } from 'react'
import Title from '../components/Title'
import Carousel from '../components/Carousel'
import GameList from '../components/GameList'
import { useFetchGames } from '../hooks/useFetchGames'

const HomePage = () => {
    const { games, isLoading, error } = useFetchGames();
    const [limit, setLimit] = useState(4);
    const [category, setCategory] = useState("");

    const filteredGames = useMemo(() => {
        if (!category || category === "") return games;

        return games.filter((game) => game.genre === category);
    }, [category, games]);

    if (isLoading) {
        return <h1>LOADING...</h1>
    }
    if (error) {
        return <h1>ERROR: {error.message}</h1>
    }

    const handleToggleGames = () => {
        if (category) {
            setCategory('');
            setLimit(4);
            return;
        }

        if (limit === games.length) {
            setLimit(4);
        } else {
            setLimit(games.length);
        }
    };

    return (
        <main className='center'>
            <Title>Free-to-play {category} Games</Title>
            <Carousel games={games} setCategory={setCategory} setLimit={setLimit} />
            <GameList games={filteredGames} limit={limit} />

            {
                games && games.length > 4 &&
                (
                    <button onClick={handleToggleGames}>
                        {category || limit !== games.length ?
                            'SHOW ALL GAMES' : 'SHOW LESS'
                        }
                    </button>
                )
            }
        </main >
    )
}

export default HomePage