import React from 'react'
import './home.css'
import Products from '../Products/Products'


const Home = () => {
  return (<>
  <section className='banner'>
    <div className="text"><h1>Navnath Trader's</h1>
    <h6> the definition of Luxury</h6>    
     </div>
  </section>
  <section className='brand' id='products'>
    <h1>BRANDS</h1>
    <Products/>
  </section>
  </>
  )
}

export default Home