import React from 'react'
import './products.css'
import brandimg from '../../img/pexels-victoria-rain-3315291.jpg'

const Products = () => {
    return (
        <div>

            <main>
                <div class="card">
                    <img src={brandimg} alt=""/>
                        <div class="card-content">
                            <h2>
                                Jaquar
                            </h2>
                           
                            <a href="#" class="button">
                                Explore
                            </a>
                        </div>
                </div>
                <div class="card">
                    <img src={brandimg} alt=""/>
                        <div class="card-content">
                            <h2>
                                Jaquar
                            </h2>
                          
                            <a href="#" class="button">
                                Explore
                            </a>
                        </div>
                </div>
                <div class="card">
                    <img src={brandimg} alt=""/>
                        <div class="card-content">
                            <h2>
                                Jaquar
                            </h2>
                          
                            <a href="#" class="button">
                                Explore
                            </a>
                        </div>
                </div>
                <div class="card">
                    <img src={brandimg} alt=""/>
                        <div class="card-content">
                            <h2>
                                Jaquar
                            </h2>
                         
                            <a href="#" class="button">
                                Explore
                            </a>
                        </div>
                </div>
            </main>
        </div>
    )
}

export default Products