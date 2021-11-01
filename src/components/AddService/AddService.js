import React from 'react';
import './AddService.css';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'https://gory-mausoleum-56919.herokuapp.com/services';
        fetch(url, {
            method: 'post',
            headers : {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
    
    return (
        <div className="add-service-form">
            <h2>Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter Service Key" {...register("key", { required: true })} /> <br />
            <input placeholder="Enter Title" {...register("name", { required: true })} /> <br />
            <input placeholder="Enter vanue" {...register("vanue", { required: true })} /> <br />
            <input placeholder="Enter tour duration" {...register("duration", { required: true })} /> <br />
            <input placeholder="Enter Description" {...register("description")} /> <br />
            <input placeholder="Enter Price" {...register("price", { required: true })} /> <br />
            <input placeholder="Enter Image" {...register("img", { required: true })} /> <br />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;