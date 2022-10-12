import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './style.css';

import logo from '../assets/logo.svg';
import tel from '../assets/tel.svg';

function toBottomProduct() {
    window.scrollTo(0, 772);
}

function toBottomInform() {
    window.scrollTo(0, 5300);
}


class components extends Component {
    render() {
        return (
            <Navbar expand="lg" >
                <Container>
                    <Navbar>
                        <img src={logo} alt="logo" />
                    </Navbar>

                    <Navbar className="navbar-bbb">
                        <button className="text-style bbb" onClick={toBottomInform}>О нас</button>
                        <button className="text-style bbb" onClick={toBottomProduct}>Продукция</button>
                    </Navbar>

                    <Navbar className="nav-style">
                        <img src={tel} alt="tel" />
                        <Nav.Link className="tel-style"
                            href="tel:80291489125">80-29-148-91-25</Nav.Link>
                    </Navbar>
                </Container>
            </Navbar>
        );
    }
}

export default components;