import Link from 'next/link';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { StateContext, useStateContext } from '../context/StateContext';
import Cart from './Cart';



const Navbar = () => {

const { showCart, setShowCart, totalQuantities  } = useStateContext();

    return (
        <div className='navbar-container'>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            <p className='logo'>
                <Link href="/">
                    HeadPhones 
                </Link>
            </p>
            <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{ totalQuantities }</span>
            </button>
            {
                showCart &&
                <Cart />
            }
        </div>
    );
};

export default Navbar;