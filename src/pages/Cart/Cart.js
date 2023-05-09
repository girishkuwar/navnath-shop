import React, { useContext, useEffect, useState } from 'react'
import "./cart.css"
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../../context/CartContext';

const Cart = () => {
    let [products, setProducts] = useState([]);
    const cartc = useContext(cartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        const cart = localStorage.getItem('cart');
        if (!auth) {
            navigate('/login');
        }
        if (!cart) {
            alert("Cart IS Empty");
            navigate('/products');
        }
        setProducts(JSON.parse(localStorage.getItem('cart')));
    }, [navigate])

    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }

    const removeitem = (v) => {
        console.log(v);
        let obj = products.find(o => o.id === v.id);
        console.log(obj);
        products.splice(products.findIndex(a => a.id === v.id), 1)
        setProducts(products);
        localStorage.setItem('cart', JSON.stringify(products));
        setProducts(JSON.parse(localStorage.getItem('cart')));
        cartc.update();
    }

    console.log(products)
    return (
        <div className='cart-list'>
            {
                products.map((v) => {
                    return (<><div className='cart-item'>
                        <img src={v.img} alt="" style={{ width: "200px" }} />
                        <div className="flexbox">
                            <h1>{v.name}</h1>
                            <p>Rs. {v.price}</p>
                            <button onClick={(e) => removeitem(v)}>Remove</button></div>
                    </div>
                        <div className="line"></div></>
                    )
                })
            }
            <div className="total">
                <h1>Total : Rs. {total}</h1>
                <button><Link to={"/payment"}>Buy</Link></button></div>
        </div>
    )
}

export default Cart