import React from 'react';
import './Header.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (

        <div>
            <Navbar className="bg-color" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/"><img
                        alt=""
                        src={logo}
                        width="350"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>
                    <Navbar.Toggle className="bg-secondary" aria-controls="navbarScroll"
                    />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex">
                            <NavLink className="nav-style1" activeStyle={activeStyle} to="/home">HOME</NavLink>

                            <NavLink className="nav-style3" activeStyle={activeStyle} to="/manageorder">MANAGE ORDER</NavLink>
                            <NavLink className="nav-style4" activeStyle={activeStyle} to="/addService">ADD NEW SERVICE</NavLink>
                            <small className="text-warning">{user.displayName}</small>


                            {
                                user.email ?
                                    <button className="btn btn-white btn-sm m-0 p-0" onClick={logOut}><span className="text-danger border border-3">Log Out</span></button>
                                    :
                                    <NavLink className="nav-style4" activeStyle={activeStyle} to="/login">Login</NavLink>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>






    );
};

export default Header;