import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
    const notify = (name, coursenumber) => toast(name + ' Thanks for Puchasing Course: ' + coursenumber, 'Course');
    const handlePurchase = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const coursenumber = form.coursenumber.value;
        notify(name, coursenumber);
        form.reset();
    }
    return (
        <Container>
            <Form onSubmit={handlePurchase}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name='phonenumber' type="number" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Course Number/ID</Form.Label>
                    <Form.Control name='coursenumber' type="number" placeholder="Course Number/ID" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Purchase Course
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
};

export default CheckOut;