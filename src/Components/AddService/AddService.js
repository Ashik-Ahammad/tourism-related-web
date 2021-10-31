import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fathomless-plains-36328.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successful.');
                    reset()
                }
            })

    };

    return (
        <div className="add-service mb-5 pb-5">
            <h3 className="text-secondary bg-light mb-5"> ADD NEW SERVICE </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" required />
                <textarea {...register("description")} placeholder="Description" required />
                <input {...register("img")} placeholder="image url" required />
                <input className="btn-sub" type="submit" />
            </form>
        </div>
    );
};

export default AddService;