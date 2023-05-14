import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let products = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setProducts(products);
    })
    window.scrollTo(0, 0);
    return () => { unsub(); }
  }, [])

  return (
    <div>ViewProducts
      {
        products.map((e) => {
          return (<>
            <h1>{e.name}</h1>
            <h1>{e.price}</h1>
            <h1>{e.desc}</h1>
            <h1>{e.brand}</h1>
          </>)
        })
      }
    </div>
  )
}

export default ViewProducts