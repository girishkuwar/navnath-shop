import React from 'react'
import './home.css'
import Products from '../Products/Products'


const Home = () => {
  return (<>
  <section className='banner'>
  </section>
  <section className='brand' id='products'>
    <h1>BRANDS</h1>
    <Products/>
  </section>
  </>
  )
}

export default Home