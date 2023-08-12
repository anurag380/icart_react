import React from 'react'
import {Form,Button} from 'react-bootstrap';


const Signup = () => {
  return (
    <div className='lg'>
        <br></br>
        <div className='d-flex justify-content-center'>
            <div className='text-center'>
                <h5><u>New user</u></h5>
                <h1 className='text-danger'>SIGN UP FORM</h1><br></br>
                <Form>  
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="Enter Name" />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className="mb-3" type="number" placeholder="Enter Phone number" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="mb-3" type="email" placeholder="Enter email" />
                    <Form.Label>Address</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-3" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    SIGN UP
                    </Button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Signup