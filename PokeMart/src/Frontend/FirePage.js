import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirePage.css';
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";
import charmeleon from "../Images/charmeleon.png";
import charizard from "../Images/charizard.png";

function FireTypePage() {
    const navigate = useNavigate();

    const handleCheckoutClick = (pokemonName) => {
        navigate(`/product/${pokemonName}`);
    };

    const handleLogoutClick = () => {
        console.log('Logout button clicked!');
    };

    return (
        <div className="fireTypeContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="fireTypeLogo" />
            <img src={logoutLogo} alt="Logout Logo" className="fireTypeLogout" onClick={handleLogoutClick} />
            <img src={cartLogo} alt="Cart Logo" className="fireTypeCart" />
            <h1 className="fireTypeTitle">POKEMON-SHOP</h1>
            <h2 className="fireTypeSubtitle">Fire type</h2>
            <div className="pokemonGrid">
                <div className="pokemonCard">
                    <h3 className="pokemonName">Charmander</h3>
                    <div className="pokemonImageContainer">
                        <img src={charmander} alt="Charmander" className="pokemonImage" />
                    </div>
                    <button className="checkOutButton" onClick={() => handleCheckoutClick('charmander')}>Check it out</button>
                </div>
                <div className="pokemonCard">
                    <h3 className="pokemonName">Charmeleon</h3>
                    <div className="pokemonImageContainer">
                        <img src={charmeleon} alt="Charmeleon" className="pokemonImage" />
                    </div>
                    <button className="checkOutButton" onClick={() => handleCheckoutClick('charmeleon')}>Check it out</button>
                </div>
                <div className="pokemonCard">
                    <h3 className="pokemonName">Charizard</h3>
                    <div className="pokemonImageContainer">
                        <img src={charizard} alt="Charizard" className="pokemonImage" />
                    </div>
                    <button className="checkOutButton" onClick={() => handleCheckoutClick('charizard')}>Check it out</button>
                </div>
            </div>
        </div>
    );
}

export default FireTypePage;