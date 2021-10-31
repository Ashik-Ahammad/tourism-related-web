import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = (props) => {
    const { id: _id, name, img, description } = props.tests;
    return (
        <div className="col">
            <div className="card shadow-lg card-style">
                <img className="body-img img-fluid" src={img} alt="img" />
                <div className="card-body">
                    <h5 className={_id}><span>{name}</span></h5>
                    <p className="card-text">{description}</p>

                    <Link to={`/bookingss/${_id}`}>
                        <div class="d-grid gap-2">
                            <button class="btn btn-style btn-dark" type="button">BOOK</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Body;