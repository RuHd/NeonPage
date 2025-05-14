import React from 'react'
import './Card.scss'
import { style } from '../../styles/style.module.scss'

const Card = ({cardName}) => {
  return (
    <article className='card'> 
        <h3>{cardName}</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>

    </article>
  )
}

export default Card