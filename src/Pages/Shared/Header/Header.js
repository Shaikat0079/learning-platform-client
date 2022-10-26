import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiUnity } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { GiBearFace } from "react-icons/gi";
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
        navigate('/')
    }

    return (
        <div>
            <Navbar className='mb-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <SiUnity className='text-white mx-2' />
                    <Link to='/myedu'><Navbar.Brand>MY Edu</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='m-3' to='/faq'>FAQ</Link>
                            <Link className='my-3' to='/blog'>Blog</Link>

                        </Nav>
                        <Nav>
                            {
                                user?.uid ?

                                    <Button onClick={handleLogOut}>Log out</Button>
                                    :
                                    <>
                                        <Button className='mx-2' variant='danger'><Link className='text-white' to='/register'>Register</Link></Button>
                                        <Button className='mx-2' variant='danger'><Link className='text-white' to='/'>Login</Link></Button>
                                    </>
                            }
                            <>
                                {
                                    user?.photoURL ?
                                        <div className='click-to-top m-3'>
                                            <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                            <span>{user?.displayName}</span>
                                        </div>
                                        :
                                        <GiBearFace className='text-white m-3' />
                                }</>

                            <Button variant='primary'><Link className='text-white' to='/home'>All Courses</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;