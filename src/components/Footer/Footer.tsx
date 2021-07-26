import React from 'react';
import {SiFacebook} from 'react-icons/si';

import {AiFillTwitterCircle, AiFillGooglePlusCircle} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import './Footer.css'

export const Footer:React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-main">
                <SiFacebook className="icons"/>
                <AiFillTwitterCircle className="icons"/>
                <FaPinterest className="icons"/>
                <AiFillGooglePlusCircle className="icons"/>
                <ImLinkedin className="icons"/>
            </div>
        </div>
    )
}
