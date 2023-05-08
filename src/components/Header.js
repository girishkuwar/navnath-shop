import React from 'react'
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/dp.jpg"

const Header = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        // navigate('/signup');
    }
    // console.log(auth.email);
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>NavNath-Traders</h1>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder='Find your product' />
                    <i class="fa fa-search" ></i>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#products">Products</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    {
                        auth ? <li><a href="" onClick={logout}>LogOut</a></li> :
                        <li><Link to={"/login"}>Log In</Link></li>
                    }
                </ul>
                
            </nav>
        </div>
    )
}

export default Header