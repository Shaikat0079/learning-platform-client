import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiUnity } from "react-icons/si";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { MdPeople } from "react-icons/md";
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext);

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
                            {/* <Nav.Link>{user?.displayName}</Nav.Link> */}
                            {
                                user?.photoURL ?
                                    <div className='click-to-top m-3'>
                                        <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                        <span>{user?.displayName}</span>
                                    </div>
                                    :
                                    <MdPeople />
                            }
                            <Button className='mx-2' variant='danger'><Link className='text-white' to='/login'>Login</Link></Button>
                            <Button variant='primary'><Link className='text-white' to='/'>All Courses</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;