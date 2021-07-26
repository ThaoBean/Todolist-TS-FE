import React from 'react';
import {CgFacebook} from 'react-icons/cg';
import {FaTwitter} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import {useState} from 'react';

import './UserRegister.css';


export const UserRegister = () => {
    const [register, setRegister] = useState<UserRegister>({username: '', password:'', email: ''});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRegister({
           ...register,
           [e.target.name]: e.target.value,
        });
    }

    return (
        <div className='register'>
            <form className='form-login'>
                <h1>Sign up</h1>
                <input 
                    type='text' 
                    placeholder='Email' 
                    value={register.password}
                    onChange={handleChange}
                    name='password'
                />
                <input 
                    type='text' 
                    placeholder='Username' 
                    value={register.username}
                    onChange={handleChange}
                    name='username' 
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    value={register.password}
                    onChange={handleChange}
                    name='password'
                />
                <input 
                    type='submit' 
                    value='Sign up' 
                    name=''
                />
                <div className="icons">
                    <CgFacebook className="fb-icon"/>
                    <FaTwitter className="twitter-icon"/>
                    <RiInstagramFill className="ig-icon"/>
                </div>
            </form>
        </div>
    )
}
