import React from 'react'
import './Description.scss'

const Description = () => {
  return (
    <section className='description'>
        <div className='description-content'>
            <h2>Our Job</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur. At, corrupti quia! Officia eum esse eos voluptatibus sapiente odio rem nam laboriosam qui amet. Nulla velit vitae debitis eum.
            </p>
        </div>
        <div className='description-img-container'>
            <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5lZSUyMGxhbmRpbmd8ZW58MHx8fHwxNjg3NTY1NzA0&ixlib=rb-4.0.3&q=80&w=1080" alt="Description" className='description-img' />
        </div>
    </section>
  )
}

export default Description