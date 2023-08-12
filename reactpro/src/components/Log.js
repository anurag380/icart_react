import React from 'react'
import {Form,Button} from 'react-bootstrap';

const Log = () => {
  return (
    <div className='lg'>
        <br></br>
        <div className='d-flex justify-content-center'>
            <div className='text-center'>
                <h5><u>Existing user</u></h5>
                <h1 className='text-success'>LOG IN FORM</h1><br></br>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    LOG IN
                    </Button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Log