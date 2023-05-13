import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import '../../App';


export default function List () {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/pacientes/lista', {
            headers: {
                'Accept': 'application/json',
            }
        }).then(res => res.json()).then(res => setPatients(res));
    })

    return (
        <>
            <div className='container'>
                <div className='rounded form-margin bg-gray align-content-center'>
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
                <div className='text-center align-content-center'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Cpf</th>
                                <th>Sex</th>
                                <th>Date of Birth</th>
                                <th colSpan={2}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(patient => (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.nome}</td>
                                    <td>{patient.cpf}</td>
                                    <td>{patient.sexo}</td>
                                    <td>{format(new Date(patient.datanasc), 'yyyy-MM-dd')}</td>
                                    <td><Button value={patient.id} as='a' href='/create' variant="primary">Edit</Button>{' '}</td>
                                    <td><Button value={patient.id} as='a' href='/create' variant="danger">Remove</Button>{' '}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}