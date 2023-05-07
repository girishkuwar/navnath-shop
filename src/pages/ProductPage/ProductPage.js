import React, { useEffect, useState } from 'react'
import "./productpage.css"
import { useNavigate, useParams } from "react-router-dom"
import { collection, onSnapshot, query,doc,getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

const ProductPage = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setProduct(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getProduct();

  }, [])
  return (
    <div className='productdetails'>

      <div className="col">
        <div className="row">
          <img src={product.img} alt="" />
        </div>
        <div className="row">
          <h1>{product.name}</h1>
          <h2>Price ₹: {product.price}</h2>
          <p>desc {product.desc}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage