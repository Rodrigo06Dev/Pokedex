import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/shared/Header'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import './styles/pokedexById.css'
import pokeBack from '../assets/pokeBack.png'

const PokedexById = ({switchTheme, theme}) => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }
  console.log(pokemon)
  const colorType= pokemon?.types[0].type.name

  return (
    <article className='byid' >
      <header>
      <Header 
          switchTheme={switchTheme}
          theme={theme}
          />
      </header>
      <div className="byid__back">
      <Link to='/pokedex'>
          <img src={pokeBack} alt="back" className="byid__back-image" />
      </Link>
      <p className="byid__back-text">BACK</p>
      </div>
      <main className='byid__main'>
        <section className='byid__section-1' >
          <div className={`byid__container-img bg-${colorType}`}>
            <img className='byid__img' src={pokemon?.sprites.other['official-artwork'].front_default} />
          </div>
          <div className={`byid__id letter-${colorType}`} >
            <p>#{pokemon?.id}</p>
          </div>
          <div className={`byid__name letter-${colorType}`}>
            <h2 className="byid__name-lines">{pokemon?.name}</h2>
          </div>
          <div className="p__container">
            <p className='byid__p'><span className='byid__p-span'>Weight</span>{pokemon?.weight}</p>
            <p className='byid__p'><span className='byid__p-span'>Height</span>{pokemon?.height}</p>
          </div>
          <div className="byid__list">
            <h4 className='byid__list-type'>Type</h4>
            <ul className='byid__ul-type'>
              {
                pokemon?.types.map(type => (
                  <li className={`byid__list-items bg-${type.type.name} item__type`}>{type.type.name}</li>
                ))
              }
            </ul>
            <h4 className='byid__list-abilities'>Abilities</h4>
            <ul className='byid__ul-abilities' >
              {
                pokemon?.abilities.map(ability => (
                  <li className='byid__list-items'>{ability.ability.name}</li>
                ))
              }
            </ul>
          </div>
          <h3 className='byid__stats'>Stats</h3>
          <ul className='byid__bar-progress'>
              {
                pokemon?.stats.map(stat => (  
                  <>             
                  <div className="progress__value">
                    <p>{stat.stat.name}</p>
                    <p>{`${stat.base_stat}/150`}</p>
                  </div>                
                  <li className="progress">
                    <div className="progress-bar" style={{width: `${stat.base_stat * 100 / 150}%`}}></div>
                  </li>
                  </>
                ))
              }
            </ul>
        </section>
        <section className='byid__section-2' >
          <div className='byid__section2-container' >
            <h3 className='byid__move__titles'>Movements</h3>
          </div>
          <ul className='byid__move-container' >
            {
              pokemon?.moves.map(move => (
                <li className='move__item' >{move.move.name}</li>
              ))
            }
          </ul>
        </section>
      </main>

    </article>
  )
}

export default PokedexById