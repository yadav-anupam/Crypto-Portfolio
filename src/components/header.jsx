import React, { act } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate()
    const navItems = [
        {
        name: 'Home',
        slug: "/",
        active: true
        }, 
        {
        name: "connectwallet",
        slug: "/connectwallet",
        active: true,
        },
        {
        name: "watchlist",
        slug: "/watchlist",
        active : true,
        },
        {
        name: "wallets",
        slug: "/wallets",
        active: true,
        },
    ]

    return(
        <header className='py-3 shadow bg-gray-500'>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                        <h1 className='text-2xl font-bold text-white'>Crypto Portfolio</h1>
                        </Link>
                    </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item) => 
                    item.active ? (
                    <li key={item.name}>
                        <button
                        onClick={() => navigate(item.slug)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        >{item.name}</button>
                    </li>
                    ) : null
                    )}
                </ul>
                </nav>
        </header>
    )
}

export default Header