import React from 'react'
import './Panel.scss'
import Image from 'next/image'
import person from '@/assets/person.png'
import person2 from '@/assets/person2.png'

const Panel = () => {
  return (
    <section className='panel'>
        <h2>A new horizon rise up now</h2>
        <ul className='panel-frame'>
            <li>
                <article>
                    <h3>Panel 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </article>
            </li>
            <li>
                <article>
                    <h3>Panel 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </article>
            </li>
            <li>
                <article>
                    <h3>Panel 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </article>
            </li>
            <li>
                <article>
                    <h3>Panel 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </article>
            </li>
        </ul>
        <div className="panel-image-container">
            <Image src={person2} alt="Person" className="panel-image" priority />    
            <Image src={person} alt="Person" className="panel-image" priority />
        </div>
    </section>
  )
}

export default Panel