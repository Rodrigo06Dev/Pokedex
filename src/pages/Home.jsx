import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'
import Footer from '../components/shared/Footer'
const Home = () => {
  return (
    <div className='pokedex' >
<img  className='pokedex__img' src='/images/home/pokedex.jpg' alt='pokedex' />
<header className='pokedex__header' >
        <h2 className='pokedex__subtitle' >Hi Trainer!</h2>
      <p className='pokedex__text' >Give me your name to see the pokedex</p>
</header>
<FormHome/>
<Footer/>
    </div>
  )
}

export default Home