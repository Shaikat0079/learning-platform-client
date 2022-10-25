import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col lg='2' sm='6'>
                        <h2>LeftNav</h2>
                    </Col>
                    <Col lg='10' sm='6'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;