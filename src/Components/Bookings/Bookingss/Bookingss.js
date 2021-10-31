import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import logo from '../../../images/logo.png'
import axios from 'axios';


const Bookingss = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successful.We will send you a confirmation email,stay tuned!');
                    reset()
                }
            })

    };



    return (

        <div className="add-booking mt-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className="d-flex justify-content-center">

                            <Card className=" bg-dark">
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>Mars Travel ltd</Card.Title>
                                    <Card.Text>
                                        <h2><span className="text-primary">This is the booking for:</span> <span className="text-secondary">{serviceId}</span></h2>

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{serviceId} Package for me.</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                    <div class="col">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Name" required />
                            <input {...register("email")} placeholder="email" required />
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

export default Bookingss;