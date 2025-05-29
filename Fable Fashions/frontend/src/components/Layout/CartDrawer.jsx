import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckout=()=>{
    toggleCartDrawer();
    navigate("/checkout");

  }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* Cart Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 cursor-pointer">Your Cart</h2>
        {/* Component for cart contents */}
        <CartContent/>

      </div>
      {/* checkout area */}
      <div className="p-4 bg-white sticky bottom-0">
        <button 
        onClick={handleCheckout}
        className="w-full bg-Fire-Engine-Red text-white font-semibold py-3 hover:bg-black rounded-lg transition">Checkout</button>
        <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
            Shipping , taxes , & discount code calculated at checkout
        </p>
        <h4 className="text-sm text-center tracking-tighter text-gray-400 mt-3">Copy Rights © Owned By The Developer</h4>
      </div>
    </div>
  );
}

export default CartDrawer;