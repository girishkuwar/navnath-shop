import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <div className="heading">
        <h1>Navnath Traders</h1>
        <li><a href="/"><NavLink to={"addproduct"}>Add Product</NavLink></a></li>
      </div>
      <Outlet/>
    </div>
  )
}

export default Admin