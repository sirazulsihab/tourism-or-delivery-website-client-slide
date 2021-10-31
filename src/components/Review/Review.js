import React from 'react';
import './Review.css';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';


const Review = () => {
    const [cart, setCart] = useCart();
    
    return (
        <div className="review-wrapper">
            <div className="review-cart-area">
                <h1>Review Area</h1>
            </div>
            <div className="cart-area">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Review;