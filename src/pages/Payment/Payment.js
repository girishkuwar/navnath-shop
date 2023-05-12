import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import cartContext from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';

const Payment = () => {
  const [error, setError] = useState(null);
  const [cardNo, setCardNo] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [holdername, setHoldername] = useState("");
  const cartc = useContext(cartContext);
  const user = localStorage.getItem("user");
  const userid = localStorage.getItem("userid");
  const [loader, setloader] = useState(false)
  const navigate = useNavigate();

  let productlist = cartc.cart;
  let total = 0;
  for (let i = 0; i < productlist.length; i++) {
    total += productlist[i].price;
  }

  const cheackCard = () => {
    console.log(cardNo.length);
    if (cardNo.length === 16 && month !== 0 && year !== 0 && cvv.length === 3 && holdername !== "") {
      payBill();
    }
    else {
      alert("Please enter a valid card number.");
    }
  }

  const payBill = async () => {
    const docRef = await addDoc(collection(db, "payments"), {
      total: total,
      mode: "card",
      quantity: +productlist.length,
      customer_id: user,
    });
    alert("Document written with ID: " + docRef.id)
    // buyItems(data[0].id);
    buyItems(docRef.id)
  }

  const buyItems = (pay_id) => {
    if (pay_id !== 0) {
      for (let i = 0; i < productlist.length; i++) {
        addData(productlist[i].productid, productlist[i].name, pay_id);
      }
    } else {
      alert("Error");
    }
  }

  const addData = async (id, name, pay_id) => {
    const docRef = await addDoc(collection(db, "orders"), {
      userid: user,
      product_id: id,
      product_name: name,
      status: "pending",
      payment_id: pay_id
    })
    cartc.EmptyCart();
    
    
  }
  
  // navigate("/invoice/" + pay_id);


  return (
    <div>
      <button onClick={payBill}>Pay</button>
    </div>
  )
}

export default Payment