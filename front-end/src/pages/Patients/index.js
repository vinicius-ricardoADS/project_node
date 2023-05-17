/* eslint-disable jsx-a11y/anchor-is-valid */
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../../App';


export default function List () {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/pacientes/lista', {
            headers: {
                'Accept': 'application/json',
            }
        }).then(res => res.json()).then(res => setPatients(res));
    }, []);

    return (
        <>
            <div className='grid min-h-screen grid-cols-2 container'>
                <div className='d-flex flex-row'>
                    <div className='col-6 login-margin relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16'>
                        <div className='text-gray text-gray-50 flex-shrink-0 d-flex align-items-center justify-content-center me-3 items-center gap-3 text-left'>
                            <div className='col-md-9'>
                                <Form.Group controlId="formGroupUser">
                                    <Form.Control name='email' type="text" placeholder="Enter user" />
                                </Form.Group>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                                <button type="button" className="btn btn-icon"><Search className="text-gray" /></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 login-margin relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16'>
                        <a href='#' className="text-gray text-gray-50 flex-shrink-0 d-flex align-items-center justify-content-center me-3 items-center gap-3 text-left">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                                <User className="h-5 w-5 text-gray" />
                            </div>
                            <p className="max-w-[140px] text-sm leading-snug mb-0 ms-3">
                                <span className="underline">Cadastrar paciente</span>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col bg-cover p-16">
                    <div className="flex flex-1 items-center justify-center text-center">
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
                                        <td>{patient.datanasc}</td>
                                        <td><Button value={patient.id} as='a' href='/create' variant="primary">Edit</Button>{' '}</td>
                                        <td><Button value={patient.id} as='a' href='/create' variant="danger">Remove</Button>{' '}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className='text-center align-content-center'>
                    
                </div>
            </div>
        </>
    )
}