import React from 'react';
import {CgFacebook} from 'react-icons/cg';
import {FaTwitter} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import {useState} from 'react';
import{ BrowserRouter as Router, Link} from 'react-router-dom';
import './UserLogin.css';


export const UserLogin = () => {
    const [login, setLogin] = useState<UserLogin>({username: '', password:''});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
           ...login,
           [e.target.name]: e.target.value,
        });
    }
    
    const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }

    return (
            <div className='login'>
                <form className='form-login' onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <input 
                        type='text' 
                        placeholder='Username' 
                        value={login.username}
                        onChange={handleChange}
                        name='username' 
                        required
                    />
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={login.password}
                        onChange={handleChange}
                        name='password'
                        required
                    />
                    <Link to ="/register">Sign Up Now?</Link>
                    <Link to ="/home" className="submit-login">Login</Link>
                    {/* <input 
                        type='submit' 
                        value='Login' 
                    /> */}
                    <div className="icons">
                        <CgFacebook className="fb-icon"/>
                        <FaTwitter className="twitter-icon"/>
                        <RiInstagramFill className="ig-icon"/>
                    </div>
                </form>
            </div>
    )
}


