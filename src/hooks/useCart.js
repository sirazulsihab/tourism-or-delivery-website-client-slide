import { useEffect, useState } from 'react';

import { getDb } from '../utilitis/localStorage';

const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedDb = getDb();
        const keys = Object.keys(storedDb);
        fetch('http://localhost:5000/services/byKeys' , {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(services => {
            console.log("from response", services);
            if (services.length) {
                const savedCart = getDb();
                console.log(savedCart);
                const storedCart = [];
                for (const key in savedCart) {
                    const addedProduct = services.find(service => service.key === key);
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