import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            {/* <Row>
                    <Col lg='2' sm='6'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10' sm='6'> */}
            <div className='m-3'>
                <Outlet></Outlet>
            </div>
            {/* </Col>
                </Row> */}

            <Footer></Footer>
        </div>
    );
};

export default Main;