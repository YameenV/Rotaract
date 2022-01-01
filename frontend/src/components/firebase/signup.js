import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup() {

const [email,setEmail] = useState()
const [password,setPassword] = useState()

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2>Sign up</h2>
                    <Form>
  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value = {password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </Card.Body>
            </Card>
        </div>
    )
}

