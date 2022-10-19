import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import { Header } from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = ({switchTheme, theme}) => {
 

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000offset=0`
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])
  const userName = useSelector(state => state.userName)
  //funcion para elegir pokemons por paginas

  const handleChangePerPage = e => {
    setPokePerPage(e.target.value)
    setPage(1)
  }

  //logica de paginacion
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page-1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div className='pokedex__header'>
      <header className='header'>
        <Header 
          switchTheme={switchTheme}
          theme={theme}
          />
        <p className='pokedex__p' > <span className='pokedex__span' >Welcome {userName}</span>, here you can your favorite pokemon.</p>
      </header>
      <main className='pokedex__main'>
        <aside className='pokedex__aside' >
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
          <select id="selectPokePerPage" placeholder='pokemon per page' onChange={handleChangePerPage} >
            <option selected disabled>Pokemon per page</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </aside>
        <Pagination 
            page={page}
            setPage = {setPage} 
            pokePerPage={pokePerPage}
            pagesLength = {pokemons && Math.ceil(pokemons.length / pokePerPage)}
            theme = {theme}

            />
        <div className='card-container' >
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />))
          }
        </div>
        <Pagination 
            page={page}
            setPage = {setPage} 
            pokePerPage={pokePerPage}
            pagesLength = {pokemons && Math.ceil(pokemons.length / pokePerPage)}
            />
      </main>
    </div>
  )
}

export default Pokedex