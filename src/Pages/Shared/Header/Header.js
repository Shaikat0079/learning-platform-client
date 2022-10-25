import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiUnity } from "react-icons/si";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <div>
            <Navbar className='mb-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <SiUnity className='text-white mx-2' />
                    <Navbar.Brand href="#home">MY Edu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                            <Button variant='primary'><Link className='text-white' to='/'>All Courses</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;