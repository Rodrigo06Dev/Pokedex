import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()

    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit} className='pokedex__form'>
      <input className='pokedex__input-pokedex' id='search' type="text" placeholder='search a pokemon' />
      <button className='pokedex__btn-pokedex' >Search</button>
    </form>
  )
}

export default InputSearch