import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = (props) => {
    const { id: _id, name, img, description, price } = props.tests;
    return (
        <div className="col" data-aos="zoom-in-down">
            <div className="card shadow-lg card-style">
                <img className="body-img img-fluid w-25 mx-auto mt-3" src={img} alt="img" />
                <div className="card-body">
                    <h5 className={_id}><span>{name}</span></h5>
                    <p className="card-text">{description}</p>
                    <h5 className="text-info">{price}</h5>
                    <Link to={`/bookingss/${_id}`}>
                        <div class="d-grid gap-2">
                            <button class="btn btn-style btn-dark " type="button" data-aos="flip-up"><span className="btn-text">BOOK NOW</span></button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Body;