import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import pokeballLogo from '../Images/Pokeball.png';
import userIcon from '../Images/icon.png';

function LoginPage() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('user');

    const handleLoginClick = () => {
        if (userType === 'admin') {
            navigate('/admin');
        } else {
            navigate('/home');
        }
    };

    return (
        <div className="LoginPage">
            <img src={pokeballLogo} alt="Pokeball Logo" className="logo2" />
            <h1 className="h1">POKEMART</h1>
            <div className="loginPageContainer">
                <img src={userIcon} alt="User Icon" className="userIcon" />
                <div className="loginForm">
                    <select
                        className="userTypeSelect"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input type="email" placeholder="Email Address" className="emailInput" />
                    <input type="password" placeholder="Password" className="passwordInput" />
                    <button className="loginButton" onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;