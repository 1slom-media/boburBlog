import { useState,useRef } from "react";
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../../../hooks/useAuth";
import './home.css';

export const Home=()=>{
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const [error, setError] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  
    const handleLogin = async (evt) => {
      evt.preventDefault();
  
      const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
  
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (res.ok) {
        setToken(data);
        navigate('/');
      } else {
        setError(true);
      }
    };

    return(
        <div className="public_home">
             <h1 className="public_heading">Login</h1>
            <form className="form"  onSubmit={handleLogin}>
                <input
                ref={emailRef}
                type="email"
                className={`form_input ${error ? 'error_input' : ''}`}
                placeholder="Email: eve.holt@reqres.in"
                required
                />
                <input
                ref={passwordRef}
                type="password"
                className={`form_input ${error ? 'error_input' : ''}`}
                placeholder="Password: cityslicka "
                required
                />
                <button className="form_btn">submit</button>
            </form>    
        </div>
    )
}