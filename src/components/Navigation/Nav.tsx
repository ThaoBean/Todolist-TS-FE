import React from 'react'
import {FcTodoList} from 'react-icons/fc';
import {CgHello, CgProfile} from 'react-icons/cg';
import {RiLogoutCircleRFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to ="/home"><FcTodoList className="logo-icon"/></Link>
            </div>
            <div className="navigation">
                <ul>
                    <li><CgHello className="icon"/> Hi <strong>ThaoBean</strong></li>
                    <li><CgProfile className="icon"/><Link to="/home/myProfile" className="link">My Profile</Link></li>
                    <li><RiLogoutCircleRFill className="icon"/><Link to="/" className="link">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}


