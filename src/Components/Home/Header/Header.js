import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();


    return (

        <div>
            <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand href="/"><img width="300px" height="80px" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className="toggle-color" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-style" as={HashLink} to="/home">HOME</Nav.Link>
                        <Nav.Link className="nav-style" as={HashLink} to="/manageorder">MANAGE ORDER</Nav.Link>
                        <Nav.Link className="nav-style" as={HashLink} to="/addService">ADD NEW SERVICE</Nav.Link>
                        <small className="text-warning">{user.displayName}</small>
                        <br />

                        {
                            user?.email ?

                                <button onClick={logOut} type="button" class="btn btn-outline-light text-dark rounded-0 ms-2 btn-sm"> LOG OUT</button>

                                :

                                <Nav.Link className="nav-style" as={HashLink} to="/login">LOGIN</Nav.Link>
                        }

                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </div>






    );
};

export default Header;