import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    
    return (
        <div>
            <h2>Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter Title" {...register("title", { required: true })} /> <br />
            <input placeholder="Enter Description" {...register("description")} /> <br />
            <input placeholder="Enter Price" {...register("price", { required: true })} /> <br />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;