import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sign Up");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='login-popup'>
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2> <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" ? <input type="text" placeholder='Your name' /> : <></>}
                    <input type="email" placeholder='Your email' />
                    <div className="password-input-container">
                        <input type={showPassword ? "text" : "password"} placeholder='Password' />
                        <span className="password-toggle-icon" onClick={() => setShowPassword(prev => !prev)}>
                            {showPassword ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            )}
                        </span>
                    </div>
                </div>
                <button>{currState === "Login" ? "Login" : "Create account"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    : <p>Already have an account?<span onClick={() => setCurrState('Login')}>Login here</span></p>
                }
            </div>
        </div>
    )
}

export default LoginPopup
