import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Booking.css'


const Booking = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fathomless-plains-36328.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successful.');
                    reset()
                }
            })

    };

    return (
        <div className="add-booking mt-5">
            <div class="container">
                <div class="row">
                    <div class="col">

                    </div>
                    <div class="col">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Name" required />
                            <input {...register("Email")} placeholder="email" required />
                            <input {...register("address")} placeholder="Address" required />
                            <input {...register("id")} placeholder="Package ID" required />
                            <input {...register("payment account")} placeholder="Payment account" required />
                            <input {...register("img")} placeholder="Give your image url" required />
                            <input className="btn-sub" type="submit" placeholder="Purchase" />
                        </form>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Booking;