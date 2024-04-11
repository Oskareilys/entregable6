import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'


const PrincipalHeader = () => {
  return (
    <header className='container__header'>
        <h1 className='name__header'>
          <a className='principal__page' href="#/">
            Hotels
            <span>APP</span>
          </a> </h1>
        <nav className='navbar__hotel'> 
            <ul className='list__options'>
                <li className='hotel__list'>
                  <a className= 'label__list' href="#/reservations">Reservations</a>
                </li>
                <li className='hotel__list'>
                <a className= 'label__list' href="#/register">Register</a>
                </li>
                <li className='hotel__list'>
                <a className= 'label__list' href="#/login">Login</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default PrincipalHeader