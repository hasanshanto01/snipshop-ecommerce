import React from 'react';
import './Navbar.css';
import logo from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { UserIcon, HeartIcon, ShoppingBagIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

    const menuItems = <>
        <li><Link className='p-1'>
            <UserIcon className="h-6 w-6 text-white" />
            Account
        </Link></li>
        <li><Link className='p-1'>
            <HeartIcon className="h-6 w-6 text-white" />
            My Items
        </Link></li>
        <li><Link className="indicator p-0">
            <span className="w-0 indicator-item badge badge-warning">1</span>
            <ShoppingBagIcon className="h-6 w-6 text-white" />
        </Link></li>
    </>

    return (
        <div className="navbar navBg px-28">
            <div className="navbar-start">
                <div className='flex items-center gap-1 text-lg font-bold'>
                    <img src={logo} alt="" />
                    <p><span className='textClr1'>S</span>nip<span className='textClr2'>S</span>hop</p>
                </div>
            </div>
            <div className="navbar-center">
                <div className="form-control flex-row">
                    <input type="text" placeholder="Search SnipShop.com" className="input focus:outline-none rounded-full w-[593px] h-[28px] px-14 md:w-auto" />
                    <button className='w-[64px] h-[28px] -ml-6 rounded-full searchBtn'>
                        <MagnifyingGlassIcon className="h-5 w-5 mx-auto text-white" />
                    </button>
                </div>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 text-white items-center gap-5">
                    {menuItems}
                </ul>
                <Bars3Icon className="h-6 w-6 stroke-2 text-white ml-14" />
            </div>
        </div>
    );
};

export default Navbar;