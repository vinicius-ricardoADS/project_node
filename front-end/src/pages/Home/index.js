import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../App';

export default function Home () {
    return (
        <>
            <div className='container bg-gray-form align-content-center'>
                <Form method='post' className='form-signin form-margin text-center'>
                    <div>
                        <h4>Enter with data</h4>
                    </div>
                    <div className='form-floating mb-3'>
                        <Form.Group className="mb-3" controlId="formGroupUser">
                            <Form.Label>User address</Form.Label>
                            <Form.Control name='email' type="text" placeholder="Enter user" />
                        </Form.Group>
                    </div>
                    <div className='form-floating'>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                    </div>
                    <div>
                        <Button type='submit' className='btn btn-primary'>Sign in</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}