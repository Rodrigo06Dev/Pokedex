import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../shared/Header'
import  error404 from '../../../public/imagen1.png'
import './styles/pokemon404.css'

const Pokemon404 = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="error__container">
                <Link to='/pokedex' ><button className='error__btn'>Go Back!</button></Link>
                <img src={error404} alt="" className='error__image'/>
                <p className="error__txt">¡ Sorry this pokemon does not exist !</p>
            </div>
            {/* <Link to='/pokedex' >Return to Pokedex</Link> */}
        </>
    )
}

export default Pokemon404 