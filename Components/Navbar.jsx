import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '@/Context/StateContext';
import Cart from './Cart';

const Navbar = () => {
  
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="Navbar">
      <div>
        <Link href=""><p className="logo">LEDVUS SHOP</p></Link>
      </div>

      <div className='navContent'>
        <div className="navB">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </div>
      <button type="button" className="carticon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <div className="cart-itemqty">
        <span>{totalQuantities}</span>
        </div>
      </button>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar