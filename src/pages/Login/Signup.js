import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./auth.css"
import { Link } from 'react-router-dom';

const Signup = () => {
    const auth = getAuth();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert("success")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                // ..
            });
    }
    return (
        <div className='form'>
            <input type="text" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
            <input type="text" placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
            <button onClick={signup}>Signup</button><span>Allready Have Account <Link to={"/login"}>Login</Link></span>

        </div>
    )
}

export default Signup