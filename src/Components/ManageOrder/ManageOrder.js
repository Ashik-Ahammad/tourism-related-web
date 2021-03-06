import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://fathomless-plains-36328.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    //Delete order and user

    const handleDeleteUser = id => {
        const proceed = window.confirm('!!! Are you sure, you want delete permanently?')
        if (proceed) {
            const url = `https://fathomless-plains-36328.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successful');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers)
                    }
                })
        }
    }

    return (
        <div className="container mb-5 pb-5">
            <div data-aos="fade-right">
                <h4 className="text-primary">Orders and Customers</h4>
            </div>

            <div data-aos="zoom-in">
                <img src="https://image.freepik.com/free-vector/woman-buying-tickets-online-flat-vector-concept_81522-1102.jpg" alt="" className="img-fluid" />
            </div>

            <br />

            <div data-aos="fade-left">
                <h3>Users & Orders Available : {users.length}</h3>
            </div>

            <ul className="border border-3 bg-light text-dark">
                {
                    users.map(user => <li className="my-3 border border-2"
                        key={user._id}
                    >Name - {user.name} || Email  {user.email} || OrderID - {user.id}
                        <button onClick={() => handleDeleteUser(user._id)} className="btn-danger my-3 ms-5">Delete <span className="text-warning">X</span></button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageOrder;