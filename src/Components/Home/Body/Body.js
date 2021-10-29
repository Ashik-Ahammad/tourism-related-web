import React from 'react';
import './Body.css'

const Body = (props) => {
    const { id, name, img, description } = props.tests;
    return (
        <div className="col">
            <div className="card shadow-lg card-style">
                <img className="body-img img-fluid" src={img} alt="img" />
                <div className="card-body">
                    <h5 className={id}><span>{name}</span></h5>
                    <p className="card-text">{description}</p>

                    <div class="d-grid gap-2">
                        <button class="btn btn-style btn-dark" type="button">BOOK</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Body;