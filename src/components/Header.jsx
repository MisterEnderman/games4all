import React from 'react'
import { Link } from 'react-router-dom'
import RandomGame from './RandomGame'

const Header = () => {
    return (
        <header>
            <RandomGame />
            <Link to='/'>
                <h1>GAMES<span>4</span>ALL</h1>
            </Link>
            <Link to='/about'>ABOUT ME</Link>
        </header>
    )
}

export default Header