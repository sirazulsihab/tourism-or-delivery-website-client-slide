import React from 'react';
import './Cart.css';
import useCart from '../../hooks/useCart';

const Cart = (props) => {
    const [cart, setCart] = useCart()

    console.log("from cart", cart)

    let totalQuantity = 0;
    let total = 0;
    for (const service of cart) {
        if (!service.quantity) {
            service.quantity = 1;
        }
        total = total + service.price * service.quantity;
        totalQuantity = totalQuantity + service.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    
    return (
        <div className="cart-container">
            <h3>This is Cart</h3>
            <p>Added Service : {cart.length}</p>
            <p>Total Price : {grandTotal}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Total : {(grandTotal + tax).toFixed(2)}</p>
            <button className="btn btn-success">Show Cart</button>
        </div>
    );
};

export default Cart;