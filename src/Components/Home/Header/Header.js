import React from 'react';
import './Header.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.png'

const Header = () => {
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
                            <NavLink className="nav-style2" activeStyle={activeStyle} to="/order">BOOK</NavLink>
                            <NavLink className="nav-style3" activeStyle={activeStyle} to="/mnageorder">MANAGE BOOKINGS</NavLink>
                            <NavLink className="nav-style4" activeStyle={activeStyle} to="/Login">LOGIN</NavLink>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>






    );
};

export default Header;