import React from 'react';
import './Shipping.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {clearTheCart, getDb } from '../../utilitis/localStorage';
import Cart from '../Cart/Cart';


const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getDb();
        data.order = savedCart;

        fetch('https://gory-mausoleum-56919.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
    };
    return (

        <div className="shipping-wrapper">
                <h2 className="text-primary py-3">Shipping Form</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <br />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="error">This field is required</span>}
                
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <br />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <br />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <br />
                <input type="submit" />
            </form>
            </div>
    );
};

export default Shipping;