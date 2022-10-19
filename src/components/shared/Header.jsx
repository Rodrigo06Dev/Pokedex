import React from 'react'
import './styles/header.css'

export const Header = ({switchTheme,theme}) => {
    return (
        <header className='header__shared' >
            <div className='header__red' >
                <img className='pokedexred__img' src='./images/pokedex/pokedexred.jpg' alt='pokedex' />
                <div className='header__black' ></div>
                <div className='header__circle' >
                    <div className='header__circle-int' >
                        <button className='header__btn' onClick={switchTheme}>
                            {theme}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
