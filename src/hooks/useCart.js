import React, { useEffect, useState } from 'react';
import { getDb } from '../utilitis/localStorage';

const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedDb = getDb();
        const keys = Object.keys(storedDb);
        const url = 'http://localhost:5000/services/byKeys';
        fetch(url, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(services => {
            
            if (services.length) {
                const savedCart = getDb();
                const storedCart = [];
                for (const key in savedCart) {
                    const addedProduct = services.find(product => product.key === key);
                    if (addedProduct) {
                        // set quantity
                        const quantity = savedCart[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);
                    }
                }
                setCart(storedCart);
            }
        })
    }, []);
    return [cart, setCart];
}
export default useCart;