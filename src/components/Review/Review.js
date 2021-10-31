import React from 'react';
import './Review.css';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const Review = () => {
    
    return (
        <div className="review-wrapper">
            <div className="review-cart-area">
                <h1>Review Area</h1>
            </div>
            <div className="cart-area">
                <Cart>
                <Link to="/shipping"><button className="btn btn-success">Procced to check out</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;