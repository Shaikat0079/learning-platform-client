import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate('/')

            })
            .catch(e => {
                console.error(e)
                setError(e.message);
            });

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-danger d-block">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;