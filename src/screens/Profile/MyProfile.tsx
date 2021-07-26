import React, {useState, useEffect} from 'react';
import {RiFileUploadFill} from 'react-icons/ri';
import './MyProfile.css';

export const MyProfile = () => {

    const [password, setPassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const[profileImg, setProfileImg] = useState<string>("https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg");
    const handleChangeImg = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2 && reader.result){
                setProfileImg(Buffer.from(reader.result).toString());
            }
        }
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        reader.readAsDataURL(file);
        console.log(file);
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword({
            ...password,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className="my-profile">
            <div className="my-profile-main">
                <div className="my-profile-main-left">
                    <div className="image">
                        <img 
                            src={profileImg}
                            alt="img-profile" 
                            id="img"
                        />
                    </div>
                    <input 
                        className="btn-changeAvatar"
                        type="file" 
                        name="image-upload" 
                        id="input"
                        accept="image/*"
                        onChange={handleChangeImg}
                    />
                    <div className="label-input">
                        <label htmlFor="input" className="image-upload">
                            <RiFileUploadFill id="icon-upload"/>
                             Change your photo
                        </label>
                    </div>
                    
                    {/* <button className="btn-changeAvatar">Change Avatar</button> */}
                    {/* <button className="btn-changePass">Change Password</button> */}
                </div>
                <div className="my-profile-main-right">
                    <div className="my-profile-info">
                        <div className="email">
                            <div className="label">Email: </div>
                            <div className="info">thaobean1701@gmail.com</div>
                        </div>
                        <div className="username">
                            <div className="label">Username: </div>
                            <div className="info">ThaoBean</div>
                        </div>   
                    </div>
                    <div className="change-password">
                        <div className="password">
                            <div className="label">Old password: </div>
                            <input 
                                type="password" 
                                name="oldPassword" 
                                value={password.oldPassword}
                                className="custom-input" 
                                // placeholder="Don't change, don't enter"
                                onChange={handleChangePassword}
                            />
                        </div>
                        <div className="password">
                            <div className="label">New password: </div>
                            <input 
                                type="password" 
                                name="newPassword" 
                                value={password.newPassword}
                                className="custom-input" 
                                // placeholder="Don't change, don't enter"
                                onChange={handleChangePassword}
                            />
                        </div>
                        <div className="password">
                            <div className="label">Confirm password: </div>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                value={password.confirmPassword}
                                className="custom-input" 
                                // placeholder="Don't change, don't enter"
                                onChange={handleChangePassword}
                            />
                        </div>
                    </div>
                    <button className="btn-changePass">Change Password</button>
                </div>
            </div>
        </div>
    )
}
