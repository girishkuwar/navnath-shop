import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import logo from "../img/dp.jpg"

const Header = () => {
  return (
    <div>
        <nav>
            <div className="logo">
              <img src={logo} alt="" />
                <h1>Navath-Traders</h1>
            </div>
            <div className="inputbox">
            <input type="text" placeholder='Find your product'/>
            <i class="fa fa-search" ></i>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
