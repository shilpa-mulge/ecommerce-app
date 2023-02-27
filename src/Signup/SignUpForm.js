import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './SignupForm.module.css';
import Econtext from '../store/ecom-context';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
    const ctx = useContext(Econtext);
    const Navigate = useNavigate();
    // Initialize state for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8', {
                method: 'POST',
                body: JSON.stringify({
                    email: email, password: password, returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json()
                const emailId = data.email.replace('.', '').replace('@', '')
                ctx.login(data.idToken, emailId)
                Navigate(`/Login/Product/${data.idToken}`)
            }
            else {
                const data = await response.json();

                let error = "Authentication Faild!"
                if (data && data.error && data.error.message) {
                    error = data.error.message;
                }
                throw new Error(error)
            }
        } catch (err) {
            alert(err)
        }
    };

    return (
        <div className={classes.container}>
            <Form className={classes.form} onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Sign up
                </Button>
            </Form>
        </div>
    );
};

export default SignupForm;