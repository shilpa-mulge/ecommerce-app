import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
const ContactUs = () => {
    async function DetailsSubmitHandler(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const userObj = { name: name, email: email, phone: phone }

        try {
            const response = await fetch('https://react-app-cd331-default-rtdb.firebaseio.com/users.json/', {
                method: 'POST',
                body: JSON.stringify(userObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (<>
        <section style={{ textAlign: 'center', padding: '2rem' }} ><h1 >Contact Us</h1>
            <p>We'd love to get in touch and learn more about you. So, send us your details and we'll reply as fast as we can.</p>
        </section>
        <section style={{ boxSizing: 'content-box', textAlign: 'center', display: 'contents' }} >
            <Form onSubmit={DetailsSubmitHandler}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" name="phone" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    </>
    )
}
export default ContactUs;