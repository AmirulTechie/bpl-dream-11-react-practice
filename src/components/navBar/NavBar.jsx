import React from 'react';
import Currency from '../../assets/Currency.png';
import NavLogo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <img src={NavLogo} alt="" />
            </div>
            <div className="flex-none">
                <button className="flex justify-center items-center gap-2 font-bold text-xl">
                    0 Coins
                    <img src={Currency} alt="" />
                </button>
            </div>
        </div>
    );
};

export default NavBar;