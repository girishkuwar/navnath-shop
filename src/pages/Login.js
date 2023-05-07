import React from "react";
import "../assets/css/login.css";
import image from "../assets/images/login.svg";
import {auth} from '../firebase.config';
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useNavigate} from 'react-router-dom';
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn,setIsLoggedIn]= useState(false);
  const navigate = useNavigate()

  

  useEffect(()=>
  {
    const loggedIn = localStorage.getItem('isLoggedIn')==='true';
    setIsLoggedIn(loggedIn);
  },[]);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        toast.success("OTP sent successfully!");
        setShowOTP(true);
        
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);

        setUser(res.user);
        toast.success("login success!");
        console.log(user);
        localStorage.setItem('isLoggedIn','true');
        setIsLoggedIn(true);
      

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <div className="content ">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt="" className="img-fluid" />
          </div>

          {isLoggedIn ?(
          navigate('/bikes')
          
          ):( <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  {showOTP?( <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={50} />
                </div>
                <h3>Enter Your OTP</h3>
                <br/>
               
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="otp-container "
                ></OtpInput>
                <p className="mb-4">Check OTP in SMS and Enter OTP for verification</p>
                <br/>
                <button
                  onClick={onOTPVerify}
                  className="btn btn-block btn-primary"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>):(<>
                <h3>Sign In</h3>
                  <p className="mb-4">Login and Get a Bike</p>
                  <div className="form-group first">
                   
                    
               <PhoneInput placeholder="Enter Your Mobile Number " country={"in"} inputStyle={{paddingLeft:'40px'}} className="form-control " value={ph} onChange={setPh} />
                
                  <br/><br/>

                <button
                  onClick={onSignup}
                  className="btn btn-block btn-primary"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send OTP</span>
                </button>
                  </div>
                 
                 

                  

                  

                 
                  </>
               )}
                 
                </div>
                
              </div>
            </div>
          </div>)}
         
        </div>
      </div>
    </div>
  );
};

export default Login;
// export {user};
